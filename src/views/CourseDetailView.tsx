import React, { useState } from 'react';
import type { Course } from '../types';
import { Play, ChevronDown, Sparkles } from 'lucide-react';

interface CourseDetailViewProps {
  course: Course;
  onOpenCheckout: (item: { title: string; price: number; originalPrice?: number }) => void;
  onOpenVideoModal: (title: string) => void;
  onGoToLearn: (courseId: string, lectureId: string) => void;
  onBack: () => void;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({
  course,
  onOpenCheckout,
  onOpenVideoModal,
  onGoToLearn,
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'diff' | 'curri' | 'faq'>('info');
  const [isCurriculumExpanded, setIsCurriculumExpanded] = useState(true);
  const [activeIndustry, setActiveIndustry] = useState<'b2b' | 'food' | 'farm'>('b2b');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industries = {
    b2b: {
      name: '사업자 대상 서비스 (B2B)',
      items: [
        { label: '홈페이지 제작', desc: '소형 견적 문의는 견적서 자동 발송, 대형 리뉴얼은 대표님 미팅 제안' },
        { label: '마케팅 대행', desc: '클릭당 비용 급등 캠페인은 중지안을 승인 요청, 정상이면 주간 리포트 자동 발송' },
        { label: '세무 사무소', desc: '업무 영수증은 자동 분류, 개인 사용 의심분은 확인 문자 초안' },
        { label: '정책자금 대행', desc: '조건이 맞으면 서류 체크리스트 발송, 업력 미달이면 다른 지원사업 안내' },
        { label: '자동화 대행', desc: '일시 오류는 자동 재시도, 같은 오류 3회면 담당자 호출과 로그 요약' }
      ]
    },
    food: {
      name: '외식업 / 매장',
      items: [
        { label: '음식점 리뷰', desc: '불만 리뷰는 사장님 알림과 사과 답글 초안, 칭찬은 감사 답글, 광고는 무시' },
        { label: '주점 단체 예약', desc: '단체 예약은 룸 배정과 예약금 안내, 만석이면 다른 시간 제안' },
        { label: '반찬가게 재고', desc: '품절 임박 메뉴는 내일 준비량 늘림 제안, 남을 메뉴는 마감 할인 문자 초안' }
      ]
    },
    farm: {
      name: '농수산·식품 온라인 판매',
      items: [
        { label: '과일 산지 직송', desc: '배송 중 파손은 부분 재발송 접수, 품질 불만은 사장님 확인 요청' },
        { label: '수산물 온라인', desc: '풍랑 예보가 뜨면 출고일 조정안과 고객 안내 문자 초안' },
        { label: '김치·장류 예약', desc: '재고보다 많은 주문은 다음 회차 예약으로, 잔여 20% 이하면 마감 예고' }
      ]
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem 1.25rem 6rem' }}>
      {/* Breadcrumb */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--muted-fg)', marginBottom: '1rem' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: 'var(--muted-fg)', cursor: 'pointer', padding: 0 }}>
          강의 목록
        </button>
        <span>›</span>
        <span style={{ color: 'var(--fg)', fontWeight: 600 }}>{course.title}</span>
      </nav>

      {/* Sub Tab Navigation */}
      <div style={{
        position: 'sticky',
        top: '56px',
        zIndex: 30,
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--line)',
        display: 'flex',
        gap: '1.5rem',
        padding: '0.6rem 0',
        marginBottom: '1.5rem',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        <button
          onClick={() => { setActiveTab('info'); scrollToSection('info'); }}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: activeTab === 'info' ? 700 : 500,
            color: activeTab === 'info' ? 'var(--primary)' : 'var(--muted-fg)',
            cursor: 'pointer',
            paddingBottom: '0.3rem',
            borderBottom: activeTab === 'info' ? '2px solid var(--primary)' : '2px solid transparent'
          }}
        >
          프로그램 정보
        </button>
        <button
          onClick={() => { setActiveTab('diff'); scrollToSection('diff'); }}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: activeTab === 'diff' ? 700 : 500,
            color: activeTab === 'diff' ? 'var(--primary)' : 'var(--muted-fg)',
            cursor: 'pointer',
            paddingBottom: '0.3rem',
            borderBottom: activeTab === 'diff' ? '2px solid var(--primary)' : '2px solid transparent'
          }}
        >
          차별점
        </button>
        <button
          onClick={() => { setActiveTab('curri'); scrollToSection('curriculum'); }}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: activeTab === 'curri' ? 700 : 500,
            color: activeTab === 'curri' ? 'var(--primary)' : 'var(--muted-fg)',
            cursor: 'pointer',
            paddingBottom: '0.3rem',
            borderBottom: activeTab === 'curri' ? '2px solid var(--primary)' : '2px solid transparent'
          }}
        >
          커리큘럼
        </button>
        <button
          onClick={() => onOpenVideoModal('GPT 6- Astra + 핸드폰 연결해서 일시키는 세팅법')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--blue-600)',
            cursor: 'pointer',
            paddingBottom: '0.3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          <Play size={14} fill="currentColor" /> 무료 맛보기
        </button>
        <button
          onClick={() => scrollToSection('mentor')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'var(--muted-fg)',
            cursor: 'pointer',
            paddingBottom: '0.3rem'
          }}
        >
          강사 소개
        </button>
        <button
          onClick={() => scrollToSection('course-faq')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'var(--muted-fg)',
            cursor: 'pointer',
            paddingBottom: '0.3rem'
          }}
        >
          자주 묻는 질문
        </button>
      </div>

      {/* 1. HERO BANNER */}
      <section id="info" style={{
        backgroundColor: '#0c0d12',
        borderRadius: '24px',
        overflow: 'hidden',
        color: '#ffffff',
        border: '1px solid #27272a',
        marginBottom: '2.5rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}>
        <div style={{
          padding: '3rem 2rem 2.5rem',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#60a5fa',
            marginBottom: '0.85rem'
          }}>
            <Sparkles size={16} /> “해줘” 비즈니스 자동화 강의
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 900,
            lineHeight: 1.25,
            letterSpacing: '-0.04em',
            marginBottom: '1.25rem'
          }}>
            말 한마디로<br />
            내 비즈니스가 돌아가게
          </h1>

          {/* Facts list */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.95rem',
            color: '#cbd5e1',
            margin: '1.5rem 0 2rem'
          }}>
            <span>• 68강 · 13시간 22분</span>
            <span>• 365일 무제한 수강</span>
            <span>• 컴퓨터 꺼도 24시간 작동</span>
          </div>

          {/* Action CTA */}
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <button
              onClick={() => onOpenCheckout({ title: course.title, price: course.price, originalPrice: course.originalPrice })}
              className="btn btn-primary btn-cta-large"
              style={{
                fontSize: '1.1rem',
                padding: '1.15rem 1.5rem',
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.5)'
              }}
            >
              “해줘” 시작하기 · 하루 약 2,775원
            </button>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.85rem', lineHeight: 1.5 }}>
              카드사 정책에 따라 12개월 할부 시 하루 약 2,775원 · 월 약 83,250원<br />
              🔥 초기 모집가 진행 중 · 선착순 마감 후 가격 인상 예정
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRACK SEPARATION */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-600)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            프로그램 정보
          </span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginTop: '0.25rem', letterSpacing: '-0.03em' }}>
            지금 어디에 있든, 시작점이 있습니다
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Track 1 */}
          <div style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--blue-600)', background: 'var(--blue-50)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>
              아직 내 비즈니스가 없다면
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '1rem 0 0.5rem' }}>
              이 강의로 시작하세요
            </h3>
            <p style={{ color: 'var(--muted-fg)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              내 수익 모델을 정하는 것부터 상품·판매 사이트·홍보까지 <strong>“해줘”</strong>로 만들고 자동으로 돌아가게 합니다.
            </p>
            <button
              onClick={() => onOpenCheckout({ title: course.title, price: course.price, originalPrice: course.originalPrice })}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.8rem', fontWeight: 700 }}
            >
              강의 시작하기 ↓
            </button>
          </div>

          {/* Track 2 */}
          <div style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--violet-700)', background: 'var(--violet-50)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>
              이미 비즈니스를 운영 중이라면
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '1rem 0 0.5rem' }}>
              바로 적용하거나, 직접 맡기거나
            </h3>
            <p style={{ color: 'var(--muted-fg)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              강의 내용은 내 사업에 <strong>바로 써먹을 수 있습니다.</strong> 유입·마케팅·세일즈부터 직원 관리·회사 전산까지 1:1 컨설팅으로 완성해 드립니다.
            </p>
            <button
              onClick={() => onOpenCheckout({ title: '1:1 컨설팅 신청', price: 7770000, originalPrice: 10000000 })}
              className="btn btn-outline"
              style={{ width: '100%', padding: '0.8rem', fontWeight: 700 }}
            >
              1:1 컨설팅 신청하기 →
            </button>
          </div>
        </div>
      </section>

      {/* 3. FIT VS NOT FIT */}
      <section style={{
        backgroundColor: 'var(--bg-alt)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '3.5rem'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--fg)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: 'var(--blue-600)' }}>✔</span> 이런 분께 권합니다
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--dim)' }}>
              <li>• AI는 충분히 써봤는데, 아직 "내 것"이 없는 분</li>
              <li>• 회사에 다니면서 1인 사업을 자동화로 시작하고 싶은 분</li>
              <li>• 코딩 없이 내 상품·판매 사이트·결제·홍보를 만들고 싶은 분</li>
              <li>• 매일 반복하는 단순 업무를 에이전트에게 통째로 넘기고 싶은 분</li>
              <li>• 이미 사업을 운영 중인 대표님 — 텔레그램 승인 루프를 즉시 도입</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--fg)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: 'var(--red-600)' }}>✕</span> 이런 분께는 맞지 않아요
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--dim)' }}>
              <li>• 프로그래밍 언어 문법 자체를 파고들고 싶은 순수 개발 지향자</li>
              <li>• 실행 없이 가만히 있어도 저절로 돈이 들어오길 바라는 분</li>
              <li>• 시도해보기도 전에 "이게 정말 될까?" 고민만 하는 분</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. REAL STACK & RUNNING COST */}
      <section style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '3.5rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--violet-700)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            투명한 운영 원가 공개
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.25rem' }}>
            내 사이트로 팔면 돈이 얼마나 들까요?
          </h2>
          <p style={{ color: 'var(--muted-fg)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
            비싼 외주나 월 수십만원 솔루션 없이, 최소 비용으로 돌리는 실전 인프라 영수증입니다.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--bg-alt)' }}>
            <strong style={{ display: 'block', fontSize: '0.95rem' }}>호스팅 & 배포 (Vercel)</strong>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted-fg)', margin: '0.25rem 0 0.5rem' }}>무료 티어로 무제한 트래픽 감당</p>
            <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--emerald-600)' }}>월 0원</span>
          </div>
          <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--bg-alt)' }}>
            <strong style={{ display: 'block', fontSize: '0.95rem' }}>데이터베이스 (Supabase)</strong>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted-fg)', margin: '0.25rem 0 0.5rem' }}>회원가입, 인증, 결제 영수증 저장</p>
            <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--emerald-600)' }}>월 0원</span>
          </div>
          <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--bg-alt)' }}>
            <strong style={{ display: 'block', fontSize: '0.95rem' }}>24시간 서버 (오라클 VPS)</strong>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted-fg)', margin: '0.25rem 0 0.5rem' }}>Always Free 평생 무료 인스턴스</p>
            <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--emerald-600)' }}>월 0원</span>
          </div>
          <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--bg-alt)' }}>
            <strong style={{ display: 'block', fontSize: '0.95rem' }}>토스페이먼츠 PG 연동</strong>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted-fg)', margin: '0.25rem 0 0.5rem' }}>실제 결제 시 수수료만 발생 (2~3%)</p>
            <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--blue-600)' }}>고정비 0원</span>
          </div>
        </div>
      </section>

      {/* 5. DIFFERENCE: SITUATIONAL JUDGMENT (#diff) */}
      <section id="diff" style={{
        backgroundColor: '#090a0f',
        color: '#ffffff',
        borderRadius: '24px',
        border: '1px solid #1f2029',
        padding: '3rem 2rem',
        marginBottom: '3.5rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#60a5fa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            차별점
          </span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 900, marginTop: '0.35rem', letterSpacing: '-0.03em' }}>
            반복만 하는 자동화가 아니라<br />
            <span style={{ color: '#60a5fa' }}>판단이 필요한 일</span>까지
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginTop: '0.65rem' }}>
            규칙대로 반복하는 단순 매크로는 판단이 필요한 순간 멈춥니다.<br />
            이 강의에서는 목표를 받고, 상황을 보고, 방법을 스스로 정한 뒤 이유를 보고하는 진짜 에이전트를 만듭니다.
          </p>
        </div>

        {/* Industry switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {(['b2b', 'food', 'farm'] as const).map((indKey) => (
            <button
              key={indKey}
              onClick={() => setActiveIndustry(indKey)}
              style={{
                padding: '0.6rem 1.1rem',
                borderRadius: '999px',
                border: activeIndustry === indKey ? '1px solid #3b82f6' : '1px solid #27272a',
                backgroundColor: activeIndustry === indKey ? '#1d4ed8' : '#14151b',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {industries[indKey].name}
            </button>
          ))}
        </div>

        {/* Industry details box */}
        <div style={{
          backgroundColor: '#13141c',
          borderRadius: '16px',
          border: '1px solid #22232e',
          padding: '1.5rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {industries[activeIndustry].items.map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.75rem',
                paddingBottom: '0.75rem',
                borderBottom: idx < industries[activeIndustry].items.length - 1 ? '1px solid #1e202d' : 'none'
              }}>
                <span style={{
                  backgroundColor: '#1e293b',
                  color: '#93c5fd',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.25rem 0.6rem',
                  borderRadius: '6px',
                  flexShrink: 0
                }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TELEGRAM LOOP DEMO */}
      <section style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-lg)',
        padding: '2.5rem 2rem',
        marginBottom: '3.5rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-600)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              차이는 구조에서 납니다
            </span>
            <h2 style={{ fontSize: '1.65rem', fontWeight: 900, marginTop: '0.35rem' }}>
              모두가 같은 AI에게 같은 걸 “해줘”라고 합니다
            </h2>
            <p style={{ color: 'var(--muted-fg)', fontSize: '0.92rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
              같은 프롬프트면 결과도 같습니다. 차이는 에이전트가 일하는 <strong>구조</strong>에서 납니다.<br />
              휴대폰 텔레그램에서 사장이 3가지 선택을 내릴 때마다 에이전트의 지능이 진화합니다.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{ border: '1px solid var(--line)', borderRadius: '12px', padding: '1.25rem', backgroundColor: 'var(--bg-alt)' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>✅ 승인</div>
              <strong style={{ fontSize: '0.95rem' }}>실제 답글/콘텐츠로 즉시 발행</strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted-fg)', marginTop: '0.35rem' }}>
                검증된 패턴은 다음 작업의 성공 기준선으로 자동 축적됩니다.
              </p>
            </div>
            <div style={{ border: '1px solid var(--line)', borderRadius: '12px', padding: '1.25rem', backgroundColor: 'var(--bg-alt)' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>❌ 수정 / 거절</div>
              <strong style={{ fontSize: '0.95rem' }}>어색한 AI 말투 즉시 폐기</strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted-fg)', marginTop: '0.35rem' }}>
                사장의 거절 이유가 에이전트의 피드백 메모리에 영구 저장됩니다.
              </p>
            </div>
            <div style={{ border: '1px solid var(--line)', borderRadius: '12px', padding: '1.25rem', backgroundColor: 'var(--bg-alt)' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>👍 답변 안 함</div>
              <strong style={{ fontSize: '0.95rem' }}>불필요한 리소스 낭비 차단</strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted-fg)', marginTop: '0.35rem' }}>
                스팸성 댓글이나 의미 없는 멘션은 비용 지출 없이 조용히 패스합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REAL NUMBERS */}
      <section style={{
        background: 'linear-gradient(135deg, #1e1b4b, #172554)',
        color: '#ffffff',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        marginBottom: '3.5rem',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#93c5fd', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            강의 화면 속 실측 데이터
          </span>
          <h2 style={{ fontSize: '1.65rem', fontWeight: 900, marginTop: '0.25rem' }}>
            말로만 하지 않습니다. 강의 안에서 직접 증명합니다.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          textAlign: 'center'
        }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '1.25rem' }}>
            <strong style={{ fontSize: '2rem', fontWeight: 900, color: '#60a5fa' }}>388명</strong>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.25rem' }}>스레드 글로 사이트에 유입</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>결제 완료 7건 자동 추적</div>
          </div>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '1.25rem' }}>
            <strong style={{ fontSize: '2rem', fontWeight: 900, color: '#60a5fa' }}>7,000 → 200원</strong>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.25rem' }}>댓글 100건 처리 비용 절감</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>반복은 스크립트, 판단만 AI로</div>
          </div>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '1.25rem' }}>
            <strong style={{ fontSize: '2rem', fontWeight: 900, color: '#60a5fa' }}>A+ · 98점</strong>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.25rem' }}>사이트 보안 및 속도 점수</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>PageSpeed 데스크톱 100점</div>
          </div>
        </div>
      </section>

      {/* 8. CURRICULUM ACCORDION SECTION (#curriculum) */}
      <section id="curriculum" style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-600)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              커리큘럼
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginTop: '0.25rem', letterSpacing: '-0.03em' }}>
              68강 · 13시간 22분
            </h2>
          </div>
          <button
            onClick={() => onOpenVideoModal('GPT 6- Astra + 핸드폰 연결해서 일시키는 세팅법')}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', fontWeight: 700 }}
          >
            <Play size={14} fill="currentColor" /> 맛보기 무료 시청
          </button>
        </div>

        {/* 5 Parts Summary cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {course.parts?.map((part, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-600)' }}>
                    {part.partNumber}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted-fg)' }}>
                    {part.range} · {part.lectureCount}강
                  </span>
                </div>
                <strong style={{ fontSize: '1rem', color: 'var(--fg)' }}>
                  {part.title}
                </strong>
              </div>
            </div>
          ))}
        </div>

        {/* 68 Full Lectures List */}
        <div style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden'
        }}>
          <div
            onClick={() => setIsCurriculumExpanded(!isCurriculumExpanded)}
            style={{
              padding: '1rem 1.25rem',
              backgroundColor: 'var(--bg-alt)',
              borderBottom: isCurriculumExpanded ? '1px solid var(--line)' : 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: 700,
              fontSize: '0.95rem'
            }}
          >
            <span>전체 68강 상세 강의 목록 ({isCurriculumExpanded ? '접기' : '펼치기'})</span>
            <ChevronDown size={18} style={{ transform: isCurriculumExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          </div>

          {isCurriculumExpanded && (
            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {course.lectures?.map((lecture) => (
                <div
                  key={lecture.id}
                  style={{
                    padding: '0.85rem 1.25rem',
                    borderBottom: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    transition: 'background-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span style={{
                      color: 'var(--dim)',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      width: '24px'
                    }}>
                      {lecture.number}
                    </span>
                    <div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--fg)', fontWeight: 500 }}>
                        {lecture.title}
                      </span>
                      {lecture.isFree && (
                        <span style={{
                          marginLeft: '0.5rem',
                          backgroundColor: '#2563eb',
                          color: '#fff',
                          fontSize: '10px',
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: '999px'
                        }}>
                          무료
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted-fg)', fontVariantNumeric: 'tabular-nums' }}>
                      {lecture.duration}
                    </span>
                    {lecture.isFree ? (
                      <button
                        onClick={() => onOpenVideoModal(lecture.title)}
                        className="btn btn-primary"
                        style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem' }}
                      >
                        시청하기
                      </button>
                    ) : (
                      <button
                        onClick={() => onGoToLearn(course.id, lecture.id)}
                        className="btn btn-outline"
                        style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem' }}
                      >
                        수강실 입장
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 8.5 MENTOR SECTION (#mentor) */}
      <section id="mentor" style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-lg)',
        padding: '2.5rem 2rem',
        marginBottom: '3.5rem'
      }}>
        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '2.2rem',
            fontWeight: 900,
            flexShrink: 0,
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35)'
          }}>
            진
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue-600)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              강사 소개
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 900, marginTop: '0.2rem', color: 'var(--fg)' }}>
              이동화 마스터 <span style={{ fontSize: '0.9rem', color: 'var(--muted-fg)', fontWeight: 500 }}>| AI 비즈니스 자동화 설계자</span>
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--dim)', lineHeight: 1.6, marginTop: '0.65rem' }}>
              코딩을 전혀 모르는 비개발자도 자신의 지식과 노하우를 자동화된 디지털 상품으로 전환할 수 있도록 실전 시스템을 구축합니다.<br />
              이론이나 추상적인 개념 대신, 실제로 돌아가는 코드와 서버, 텔레그램 승인 루프를 통해 증명합니다.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <span className="badge badge-outline">수강생 168+ 명 코칭</span>
              <span className="badge badge-outline">실전 자동화 파이프라인 40+ 종</span>
              <span className="badge badge-outline">유튜브/스레드 크리에이터</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8.6 COURSE FAQ SECTION (#course-faq) */}
      <section id="course-faq" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
          자주 묻는 질문
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ border: '1px solid var(--line)', borderRadius: '12px', padding: '1.1rem 1.25rem', backgroundColor: 'var(--card)' }}>
            <strong style={{ fontSize: '0.98rem', display: 'block', marginBottom: '0.4rem' }}>
              Q. 비개발자도 정말 사이트를 직접 만들 수 있나요?
            </strong>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted-fg)', lineHeight: 1.6 }}>
              네, 가능합니다. 이 강의는 복잡한 코딩 문법을 암기하는 과정이 아니라, Codex와 Claude Code 같은 고성능 에이전트에게 내 의도를 자연어로 지시하고 조립하는 바이브 코딩 방식으로 진행됩니다.
            </p>
          </div>
          <div style={{ border: '1px solid var(--line)', borderRadius: '12px', padding: '1.1rem 1.25rem', backgroundColor: 'var(--card)' }}>
            <strong style={{ fontSize: '0.98rem', display: 'block', marginBottom: '0.4rem' }}>
              Q. 수강 기간 및 환불 정책은 어떻게 되나요?
            </strong>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted-fg)', lineHeight: 1.6 }}>
              결제일로부터 365일(1년) 동안 무제한 반복 수강이 가능하며, 추가 업데이트 강의도 무료로 제공됩니다. 전자상거래법에 따라 결제 후 수강 시작 전 전액 환불이 가능합니다.
            </p>
          </div>
          <div style={{ border: '1px solid var(--line)', borderRadius: '12px', padding: '1.1rem 1.25rem', backgroundColor: 'var(--card)' }}>
            <strong style={{ fontSize: '0.98rem', display: 'block', marginBottom: '0.4rem' }}>
              Q. 강의 실습 시 추가 비용(서버, API 등)이 많이 드나요?
            </strong>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted-fg)', lineHeight: 1.6 }}>
              강의에서 다루는 모든 인프라(Vercel, Supabase, 오라클 VPS)는 무료 티어를 기반으로 세팅하므로 고정 서버 비용이 0원입니다. AI API 사용량 역시 최소화할 수 있도록 규칙 분리 기법을 배웁니다.
            </p>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM FIXED CHECKOUT CTA */}
      <div style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 35,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--line)',
        padding: '0.75rem 1.25rem',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted-fg)' }}>
              12개월 무이자 할부 시 <strong>월 83,250원</strong>
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--blue-600)' }}>
              {course.price.toLocaleString()}원
            </div>
          </div>
          <button
            onClick={() => onOpenCheckout({ title: course.title, price: course.price, originalPrice: course.originalPrice })}
            className="btn btn-primary"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '1rem',
              fontWeight: 800,
              borderRadius: '999px',
              boxShadow: 'var(--shadow-blue)'
            }}
          >
            지금 수강 신청하기 →
          </button>
        </div>
      </div>
    </div>
  );
};
