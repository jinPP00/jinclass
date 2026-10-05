import React, { useState } from 'react';
import { COURSES, BM_PACKS } from '../data/coursesData';

interface CoursesViewProps {
  onSelectCourse: (courseId: string) => void;
  onBuyPack: (pack: { title: string; price: number }) => void;
  onStartBusinessModel: () => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  onSelectCourse,
  onBuyPack,
  onStartBusinessModel
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const courseFaqs = [
    {
      q: 'AI 에이전트 강의에서 무엇을 배우나요?',
      a: '클로드 코드(Claude Code)·코덱스(Codex) 같은 AI 에이전트로 1인 비즈니스를 자동화하고, 나만의 사이트·서비스를 직접 만드는 법을 배웁니다.'
    },
    {
      q: '비개발자도 들을 수 있나요?',
      a: '네, 코딩을 몰라도 따라 할 수 있도록 단계별로 구성되어 있습니다. 직장인·크리에이터·예비 창업자를 대상으로 합니다.'
    },
    {
      q: '강의는 어떻게 수강하나요?',
      a: '결제 후 VOD로 PC·모바일에서 바로 수강할 수 있습니다.'
    },
    {
      q: '강의 전에 무엇을 먼저 해보면 좋나요?',
      a: '무료 비즈니스 모델 진단으로 내게 맞는 수익모델을 먼저 받아본 뒤, 강의로 실제 구축을 이어가는 것을 추천합니다.'
    }
  ];

  return (
    <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '3rem 1.25rem 5rem' }}>
      {/* Page Header */}
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.35rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '0.4rem',
          color: 'var(--fg)'
        }}>
          강의
        </h1>
        <p style={{ color: 'var(--muted-fg)', fontSize: '1rem' }}>
          본인의 페이스로 학습 가능한 VOD 강의 모음.
        </p>
      </header>

      {/* Course Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.75rem'
      }}>
        {COURSES.map((course) => {
          return (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course.id)}
              style={{
                backgroundColor: 'var(--card)',
                color: 'var(--card-fg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--line)',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Thumbnail Container */}
              <div style={{
                position: 'relative',
                aspectRatio: '16 / 9',
                overflow: 'hidden',
                backgroundColor: 'var(--muted)'
              }}>
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {course.isSoldOut && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.1rem'
                  }}>
                    모집 마감 (품절)
                  </div>
                )}
              </div>

              {/* Card Header & Content */}
              <div style={{ padding: '1.25rem 1.25rem 1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  {course.badges.map((b, idx) => {
                    let badgeClass = 'badge badge-outline';
                    if (b.variant === 'red') badgeClass = 'badge badge-red';
                    if (b.variant === 'green') badgeClass = 'badge badge-green';
                    if (b.variant === 'secondary') badgeClass = 'badge badge-secondary';
                    return (
                      <span key={idx} className={badgeClass}>
                        {b.text}
                      </span>
                    );
                  })}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  lineHeight: 1.35,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.4rem',
                  color: 'var(--fg)'
                }}>
                  {course.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted-fg)',
                  lineHeight: 1.5,
                  flex: 1
                }}>
                  {course.subtitle}
                </p>
              </div>

              {/* Card Footer: Pricing */}
              <div style={{
                borderTop: '1px solid var(--line)',
                backgroundColor: 'var(--bg-alt)',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--muted-fg)',
                    textDecoration: 'line-through',
                    fontVariantNumeric: 'tabular-nums'
                  }}>
                    {course.originalPrice.toLocaleString()}원
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                    <span style={{
                      color: 'var(--red-600)',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      fontVariantNumeric: 'tabular-nums'
                    }}>
                      {course.discountRate}%
                    </span>
                    <span style={{
                      fontWeight: 800,
                      fontSize: '1.15rem',
                      color: 'var(--fg)',
                      fontVariantNumeric: 'tabular-nums'
                    }}>
                      {course.price.toLocaleString()}원
                    </span>
                  </div>
                </div>

                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--muted-fg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem'
                }}>
                  자세히 →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Analysis Pack Section */}
      <section style={{ marginTop: '3.5rem', borderTop: '1px solid var(--line)', paddingTop: '2.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fg)' }}>
              ⚡ 비즈니스 모델 분석 추가 횟수
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-fg)', marginTop: '0.25rem' }}>
              무료 한도 외에 분석 횟수를 충전하세요. 유효기간 없이 평생 사용.
            </p>
          </div>
          <button
            onClick={onStartBusinessModel}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            무료 진단 먼저 받기 →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {BM_PACKS.map((pack) => (
            <div
              key={pack.id}
              onClick={() => onBuyPack({ title: pack.title, price: pack.price })}
              style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--line)',
                padding: '1.35rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--blue-600)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    분석 횟수 팩
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--fg)' }}>
                    {pack.title}
                  </h3>
                </div>
                <span className="badge badge-outline" style={{ fontSize: '0.7rem' }}>
                  {pack.badge}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '1rem' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--fg)', fontVariantNumeric: 'tabular-nums' }}>
                  {pack.price.toLocaleString()}원
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted-fg)' }}>
                  {pack.perPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section style={{ maxWidth: '780px', margin: '4rem auto 0' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
          자주 묻는 질문
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {courseFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                onClick={() => setOpenFaq(isOpen ? null : index)}
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.1rem 1.25rem',
                  backgroundColor: 'var(--card)',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s ease'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontWeight: 600,
                  fontSize: '0.98rem'
                }}>
                  <span>{faq.q}</span>
                  <span style={{
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    color: 'var(--dim)',
                    fontSize: '1.25rem'
                  }}>
                    +
                  </span>
                </div>
                {isOpen && (
                  <p style={{
                    color: 'var(--muted-fg)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    marginTop: '0.75rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--line)'
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
