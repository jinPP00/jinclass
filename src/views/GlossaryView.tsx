import React, { useState } from 'react';
import { GLOSSARY_DATA } from '../data/glossaryData';
import type { GlossaryItem } from '../types';
import { Search, X } from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [activeItem, setActiveItem] = useState<GlossaryItem | null>(null);

  const categories = ['전체', 'AI 에이전트', '바이브코딩', '자동화 인프라'];

  const filteredItems = GLOSSARY_DATA.filter((item) => {
    const matchCat = selectedCategory === '전체' || item.category === selectedCategory;
    const matchSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.englishTerm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ maxWidth: '1050px', margin: '0 auto', padding: '3rem 1.25rem 6rem' }}>
      {/* Header */}
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.35rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '0.4rem',
          color: 'var(--fg)'
        }}>
          단어장
        </h1>
        <p style={{ color: 'var(--muted-fg)', fontSize: '1rem' }}>
          AI 비즈니스 자동화와 바이브 코딩에 꼭 필요한 핵심 용어 모음집입니다.
        </p>
      </header>

      {/* Search & Filter Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        {/* Search Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          backgroundColor: 'var(--card)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-md)',
          padding: '0.75rem 1rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Search size={18} style={{ color: 'var(--dim)' }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="용어 검색 (예: Codex, 클로드 코드, VPS, 바이브코딩...)"
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--fg)',
              fontSize: '0.95rem'
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.45rem 0.95rem',
                borderRadius: '999px',
                border: selectedCategory === cat ? '1px solid var(--primary)' : '1px solid var(--line)',
                backgroundColor: selectedCategory === cat ? 'var(--blue-50)' : 'var(--card)',
                color: selectedCategory === cat ? 'var(--primary)' : 'var(--muted-fg)',
                fontWeight: 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
        gap: '1.25rem'
      }}>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-sm)',
              transition: 'transform 0.15s ease, border-color 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--line)';
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="badge badge-outline" style={{ fontSize: '0.7rem' }}>
                  {item.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--dim)', fontFamily: 'monospace' }}>
                  {item.englishTerm}
                </span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--fg)', marginBottom: '0.5rem' }}>
                {item.term}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted-fg)', lineHeight: 1.5 }}>
                {item.summary}
              </p>
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--blue-600)', fontWeight: 600 }}>
              <span>자세히 읽기</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {activeItem && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: 'var(--card)',
            color: 'var(--fg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--line)',
            width: '100%',
            maxWidth: '560px',
            padding: '2rem 1.75rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
            position: 'relative'
          }}>
            <button
              onClick={() => setActiveItem(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                color: 'var(--muted-fg)',
                cursor: 'pointer',
                padding: '0.25rem'
              }}
            >
              <X size={20} />
            </button>

            <span className="badge badge-outline" style={{ marginBottom: '0.75rem' }}>
              {activeItem.category}
            </span>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800 }}>
              {activeItem.term}
            </h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--dim)', marginBottom: '1.25rem', fontFamily: 'monospace' }}>
              {activeItem.englishTerm}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '0.35rem' }}>
                  상세 설명
                </strong>
                <p style={{ fontSize: '0.92rem', color: 'var(--fg)', lineHeight: 1.6 }}>
                  {activeItem.detailedDescription}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.1rem'
              }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--fg)', marginBottom: '0.3rem' }}>
                  💡 실무 적용 예시
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--dim)', lineHeight: 1.5 }}>
                  {activeItem.example}
                </p>
              </div>

              <div>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--dim)', marginBottom: '0.4rem' }}>
                  연관 개념
                </strong>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {activeItem.relatedTerms.map((rt, i) => (
                    <span key={i} className="badge badge-outline" style={{ fontSize: '0.75rem' }}>
                      #{rt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveItem(null)}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1.75rem', padding: '0.75rem' }}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
