import React from 'react';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  return (
    <footer style={{
      borderTop: '1px solid var(--line)',
      backgroundColor: 'var(--bg-alt)',
      color: 'var(--dim)',
      fontSize: '0.75rem',
      lineHeight: 1.6,
      padding: '2.5rem 1.25rem 5rem'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem'
      }}>
        {/* Top Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start'
        }}>
          {/* Company Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <p style={{ fontWeight: 700, color: 'var(--fg)', fontSize: '0.85rem' }}>
              AI진클래스 <span style={{ fontWeight: 400, color: 'var(--dim)', marginLeft: '0.35rem' }}>| 진클래스 스튜디오(jinclass)</span>
            </p>
            <p>
              대표자: 이동화 · 사업자등록번호: <span style={{ fontVariantNumeric: 'tabular-nums' }}>717-04-02574</span> · 통신판매업신고: 2024-화성새솔-0029
            </p>
            <p>주소: 경기도 화성시 새솔동 꽃내음1길 35 507호</p>
            <p>
              개인정보관리책임자: 이동화 · 고객센터: <a href="mailto:support@jinclass.com" style={{ textDecoration: 'underline', color: 'var(--fg)' }}>support@jinclass.com</a>
            </p>
          </div>

          {/* Policy Links */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'flex-start'
          }}>
            <button
              onClick={() => alert('사업자정보: 진클래스 스튜디오 / 717-04-02574 / 경기도 화성시 새솔동')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--dim)', fontSize: '0.75rem', cursor: 'pointer', textDecoration: 'underline' }}
            >
              사업자정보 확인
            </button>
            <button
              onClick={() => alert('이용약관: 본 서비스의 모든 콘텐츠에 대한 이용 규정을 준수합니다.')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--dim)', fontSize: '0.75rem', cursor: 'pointer', textDecoration: 'underline' }}
            >
              이용약관
            </button>
            <button
              onClick={() => alert('개인정보처리방침: 고객님의 개인정보를 소중히 보호하며 제3자에게 무단 제공하지 않습니다.')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--fg)', fontWeight: 600, fontSize: '0.75rem', cursor: 'pointer', textDecoration: 'underline' }}
            >
              개인정보처리방침
            </button>
          </div>
        </div>

        {/* Navigation Shortcut Menu */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1.25rem' }}>
          <p style={{ fontWeight: 600, color: 'var(--fg)', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
            주요 메뉴
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <button
              onClick={() => onTabChange('courses')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--dim)', cursor: 'pointer', fontSize: '0.75rem' }}
            >
              강의
            </button>
            <button
              onClick={() => onTabChange('business-model')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--dim)', cursor: 'pointer', fontSize: '0.75rem' }}
            >
              내 비즈니스 모델
            </button>
            <button
              onClick={() => onTabChange('glossary')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--dim)', cursor: 'pointer', fontSize: '0.75rem' }}
            >
              단어장
            </button>
            <button
              onClick={() => onTabChange('boards')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--dim)', cursor: 'pointer', fontSize: '0.75rem' }}
            >
              게시판
            </button>
          </div>
        </div>

        {/* Legal & Toss Payments Notice */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1rem', fontSize: '0.7rem', color: 'var(--dim)' }}>
          <p>© 2026 AI진클래스 (jinclass). All rights reserved.</p>
          <p style={{ marginTop: '0.3rem' }}>
            AI진클래스는 통신판매업 신고를 마쳤으며, 결제 처리는 토스페이먼츠 주식회사가 안전하게 대행합니다. 본 사이트의 모든 콘텐츠에 대한 저작권은 회사에 있으며 무단 복제 및 배포를 엄격히 금지합니다.
          </p>
        </div>
      </div>
    </footer>
  );
};
