import React, { useState } from 'react';
import type { Course } from '../types';
import { ArrowLeft, CheckCircle, ChevronRight, Check } from 'lucide-react';

interface LearnViewProps {
  course: Course;
  currentLectureId: string;
  onSelectLecture: (lectureId: string) => void;
  onBack: () => void;
}

export const LearnView: React.FC<LearnViewProps> = ({
  course,
  currentLectureId,
  onSelectLecture,
  onBack
}) => {
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({
    '1': true,
    '2': true
  });
  const [activeTab, setActiveTab] = useState<'desc' | 'qna' | 'notes'>('desc');
  const [playbackSpeed, setPlaybackSpeed] = useState('1.0');
  const [userNote, setUserNote] = useState('에이전트 텔레그램 연동 시 봇파더에서 토큰 발급 후 config.env에 저장할 것.');

  const lectures = course.lectures || [];
  const currentLecture = lectures.find((l) => l.id === currentLectureId) || lectures[0];
  const currentIndex = lectures.findIndex((l) => l.id === currentLecture.id);

  const toggleComplete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNextLecture = () => {
    if (currentIndex < lectures.length - 1) {
      onSelectLecture(lectures[currentIndex + 1].id);
    }
  };

  const completedCount = Object.values(completedMap).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / lectures.length) * 100);

  return (
    <div style={{ backgroundColor: '#090a0f', color: '#ffffff', minHeight: 'calc(100vh - 60px)' }}>
      {/* Top Header Bar */}
      <div style={{
        padding: '0.85rem 1.25rem',
        borderBottom: '1px solid #1f2029',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#11121a'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem'
            }}
          >
            <ArrowLeft size={16} /> 나가기
          </button>
          <div style={{ height: '16px', width: '1px', backgroundColor: '#2d3040' }} />
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
            {course.title} — {currentLecture.number}강. {currentLecture.title}
          </span>
        </div>

        {currentIndex < lectures.length - 1 && (
          <button
            onClick={handleNextLecture}
            className="btn btn-primary"
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', gap: '0.3rem' }}
          >
            다음 강의 <ChevronRight size={14} />
          </button>
        )}
      </div>

      {/* Main Grid: Video Player (Left) + Playlist Sidebar (Right) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) 340px',
        minHeight: 'calc(100vh - 120px)'
      }} className="learn-container">
        {/* Left Column: Video & Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #1f2029' }}>
          {/* Video Player Box */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', backgroundColor: '#000' }}>
            <video
              key={currentLecture.id}
              controls
              autoPlay
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster={course.thumbnail}
            >
              비디오 재생을 지원하지 않는 브라우저입니다.
            </video>
          </div>

          {/* Video Under Controls */}
          <div style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: '#11121a',
            borderBottom: '1px solid #1f2029',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span style={{ color: '#60a5fa', fontSize: '0.8rem', fontWeight: 800 }}>
                  {currentLecture.number}강
                </span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  {currentLecture.duration}
                </span>
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                {currentLecture.title}
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <select
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(e.target.value)}
                style={{
                  backgroundColor: '#1e202d',
                  color: '#fff',
                  border: '1px solid #2d3040',
                  borderRadius: '6px',
                  padding: '0.4rem 0.6rem',
                  fontSize: '0.8rem'
                }}
              >
                <option value="0.75">0.75x</option>
                <option value="1.0">1.0x (기본)</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
                <option value="2.0">2.0x</option>
              </select>

              <button
                onClick={(e) => toggleComplete(currentLecture.id, e)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: completedMap[currentLecture.id] ? '#065f46' : '#1e202d',
                  color: completedMap[currentLecture.id] ? '#34d399' : '#94a3b8',
                  border: '1px solid #2d3040',
                  borderRadius: '6px',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Check size={14} />
                {completedMap[currentLecture.id] ? '수강 완료' : '완료 체크'}
              </button>
            </div>
          </div>

          {/* Under Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #1f2029', backgroundColor: '#0d0e15' }}>
            <button
              onClick={() => setActiveTab('desc')}
              style={{
                padding: '0.85rem 1.25rem',
                background: 'none',
                border: 'none',
                color: activeTab === 'desc' ? '#60a5fa' : '#94a3b8',
                fontWeight: activeTab === 'desc' ? 700 : 500,
                fontSize: '0.85rem',
                borderBottom: activeTab === 'desc' ? '2px solid #3b82f6' : 'none',
                cursor: 'pointer'
              }}
            >
              강의 자료 및 실습 코드
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              style={{
                padding: '0.85rem 1.25rem',
                background: 'none',
                border: 'none',
                color: activeTab === 'notes' ? '#60a5fa' : '#94a3b8',
                fontWeight: activeTab === 'notes' ? 700 : 500,
                fontSize: '0.85rem',
                borderBottom: activeTab === 'notes' ? '2px solid #3b82f6' : 'none',
                cursor: 'pointer'
              }}
            >
              내 학습 메모
            </button>
            <button
              onClick={() => setActiveTab('qna')}
              style={{
                padding: '0.85rem 1.25rem',
                background: 'none',
                border: 'none',
                color: activeTab === 'qna' ? '#60a5fa' : '#94a3b8',
                fontWeight: activeTab === 'qna' ? 700 : 500,
                fontSize: '0.85rem',
                borderBottom: activeTab === 'qna' ? '2px solid #3b82f6' : 'none',
                cursor: 'pointer'
              }}
            >
              질문과 답변 (Q&A)
            </button>
          </div>

          {/* Tab Content Area */}
          <div style={{ padding: '1.5rem', flex: 1, backgroundColor: '#0c0d13' }}>
            {activeTab === 'desc' && (
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.7 }}>
                <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  이 강의에서 배우는 핵심 내용:
                </h4>
                <p style={{ marginBottom: '1rem' }}>
                  {currentLecture.description || '이 챕터에서는 에이전트를 실무 비즈니스 파이프라인에 연결하고, 오류 없이 24시간 안전하게 구동하는 핵심 패턴을 실습합니다.'}
                </p>

                <div style={{ backgroundColor: '#13141c', borderRadius: '8px', padding: '1rem', border: '1px solid #22232e' }}>
                  <div style={{ fontSize: '0.8rem', color: '#60a5fa', fontWeight: 700, marginBottom: '0.35rem' }}>
                    💻 복사해서 쓰는 실습 프롬프트 / 쉘 명령어:
                  </div>
                  <pre style={{
                    margin: 0,
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                    color: '#e2e8f0',
                    overflowX: 'auto'
                  }}>
                    {`# 텔레그램 승인 웹훅 서버 구동\nnpx tsx ./agent/telegram-approval-loop.ts --port 3000 --env production`}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  동영상 보면서 메모한 내용은 브라우저에 자동 저장됩니다:
                </label>
                <textarea
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  rows={6}
                  style={{
                    width: '100%',
                    backgroundColor: '#13141c',
                    color: '#fff',
                    border: '1px solid #22232e',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    fontSize: '0.9rem',
                    resize: 'vertical'
                  }}
                />
              </div>
            )}

            {activeTab === 'qna' && (
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                <p>궁금한 점이 있으신가요? 질문을 남기시면 강사님과 조교진이 24시간 내에 답변을 달아드립니다.</p>
                <button
                  onClick={() => alert('수강생 전용 디스코드 & 카카오 질문방으로 연결됩니다.')}
                  className="btn btn-outline"
                  style={{ marginTop: '1rem', color: '#fff', borderColor: '#2d3040' }}
                >
                  실시간 질문 채널 입장하기
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Playlist Sidebar */}
        <div style={{ backgroundColor: '#0d0e15', display: 'flex', flexDirection: 'column' }}>
          {/* Progress Header */}
          <div style={{ padding: '1.25rem', borderBottom: '1px solid #1f2029' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 700 }}>전체 진도율</span>
              <span style={{ color: '#60a5fa', fontWeight: 800 }}>{progressPercent}% ({completedCount}/{lectures.length})</span>
            </div>
            <div style={{ height: '6px', backgroundColor: '#1e202d', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: '#2563eb', transition: 'width 0.3s ease' }} />
            </div>
          </div>

          {/* Lectures List */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {lectures.map((l) => {
              const isCurrent = l.id === currentLecture.id;
              const isDone = completedMap[l.id];

              return (
                <div
                  key={l.id}
                  onClick={() => onSelectLecture(l.id)}
                  style={{
                    padding: '0.85rem 1rem',
                    borderBottom: '1px solid #171822',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backgroundColor: isCurrent ? '#161926' : 'transparent',
                    borderLeft: isCurrent ? '3px solid #3b82f6' : '3px solid transparent'
                  }}
                >
                  <button
                    onClick={(e) => toggleComplete(l.id, e)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isDone ? '#34d399' : '#475569',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <CheckCircle size={16} />
                  </button>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: isCurrent ? 700 : 500,
                      color: isCurrent ? '#60a5fa' : '#e2e8f0',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {l.number}. {l.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
                      {l.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .learn-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
