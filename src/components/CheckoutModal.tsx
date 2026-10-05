import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  item: {
    title: string;
    price: number;
    originalPrice?: number;
    badge?: string;
  } | null;
  onClose: () => void;
  onSuccess: (itemTitle: string) => void;
  onOpenLearn?: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  item,
  onClose,
  onSuccess,
  onOpenLearn
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'toss' | 'kakao' | 'naver'>('card');
  const [installment, setInstallment] = useState('12');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen || !item) return null;

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      // Fireworks animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      onSuccess(item.title);
    }, 1200);
  };

  const resetAndClose = () => {
    setIsCompleted(false);
    setIsProcessing(false);
    onClose();
  };

  const monthlyPrice = Math.round(item.price / 12);
  const dailyPrice = Math.round(item.price / 360);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(5px)',
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
        maxWidth: '460px',
        padding: '2rem 1.75rem',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}>
        <button
          onClick={resetAndClose}
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

        {isCompleted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#ecfdf5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <CheckCircle2 size={38} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>결제가 정상 완료되었습니다!</h3>
            <p style={{ color: 'var(--muted-fg)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              <strong>{item.title}</strong> 수강 권한이 즉시 부여되었습니다.<br />
              등록된 이메일로 강의실 접속 링크 및 영수증이 발송되었습니다.
            </p>
            <button
              onClick={() => {
                resetAndClose();
                if (onOpenLearn) onOpenLearn();
              }}
              className="btn btn-primary"
              style={{
                width: '100%',
                marginTop: '1.75rem',
                padding: '0.9rem',
                fontSize: '1rem',
                fontWeight: 700
              }}
            >
              내 강의실로 바로 가기 →
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--blue-600)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                <ShieldCheck size={16} /> 토스페이먼츠 안전 암호화 결제
              </div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>주문서 작성 / 결제</h2>
            </div>

            {/* Order Item Box */}
            <div style={{
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '1.1rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--dim)', marginBottom: '0.25rem' }}>상품 정보</div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--fg)', marginBottom: '0.5rem' }}>
                {item.title}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--dim)' }}>
                  {item.originalPrice && (
                    <span style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>
                      {item.originalPrice.toLocaleString()}원
                    </span>
                  )}
                  실 결제금액
                </span>
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--blue-600)' }}>
                  {item.price.toLocaleString()}원
                </span>
              </div>
              {item.price > 100000 && (
                <div style={{
                  marginTop: '0.65rem',
                  paddingTop: '0.65rem',
                  borderTop: '1px dashed var(--line)',
                  fontSize: '0.78rem',
                  color: 'var(--dim)'
                }}>
                  💡 12개월 무이자 할부 시 <strong>월 {monthlyPrice.toLocaleString()}원</strong> (하루 약 {dailyPrice.toLocaleString()}원)
                </div>
              )}
            </div>

            {/* Payment Method Selector */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                결제 수단 선택
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: paymentMethod === 'card' ? '2px solid var(--primary)' : '1px solid var(--line)',
                    backgroundColor: paymentMethod === 'card' ? 'var(--blue-50)' : 'var(--card)',
                    color: paymentMethod === 'card' ? 'var(--primary)' : 'var(--fg)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <CreditCard size={16} /> 신용/체크카드
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('toss')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: paymentMethod === 'toss' ? '2px solid var(--primary)' : '1px solid var(--line)',
                    backgroundColor: paymentMethod === 'toss' ? 'var(--blue-50)' : 'var(--card)',
                    color: paymentMethod === 'toss' ? 'var(--primary)' : 'var(--fg)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  토스페이
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('kakao')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: paymentMethod === 'kakao' ? '2px solid #FEE500' : '1px solid var(--line)',
                    backgroundColor: paymentMethod === 'kakao' ? '#FFFBEB' : 'var(--card)',
                    color: '#191919',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  카카오페이
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('naver')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: paymentMethod === 'naver' ? '2px solid #03C75A' : '1px solid var(--line)',
                    backgroundColor: paymentMethod === 'naver' ? '#F0FDF4' : 'var(--card)',
                    color: '#03C75A',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  네이버페이
                </button>
              </div>
            </div>

            {/* Installment Options (for large amount) */}
            {item.price > 100000 && paymentMethod === 'card' && (
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  할부 기간
                </label>
                <select
                  value={installment}
                  onChange={(e) => setInstallment(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--line)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--fg)',
                    fontSize: '0.85rem'
                  }}
                >
                  <option value="1">일시불</option>
                  <option value="3">3개월 무이자 할부</option>
                  <option value="6">6개월 무이자 할부</option>
                  <option value="12">12개월 무이자 할부 (추천)</option>
                </select>
              </div>
            )}

            {/* Submit Pay Button */}
            <button
              onClick={handlePay}
              disabled={isProcessing}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.95rem',
                fontSize: '1.05rem',
                fontWeight: 800,
                borderRadius: 'var(--radius-md)',
                marginTop: '0.5rem'
              }}
            >
              {isProcessing ? '안전하게 결제 처리 중...' : `${item.price.toLocaleString()}원 결제하기`}
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--dim)', marginTop: '0.85rem' }}>
              결제 즉시 수강이 가능하며 전자상거래 소비자 보호법을 준수합니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
