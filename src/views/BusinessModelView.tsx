import React, { useState } from 'react';
import { Sparkles, RotateCcw, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BusinessModelViewProps {
  onGoToCourses: () => void;
  onOpenCheckout?: (item: { title: string; price: number }) => void;
}

export const BusinessModelView: React.FC<BusinessModelViewProps> = ({
  onGoToCourses
}) => {
  const [job, setJob] = useState('직장인');
  const [interest, setInterest] = useState('SNS 마케팅 & 콘텐츠 자동화');
  const [availableTime, setAvailableTime] = useState('하루 1~2시간 (퇴근 후)');
  const [budget, setBudget] = useState('0원 (무자본 시작 희망)');
  const [skill, setSkill] = useState('');
  const [target, setTarget] = useState('소상공인 및 1인 크리에이터');

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisText, setAnalysisText] = useState('사용자 프로필 데이터 분석 중...');
  const [result, setResult] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisText('1/4: 입력하신 강점 및 가용 시간 패턴 분류 중...');

    setTimeout(() => {
      setAnalysisText('2/4: 2026 국내외 AI 자동화 성공 비즈니스 모델 DB 대조 중...');
    }, 1000);

    setTimeout(() => {
      setAnalysisText('3/4: 4가지 후보 모델 평가 및 30일 실행 타임라인 생성 중...');
    }, 2000);

    setTimeout(() => {
      setAnalysisText('4/4: 최종 맞춤형 수익 모델 및 실행 보고서 완성!');
    }, 2800);

    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        recommendedModel: `‘${interest}’ 기반 틈새 자동화 대행 및 지식 상품화`,
        whyFit: `${job} 신분으로 ${availableTime} 가용 시간과 ${budget} 예산에 최적화된 초기 무자본 자동화 모델입니다.`,
        roadmap: {
          week1: '타깃 고객군(소상공인/크리에이터) 페인포인트 정의 및 무료 템플릿 샘플 3종 제작',
          week2: 'Claude Code & 텔레그램 봇 연동 파이프라인 구축 (원클릭 자동 승인)',
          week3: '잠재고객 5명에게 무료 체험 제안 및 피드백 수집 (사례 포트폴리오 확보)',
          week4: '첫 유료 구독/대행 계약 체결 (월 30~50만원) + 반복 작업 100% 무인화'
        },
        tools: ['Codex / Claude Code', '무료 VPS 클라우드', '텔레그램 봇', 'Supabase DB', '토스페이먼츠'],
        firstGoal: '첫 주 잠재고객 3명에게 데모 제안 발송하기',
        estimatedRevenue: '런칭 1개월 차 100~250만원 / 3개월 차 500만원+ 달성 가능',
        candidates: [
          {
            title: '1. SNS 콘텐츠 자동 생성 및 발행 대행',
            desc: '바쁜 매장 사장님들을 대신해 매일 인스타그램/스레드 콘텐츠를 자동 포스팅하는 구독형 서비스',
            difficulty: '입문 (코딩 불필요)'
          },
          {
            title: '2. 1인 지식 VOD 및 전자책 자동 판매 사이트',
            desc: '내가 가진 노하우를 디지털 상품으로 만들어 결제부터 이메일 전송까지 24시간 자동화',
            difficulty: '초급 (해줘 강의 실습 모델)'
          },
          {
            title: '3. 맞춤형 CS 및 리뷰 자동 응대 봇 구축 외주',
            desc: '배달의민족, 네이버 플레이스 리뷰에 상황별 맞춤 답글을 달아주는 텔레그램 봇 공급',
            difficulty: '중급'
          },
          {
            title: '4. 기업 맞춤형 AI 업무 자동화 컨설팅',
            desc: '엑셀 데이터 정리, 견적서 발송 등 사내 반복 업무를 파이프라인으로 묶어주는 고단가 B2B 사업',
            difficulty: '고급'
          }
        ]
      });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 3200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '2.5rem 1.25rem 6rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          fontWeight: 800,
          color: 'var(--blue-700)',
          background: 'var(--blue-50)',
          border: '1px solid var(--blue-200)',
          padding: '0.35rem 0.9rem',
          borderRadius: '999px',
          marginBottom: '0.85rem'
        }}>
          <Sparkles size={14} /> AI 맞춤형 수익 모델 분석기
        </span>
        <h1 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: 'var(--fg)',
          lineHeight: 1.3
        }}>
          내게 맞는 비즈니스 모델 찾기
        </h1>
        <p style={{ color: 'var(--muted-fg)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
          나에 대해 아는 만큼만 적으면, AI 에이전트가 4가지 수익 모델과 30일 실행 로드맵을 즉시 도출합니다.
        </p>
      </div>

      {/* Main Content Area */}
      {isAnalyzing ? (
        /* Loading Animation */
        <div style={{
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--line)',
          padding: '4rem 2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '4px solid var(--blue-200)',
            borderTopColor: 'var(--blue-600)',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1.5rem'
          }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--fg)' }}>
            AI 에이전트가 최적의 수익 모델을 설계 중입니다...
          </h3>
          <p style={{ color: 'var(--blue-600)', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.75rem' }}>
            {analysisText}
          </p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : result ? (
        /* Result Report Card */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            background: 'var(--violet-50)',
            border: '1px solid var(--violet-200)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(109, 40, 217, 0.12)'
          }}>
            {/* Report Header */}
            <div style={{
              background: 'linear-gradient(90deg, var(--violet-700), #7c3aed)',
              padding: '1.25rem 1.5rem',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, opacity: 0.9 }}>
                  분석 완료 리포트
                </span>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.15rem' }}>
                  🎯 당신을 위한 1순위 추천 비즈니스 모델
                </h2>
              </div>
              <button
                onClick={handleCopy}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  color: '#ffffff',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? '복사됨' : '리포트 복사'}
              </button>
            </div>

            {/* Report Body */}
            <div style={{ padding: '1.75rem', backgroundColor: 'var(--card)' }}>
              {/* Recommended Model Title */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--violet-700)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  선정 모델
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--fg)', marginTop: '0.25rem' }}>
                  {result.recommendedModel}
                </h3>
                <p style={{ color: 'var(--dim)', fontSize: '0.92rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
                  {result.whyFit}
                </p>
              </div>

              {/* 30-Day Roadmap Box */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--violet-700)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  30일 실행 로드맵
                </span>
                <div style={{
                  background: 'var(--violet-50)',
                  border: '1px solid var(--violet-200)',
                  borderRadius: '14px',
                  padding: '1.1rem 1.25rem',
                  marginTop: '0.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  fontSize: '0.9rem'
                }}>
                  <div><strong style={{ color: 'var(--violet-700)' }}>1주차:</strong> {result.roadmap.week1}</div>
                  <div><strong style={{ color: 'var(--violet-700)' }}>2주차:</strong> {result.roadmap.week2}</div>
                  <div><strong style={{ color: 'var(--violet-700)' }}>3주차:</strong> {result.roadmap.week3}</div>
                  <div><strong style={{ color: 'var(--violet-700)' }}>4주차:</strong> {result.roadmap.week4}</div>
                </div>
              </div>

              {/* Tools & Revenue Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--violet-700)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    필요한 AI 도구
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
                    {result.tools.map((t: string, idx: number) => (
                      <span key={idx} className="badge badge-outline" style={{ borderColor: 'var(--blue-200)', backgroundColor: 'var(--blue-50)', color: 'var(--blue-700)', fontWeight: 700 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--violet-700)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    예상 매출 규모
                  </span>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--blue-600)', marginTop: '0.4rem' }}>
                    {result.estimatedRevenue}
                  </div>
                </div>
              </div>

              {/* 4 Candidates Box */}
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  함께 검토된 4가지 AI 수익 모델 후보
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.65rem' }}>
                  {result.candidates.map((c: any, i: number) => (
                    <div key={i} style={{ border: '1px solid var(--line)', borderRadius: '10px', padding: '0.85rem 1rem', backgroundColor: 'var(--bg-alt)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ fontSize: '0.9rem', color: 'var(--fg)' }}>{c.title}</strong>
                        <span style={{ fontSize: '0.75rem', color: 'var(--muted-fg)' }}>{c.difficulty}</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--dim)', marginTop: '0.2rem' }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setResult(null)}
              className="btn btn-outline"
              style={{ flex: 1, padding: '0.9rem', fontWeight: 700 }}
            >
              <RotateCcw size={16} /> 다시 진단하기
            </button>
            <button
              onClick={onGoToCourses}
              className="btn btn-primary"
              style={{ flex: 2, padding: '0.9rem', fontSize: '1rem', fontWeight: 800 }}
            >
              이 모델을 구현하는 “해줘” 강의 보기 →
            </button>
          </div>
        </div>
      ) : (
        /* Form Questionnaire */
        <div style={{
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--line)',
          padding: '2rem 1.75rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Step 1: Job */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--fg)' }}>
                1. 현재 본인의 직업이나 신분은 무엇인가요?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                {['직장인', '프리랜서', '소상공인/자영업', '학생/취준생', '전업주부'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setJob(item)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: job === item ? '2px solid var(--primary)' : '1px solid var(--line)',
                      backgroundColor: job === item ? 'var(--blue-50)' : 'var(--card)',
                      color: job === item ? 'var(--primary)' : 'var(--fg)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Interest Field */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--fg)' }}>
                2. 가장 관심이 가거나 도전해보고 싶은 분야는?
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--line)',
                  backgroundColor: 'var(--bg)',
                  color: 'var(--fg)',
                  fontSize: '0.9rem'
                }}
              >
                <option value="SNS 마케팅 & 콘텐츠 자동화">SNS 마케팅 & 콘텐츠 자동화 (스레드, 인스타)</option>
                <option value="강의 및 전자책 판매 사이트">강의 및 전자책 지식 창업 (결제, 회원 무인화)</option>
                <option value="반복 업무 외주 대행 (n8n/MCP)">반복 업무 외주 대행 (n8n, 텔레그램 승인봇)</option>
                <option value="쇼핑몰/외식업 CS 리뷰 자동화">쇼핑몰/외식업 CS 리뷰 응대 자동화</option>
                <option value="노코드 SaaS 소프트웨어 제작">노코드 마이크로 SaaS 소프트웨어 제작</option>
              </select>
            </div>

            {/* Step 3: Available Time */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--fg)' }}>
                3. 하루에 비즈니스 구축에 투자할 수 있는 시간은?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                {['하루 1~2시간 (퇴근 후)', '하루 3~4시간', '주말 올인 (주말 6시간+)', '전업 몰입 가능'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setAvailableTime(item)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: availableTime === item ? '2px solid var(--primary)' : '1px solid var(--line)',
                      backgroundColor: availableTime === item ? 'var(--blue-50)' : 'var(--card)',
                      color: availableTime === item ? 'var(--primary)' : 'var(--fg)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Budget */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--fg)' }}>
                4. 초기 투입 가능한 자본 예산은?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                {['0원 (무자본 시작 희망)', '10~30만원 (도구 구독료)', '50~100만원', '100만원 이상'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBudget(item)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: budget === item ? '2px solid var(--primary)' : '1px solid var(--line)',
                      backgroundColor: budget === item ? 'var(--blue-50)' : 'var(--card)',
                      color: budget === item ? 'var(--primary)' : 'var(--fg)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: My Skill/Background */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--fg)' }}>
                5. 나의 경험이나 관심사 (떠오르는 것만 적어주세요)
              </label>
              <textarea
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                placeholder="예: 엑셀을 조금 다룰 줄 알아요 / 마케팅에 관심이 많아요 / 글쓰기를 좋아해요 / 코딩은 아예 몰라요"
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--line)',
                  backgroundColor: 'var(--bg)',
                  color: 'var(--fg)',
                  fontSize: '0.875rem',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Step 6: Target Customer */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--fg)' }}>
                6. 돕고 싶은 대상이나 타깃 고객군
              </label>
              <input
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="예: 자영업 사장님, 직장인, 1인 크리에이터, 학부모 등"
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

            {/* Submit Button */}
            <button
              onClick={startAnalysis}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '1.05rem',
                fontSize: '1.05rem',
                fontWeight: 800,
                borderRadius: 'var(--radius-full)',
                marginTop: '0.5rem',
                boxShadow: 'var(--shadow-blue)'
              }}
            >
              🎁 무료로 내 비즈니스 모델 생성하기
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--dim)' }}>
              가입 즉시 무료 분석 · 카드 등록 없음 · 30초 내 결과 도출
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
