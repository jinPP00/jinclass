import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HomeViewProps {
  onStartBusinessModel: () => void;
  onGoToCourses: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onStartBusinessModel,
  onGoToCourses
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: '정말 무료인가요?',
      a: '네. 가입만 하면 나에게 맞는 비즈니스 모델을 무료로 만들어 볼 수 있습니다. 결제·카드 등록이 필요 없습니다.'
    },
    {
      q: '비개발자도 되나요?',
      a: '네. 코딩 지식 0에서 시작하는 분들을 기준으로 설계했습니다. 복잡한 프로그래밍 언어 대신 내 경험과 떠오르는 생각만 자연어로 적으면 AI 에이전트가 알아서 분석합니다.'
    },
    {
      q: '결과를 받으면 뭘 하나요?',
      a: 'AI가 도출한 4가지 수익 모델 후보 중 지금 당장 시작할 1개를 고르고, 30일 액션 로드맵에 따라 차근차근 실행으로 이어갑니다. 분석이 완료되면 결과 링크를 영구 보관할 수 있습니다.'
    }
  ];

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: 'linear-gradient(120deg, var(--blue-700), var(--blue-600))',
        color: '#ffffff',
        padding: '4.5rem 1.25rem 4rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          {/* Tag Pill */}
          <span style={{
            display: 'inline-block',
            fontSize: '0.72rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            color: '#ffffff',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            borderRadius: '999px',
            padding: '0.4rem 1rem',
            marginBottom: '1.25rem'
          }}>
            AI · 자동화 · 온라인 수익화
          </span>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.2rem)',
            lineHeight: 1.3,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            marginBottom: '1rem'
          }}>
            “나는 <span style={{ color: '#bfdbfe' }}>뭘로</span> 돈을 벌 수 있을까?”<br />
            5분+ 만에 답을 받으세요
          </h1>

          {/* Subtitle */}
          <p style={{
            color: '#dbe8ff',
            fontSize: '1rem',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            fontWeight: 400
          }}>
            나에 대해 아는 만큼만 적으면, <strong style={{ color: '#fff' }}>4가지 AI 수익모델 후보</strong>와<br />
            지금 시작할 1개를 고르는 30일 실행 순서를 받습니다.
          </p>

          {/* Free Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(255, 255, 255, 0.14)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            borderRadius: '999px',
            padding: '0.5rem 1.1rem',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '1.5rem'
          }}>
            🎁 가입하면 <strong>무료</strong> · 결제 없음
          </div>

          {/* Main Hero CTA Button */}
          <button
            onClick={onStartBusinessModel}
            className="btn btn-cta-large btn-invert"
            style={{
              padding: '1.05rem 1.75rem',
              fontSize: '1.05rem',
              marginBottom: '0.85rem',
              width: '100%',
              display: 'block'
            }}
          >
            👉 무료로 내 비즈니스 모델 만들기
          </button>

          {/* Micro text */}
          <p style={{ fontSize: '0.78rem', color: '#bfdbfe' }}>
            30초면 시작 · 분석이 끝나면 가입 이메일로 알려드려요
          </p>
        </div>
      </section>

      {/* 2. PAIN POINTS SECTION */}
      <section style={{
        padding: '3.5rem 1.25rem',
        borderTop: '1px solid var(--line)',
        backgroundColor: 'var(--bg)'
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.45rem',
            fontWeight: 900,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            textAlign: 'left'
          }}>
            혹시, 이런 고민 아니세요?
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '1.1rem 1.25rem',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem'
            }}>
              <span style={{ color: 'var(--blue-600)', fontWeight: 900, flexShrink: 0 }}>Q.</span>
              <div style={{ fontSize: '0.95rem' }}>
                <strong style={{ color: 'var(--fg)' }}>“AI로 돈 번다는데,</strong>{' '}
                <span style={{ color: 'var(--dim)' }}>정작 나는 뭘 팔아야 할지 모르겠어요.”</span>
              </div>
            </div>

            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '1.1rem 1.25rem',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem'
            }}>
              <span style={{ color: 'var(--blue-600)', fontWeight: 900, flexShrink: 0 }}>Q.</span>
              <div style={{ fontSize: '0.95rem' }}>
                <strong style={{ color: 'var(--fg)' }}>“배우긴 많이 배웠는데,</strong>{' '}
                <span style={{ color: 'var(--dim)' }}>내 상황에 맞게 어떻게 시작할지 막막해요.”</span>
              </div>
            </div>

            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '1.1rem 1.25rem',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem'
            }}>
              <span style={{ color: 'var(--blue-600)', fontWeight: 900, flexShrink: 0 }}>Q.</span>
              <div style={{ fontSize: '0.95rem' }}>
                <strong style={{ color: 'var(--fg)' }}>“시간·돈·기술이 부족한데</strong>{' '}
                <span style={{ color: 'var(--dim)' }}>그래도 할 수 있는 게 있을까요?”</span>
              </div>
            </div>
          </div>

          <p style={{
            textAlign: 'center',
            color: 'var(--dim)',
            fontSize: '0.92rem',
            margin: '1.25rem 0'
          }}>
            → 문제는 <strong style={{ color: 'var(--fg)' }}>능력</strong>이 아니라 <strong style={{ color: 'var(--blue-600)' }}>‘나에게 맞는 방향’</strong>이 없는 겁니다.
          </p>

          <button
            onClick={onStartBusinessModel}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.85rem',
              fontSize: '0.95rem',
              fontWeight: 800,
              borderRadius: 'var(--radius-full)'
            }}
          >
            내 방향 무료로 찾기 →
          </button>
        </div>
      </section>

      {/* 3. 5-MINUTE PROCESS SECTION */}
      <section style={{
        padding: '3.5rem 1.25rem',
        borderTop: '1px solid var(--line)',
        backgroundColor: 'var(--bg-alt)'
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.45rem',
            fontWeight: 900,
            marginBottom: '1.75rem',
            letterSpacing: '-0.03em'
          }}>
            이렇게 <span style={{ color: 'var(--blue-600)' }}>5분+</span>면 끝납니다
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: 0,
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--blue-500), var(--blue-600))',
                color: '#fff',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.35)'
              }}>
                1
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.02rem', color: 'var(--fg)', marginBottom: '0.2rem' }}>
                  아는 만큼 자기소개하기
                </strong>
                <span style={{ color: 'var(--dim)', fontSize: '0.88rem' }}>
                  7가지 항목 중 떠오르는 것만 적으면 돼요
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: 0,
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--blue-500), var(--blue-600))',
                color: '#fff',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.35)'
              }}>
                2
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.02rem', color: 'var(--fg)', marginBottom: '0.2rem' }}>
                  AI가 4가지 후보 분석
                </strong>
                <span style={{ color: 'var(--dim)', fontSize: '0.88rem' }}>
                  부족한 정보는 보강 질문으로 꼼꼼하게 확인해요
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: 0,
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--blue-500), var(--blue-600))',
                color: '#fff',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.35)'
              }}>
                3
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.02rem', color: 'var(--fg)', marginBottom: '0.2rem' }}>
                  1개 선택 + 30일 실행
                </strong>
                <span style={{ color: 'var(--dim)', fontSize: '0.88rem' }}>
                  누구에게 무엇을 팔지와 구체적인 실행 순서를 정해요
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESULT SAMPLE SECTION */}
      <section style={{
        padding: '3.5rem 1.25rem',
        borderTop: '1px solid var(--line)',
        backgroundColor: 'var(--bg)'
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.45rem',
            fontWeight: 900,
            marginBottom: '0.35rem',
            letterSpacing: '-0.03em'
          }}>
            이런 결과를 받게 됩니다
          </h2>
          <p style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--dim)',
            textAlign: 'center',
            margin: '0.5rem 0 1.5rem'
          }}>
            — 실제 생성 결과 예시 —
          </p>

          {/* Generated Result Card Container */}
          <div style={{
            background: 'var(--violet-50)',
            border: '1px solid var(--violet-200)',
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 8px 26px rgba(109, 40, 217, 0.12)'
          }}>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(90deg, var(--violet-700), #7c3aed)',
              padding: '1rem 1.25rem',
              fontWeight: 800,
              color: '#ffffff',
              fontSize: '0.95rem'
            }}>
              🎯 당신을 위한 추천 비즈니스 모델
            </div>

            {/* Body */}
            <div style={{ padding: '1.25rem', backgroundColor: 'var(--card)' }}>
              {/* Row 1: Model */}
              <div style={{ marginBottom: '1.1rem' }}>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--violet-700)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em'
                }}>
                  추천 모델
                </div>
                <div style={{ fontSize: '1rem', marginTop: '0.25rem', color: 'var(--fg)', fontWeight: 700 }}>
                  ‘틈새 자동화 대행’ — SNS 콘텐츠 자동 생성·발행 서비스
                </div>
              </div>

              {/* Row 2: Why fit */}
              <div style={{ marginBottom: '1.1rem' }}>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--violet-700)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em'
                }}>
                  왜 당신에게 맞나
                </div>
                <div style={{ fontSize: '0.9rem', marginTop: '0.25rem', color: 'var(--dim)' }}>
                  직장인 · 하루 1시간 · 마케팅 관심 → 초기 자본 없이 자동화로 시작 가능
                </div>
              </div>

              {/* Row 3: Roadmap */}
              <div style={{ marginBottom: '1.1rem' }}>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--violet-700)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: '0.4rem'
                }}>
                  30일 로드맵
                </div>
                <div style={{
                  background: 'var(--violet-50)',
                  border: '1px solid var(--violet-200)',
                  borderRadius: '12px',
                  padding: '0.9rem 1rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: 'var(--fg)'
                }}>
                  <strong style={{ color: 'var(--violet-700)' }}>1주차</strong> 타깃·상품 정의 + 자동화 도구 세팅<br />
                  <strong style={{ color: 'var(--violet-700)' }}>2주차</strong> 콘텐츠 자동 생성 파이프라인 구축<br />
                  <strong style={{ color: 'var(--violet-700)' }}>3주차</strong> 샘플 3건 제작 → 첫 잠재고객 제안<br />
                  <strong style={{ color: 'var(--violet-700)' }}>4주차</strong> 첫 유료 계약 + 텔레그램 승인 자동화
                </div>
              </div>

              {/* Row 4: Tools */}
              <div style={{ marginBottom: '1.1rem' }}>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--violet-700)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: '0.4rem'
                }}>
                  필요한 AI 도구
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{
                    backgroundColor: 'var(--blue-50)',
                    color: 'var(--blue-700)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                    border: '1px solid var(--blue-200)'
                  }}>
                    AI 에이전트
                  </span>
                  <span style={{
                    backgroundColor: 'var(--blue-50)',
                    color: 'var(--blue-700)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                    border: '1px solid var(--blue-200)'
                  }}>
                    자동 발행 파이프라인
                  </span>
                  <span style={{
                    backgroundColor: 'var(--blue-50)',
                    color: 'var(--blue-700)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                    border: '1px solid var(--blue-200)'
                  }}>
                    이미지 자동 생성
                  </span>
                </div>
              </div>

              {/* Row 5: First Goal */}
              <div>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--violet-700)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em'
                }}>
                  첫 검증 목표
                </div>
                <div style={{ fontSize: '0.9rem', marginTop: '0.25rem', color: 'var(--fg)', fontWeight: 600 }}>
                  잠재고객 3명에게 무료 제안 · 반응을 확인한 뒤 유료화
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <button
              onClick={onStartBusinessModel}
              className="btn btn-cta-large"
              style={{ padding: '0.95rem 1.5rem' }}
            >
              👉 내 결과 무료로 받기
            </button>
          </div>
        </div>
      </section>

      {/* 4.5 COURSE HIGHLIGHT BRIDGE SECTION */}
      <section style={{
        padding: '3.5rem 1.25rem',
        borderTop: '1px solid var(--line)',
        backgroundColor: 'var(--bg-alt)'
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--blue-600)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              공식 마스터클래스
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginTop: '0.25rem', letterSpacing: '-0.03em' }}>
              수익 모델을 찾았다면,<br />
              <span style={{ color: 'var(--blue-600)' }}>“해줘”</span>로 실현하세요
            </h2>
            <p style={{ color: 'var(--dim)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
              판매 사이트 구축부터 토스 결제, 24시간 무인 운영 에이전트까지 한 번에
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--line)',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="badge badge-outline" style={{ fontSize: '0.7rem' }}>중급</span>
              <span className="badge badge-red" style={{ fontSize: '0.7rem' }}>🔥 70% 할인</span>
              <span className="badge badge-outline" style={{ fontSize: '0.7rem' }}>68강 13시간 22분</span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--fg)' }}>
                “해줘” 비즈니스 자동화 강의
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--dim)', marginTop: '0.25rem' }}>
                코딩 없이 말 한마디로 내 지식 판매 사이트와 24시간 일하는 AI 에이전트를 완성합니다.
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--line)',
              paddingTop: '1rem'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--dim)' }}>
                <span style={{ textDecoration: 'line-through', marginRight: '0.4rem' }}>3,330,000원</span>
                월 약 83,250원 (12개월)
              </span>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--blue-600)' }}>
                999,000원
              </span>
            </div>

            <button
              onClick={onGoToCourses}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem', fontWeight: 700 }}
            >
              강의 커리큘럼 자세히 보기 →
            </button>
          </div>
        </div>
      </section>

      {/* 5. TRUST NUMBERS SECTION */}
      <section style={{
        padding: '3.5rem 1.25rem',
        borderTop: '1px solid var(--line)',
        backgroundColor: 'var(--bg-alt)'
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.45rem',
            fontWeight: 900,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            믿고 시작하세요
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.75rem'
          }}>
            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 0.75rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <strong style={{ display: 'block', fontSize: '1.65rem', fontWeight: 900, color: 'var(--blue-600)', letterSpacing: '-0.02em' }}>
                3,000+
              </strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--dim)' }}>비즈니스 모델 생성</span>
            </div>

            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 0.75rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <strong style={{ display: 'block', fontSize: '1.65rem', fontWeight: 900, color: 'var(--blue-600)', letterSpacing: '-0.02em' }}>
                0원
              </strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--dim)' }}>가입 시 무료 제공</span>
            </div>

            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 0.75rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <strong style={{ display: 'block', fontSize: '1.65rem', fontWeight: 900, color: 'var(--blue-600)', letterSpacing: '-0.02em' }}>
                5분+
              </strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--dim)' }}>결과까지 걸리는 시간</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section style={{
        padding: '3.5rem 1.25rem',
        borderTop: '1px solid var(--line)',
        backgroundColor: 'var(--bg)'
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.45rem',
            fontWeight: 900,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            자주 묻는 질문
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.1rem 1.25rem',
                    background: 'var(--card)',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: '0.98rem'
                  }}>
                    <span>{faq.q}</span>
                    <span style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      color: 'var(--dim)',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <ChevronDown size={18} />
                    </span>
                  </div>
                  {isOpen && (
                    <p style={{
                      color: 'var(--dim)',
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

          <button
            onClick={onStartBusinessModel}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.85rem',
              fontSize: '0.95rem',
              fontWeight: 800,
              borderRadius: 'var(--radius-full)'
            }}
          >
            지금 무료로 시작하기 →
          </button>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section style={{
        padding: '4rem 1.25rem 5rem',
        borderTop: '1px solid var(--line)',
        backgroundColor: 'var(--bg-alt)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.72rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--blue-700)',
            background: 'var(--blue-50)',
            border: '1px solid var(--blue-200)',
            borderRadius: '999px',
            padding: '0.4rem 1rem',
            marginBottom: '1rem'
          }}>
            30초면 시작
          </span>

          <h2 style={{
            fontSize: '1.6rem',
            fontWeight: 900,
            lineHeight: 1.35,
            marginBottom: '0.85rem',
            letterSpacing: '-0.04em'
          }}>
            지금 내 비즈니스 모델을<br />
            무료로 만들어 보세요
          </h2>

          <p style={{ color: 'var(--dim)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            자기소개 → AI 분석 → 1개 선택 + 30일 액션. 그게 전부입니다.
          </p>

          <button
            onClick={onStartBusinessModel}
            className="btn btn-cta-large"
            style={{ padding: '1rem 1.5rem', fontSize: '1.05rem' }}
          >
            🎁 무료 비즈니스 모델 생성 시작
          </button>

          <p style={{ fontSize: '0.78rem', color: 'var(--dim)', marginTop: '0.85rem' }}>
            가입 즉시 무료 생성 · 카드 등록 없음
          </p>
        </div>
      </section>

      {/* 8. FIXED STICKY BOTTOM BAR */}
      <div style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 35,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--line)',
        padding: '0.75rem 1.25rem',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <button
            onClick={onStartBusinessModel}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.85rem',
              fontSize: '0.95rem',
              fontWeight: 800,
              borderRadius: '999px',
              boxShadow: 'var(--shadow-blue)'
            }}
          >
            🎁 무료 비즈니스 모델 만들기
          </button>
        </div>
      </div>
    </div>
  );
};
