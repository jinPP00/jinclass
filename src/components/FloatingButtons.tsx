import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openKakaoChat = () => {
    alert('카카오톡 채널 상담: @AI진클래스 고객센터와 1:1 상담창이 열립니다.');
  };

  return (
    <div style={{
      position: 'fixed',
      right: '1.25rem',
      bottom: '5.25rem',
      zIndex: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      alignItems: 'center'
    }}>
      {/* Kakao Channel Button */}
      <button
        onClick={openKakaoChat}
        aria-label="카카오톡 채널 상담"
        title="카카오톡 채널 상담"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#FEE500',
          color: '#191919',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
          transition: 'transform 0.15s ease, filter 0.15s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {/* Kakao SVG Icon */}
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.8 5.3 4.6 6.7L5.5 21l3.8-2.5c.9.2 1.8.3 2.7.3 5.5 0 10-3.6 10-8s-4.5-7.8-10-7.8z"/>
        </svg>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
          title="맨 위로 이동"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--card)',
            color: 'var(--fg)',
            border: '1px solid var(--line)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
            transition: 'transform 0.15s ease, opacity 0.2s ease',
            opacity: showScrollTop ? 1 : 0
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};
