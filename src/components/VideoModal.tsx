import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#09090b',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid #27272a',
        width: '100%',
        maxWidth: '800px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Header */}
        <div style={{
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #27272a',
          color: '#fff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              backgroundColor: '#2563eb',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '999px'
            }}>
              무료 맛보기
            </span>
            <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{title}</span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#a1a1aa',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', backgroundColor: '#000' }}>
          <video
            controls
            autoPlay
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
          >
            해당 브라우저는 비디오 재생을 지원하지 않습니다.
          </video>
        </div>

        {/* Footer info */}
        <div style={{ padding: '1rem 1.25rem', color: '#a1a1aa', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>68강 전체 강의는 수강 신청 후 고화질 VOD 플레이어에서 수강할 수 있습니다.</span>
          <button
            onClick={onClose}
            className="btn btn-primary"
            style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}
          >
            전체 커리큘럼 보기
          </button>
        </div>
      </div>
    </div>
  );
};
