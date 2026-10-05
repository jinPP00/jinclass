import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onBack?: () => void;
  showBackButton?: boolean;
  currentUser?: string | null;
  onGoToMyCourse?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  onOpenAuth,
  isDark,
  onToggleTheme,
  onBack,
  showBackButton,
  currentUser,
  onGoToMyCourse
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'KO' | 'EN'>('KO');

  const navItems = [
    { id: 'courses', label: '강의' },
    { id: 'business-model', label: '내 비즈니스 모델', badge: 'NEW' },
    { id: 'glossary', label: '단어장' },
    { id: 'boards', label: '게시판' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: '1px solid var(--line)',
      backgroundColor: isDark ? 'rgba(9, 9, 11, 0.92)' : 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      transition: 'background-color 0.2s ease, border-color 0.2s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.65rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'between',
        gap: '1rem'
      }}>
        {/* Left: Brand & Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flex: 1 }}>
          {showBackButton && (
            <button
              onClick={onBack}
              aria-label="뒤로가기"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--muted-fg)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.35rem',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <ArrowLeft size={18} />
            </button>
          )}

          {/* Logo */}
          <button
            onClick={() => onTabChange('home')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: 0,
              textAlign: 'left'
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 800,
              fontSize: '15px',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.35)'
            }}>
              진
            </div>
            <span style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
              display: 'inline-block'
            }}>
              AI진클래스
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--fg)' : 'var(--muted-fg)',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color 0.15s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  {item.label}
                  {item.badge && (
                    <span style={{
                      backgroundColor: '#2563eb',
                      color: '#ffffff',
                      fontSize: '9px',
                      fontWeight: 700,
                      padding: '2px 5px',
                      borderRadius: '999px',
                      lineHeight: 1
                    }}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-12px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '2px'
                    }} />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* EN/KO Toggle */}
          <button
            onClick={() => setLang(lang === 'KO' ? 'EN' : 'KO')}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--muted-fg)',
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '0.3rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer'
            }}
          >
            {lang === 'KO' ? 'EN' : 'KO'}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--muted-fg)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              transition: 'background-color 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* User Status / Login / Signup Buttons */}
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--fg)', fontWeight: 600, display: 'none' }} className="user-email-badge">
                {currentUser.split('@')[0]}님
              </span>
              <button
                onClick={onGoToMyCourse}
                className="btn btn-primary"
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                내 강의실
              </button>
            </div>
          ) : (
            <>
              {/* Login Button */}
              <button
                onClick={() => onOpenAuth('login')}
                className="btn btn-ghost"
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                로그인
              </button>

              {/* Signup Button */}
              <button
                onClick={() => onOpenAuth('signup')}
                className="btn btn-primary"
                style={{
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                회원가입
              </button>
            </>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-hamburger"
            aria-label="메뉴 열기"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--fg)',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          borderTop: '1px solid var(--line)',
          backgroundColor: 'var(--card)',
          padding: '1rem 1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem'
        }}>
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--primary)' : 'var(--fg)',
                  padding: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span style={{
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: '999px'
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 640px) {
          .desktop-nav {
            display: flex !important;
          }
          .user-email-badge {
            display: inline-block !important;
          }
        }
        @media (max-width: 639px) {
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
