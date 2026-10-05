import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signup';
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해 주세요.');
      return;
    }
    onSuccess(email);
    onClose();
  };

  const handleSocialLogin = (provider: string) => {
    onSuccess(`${provider.toLowerCase()}@user.com`);
    onClose();
  };

  return (
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
        maxWidth: '420px',
        padding: '2rem 1.75rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
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

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 800,
            fontSize: '18px',
            margin: '0 auto 0.75rem'
          }}>
            진
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            {mode === 'login' ? 'AI진클래스 로그인' : '무료 회원가입'}
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted-fg)', marginTop: '0.25rem' }}>
            {mode === 'login' 
              ? '비즈니스 자동화 여정을 이어가세요' 
              : '가입 즉시 나에게 맞는 AI 비즈니스 모델 무료 생성'}
          </p>
        </div>

        {/* Social Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
          <button
            onClick={() => handleSocialLogin('Kakao')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              backgroundColor: '#FEE500',
              color: '#191919',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)'
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.8 5.3 4.6 6.7L5.5 21l3.8-2.5c.9.2 1.8.3 2.7.3 5.5 0 10-3.6 10-8s-4.5-7.8-10-7.8z"/>
            </svg>
            카카오 1초 간편 시작
          </button>

          <button
            onClick={() => handleSocialLogin('Google')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              backgroundColor: 'var(--card)',
              color: 'var(--fg)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            Google 계정으로 계속하기
          </button>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          color: 'var(--dim)',
          fontSize: '0.75rem',
          margin: '1.25rem 0'
        }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--line)' }} />
          <span>또는 이메일로 {mode === 'login' ? '로그인' : '가입'}</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--line)' }} />
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
              이메일 주소
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              style={{
                width: '100%',
                padding: '0.75rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--line)',
                backgroundColor: 'var(--bg)',
                color: 'var(--fg)',
                fontSize: '0.875rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '0.75rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--line)',
                backgroundColor: 'var(--bg)',
                color: 'var(--fg)',
                fontSize: '0.875rem'
              }}
            />
          </div>

          {mode === 'signup' && (
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--muted-fg)', cursor: 'pointer', marginTop: '0.2rem' }}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ accentColor: 'var(--primary)' }}
              />
              서비스 이용약관 및 개인정보처리방침에 동의합니다
            </label>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              padding: '0.85rem',
              fontSize: '0.95rem',
              fontWeight: 700,
              marginTop: '0.5rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            {mode === 'login' ? '로그인하기' : '무료로 시작하기'}
          </button>
        </form>

        {/* Mode Toggle Footer */}
        <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--muted-fg)' }}>
          {mode === 'login' ? (
            <>
              계정이 없으신가요?{' '}
              <button
                onClick={() => setMode('signup')}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', padding: 0 }}
              >
                회원가입
              </button>
            </>
          ) : (
            <>
              이미 계정이 있으신가요?{' '}
              <button
                onClick={() => setMode('login')}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', padding: 0 }}
              >
                로그인
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
