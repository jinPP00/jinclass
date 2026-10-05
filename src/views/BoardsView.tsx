import React, { useState } from 'react';
import { BOARDS_DATA } from '../data/boardsData';
import type { BoardPost } from '../types';
import { MessageSquare, Eye, ThumbsUp, PlusCircle, X, Send } from 'lucide-react';

export const BoardsView: React.FC = () => {
  const [posts, setPosts] = useState<BoardPost[]>(BOARDS_DATA);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [activePost, setActivePost] = useState<BoardPost | null>(null);

  // New post modal state
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<BoardPost['category']>('자유게시판');
  const [newContent, setNewContent] = useState('');

  // Comment input state
  const [commentText, setCommentText] = useState('');

  const categories = ['전체', '공지사항', '수익 인증', '질문과 답변', '자유게시판'];

  const filteredPosts = posts.filter(
    (p) => selectedCategory === '전체' || p.category === selectedCategory
  );

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) {
      alert('제목과 내용을 모두 입력해 주세요.');
      return;
    }

    const newPost: BoardPost = {
      id: `post-${Date.now()}`,
      category: newCategory,
      title: newTitle,
      content: newContent,
      author: '나 (수강생)',
      authorBadge: '수강생',
      date: '방금 전',
      views: 1,
      likes: 0,
      commentsCount: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewContent('');
    setIsWriteModalOpen(false);
    alert('게시글이 등록되었습니다!');
  };

  const handleAddComment = () => {
    if (!commentText.trim() || !activePost) return;

    const newComment = {
      id: `c-${Date.now()}`,
      author: '나 (수강생)',
      date: '방금 전',
      content: commentText
    };

    const updatedPost = {
      ...activePost,
      commentsCount: (activePost.commentsCount || 0) + 1,
      comments: [...(activePost.comments || []), newComment]
    };

    setActivePost(updatedPost);
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
    setCommentText('');
  };

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((p) => {
        if (p.id === postId) {
          const updated = { ...p, likes: p.likes + 1 };
          if (activePost && activePost.id === postId) {
            setActivePost(updated);
          }
          return updated;
        }
        return p;
      })
    );
  };

  return (
    <div style={{ maxWidth: '1050px', margin: '0 auto', padding: '3rem 1.25rem 6rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.35rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '0.4rem',
            color: 'var(--fg)'
          }}>
            게시판
          </h1>
          <p style={{ color: 'var(--muted-fg)', fontSize: '1rem' }}>
            수강생들의 실전 수익화 인증과 Q&A 질문 답변 커뮤니티입니다.
          </p>
        </div>

        <button
          onClick={() => setIsWriteModalOpen(true)}
          className="btn btn-primary"
          style={{ padding: '0.65rem 1.25rem', gap: '0.4rem', fontWeight: 700 }}
        >
          <PlusCircle size={18} /> 글쓰기
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              backgroundColor: selectedCategory === cat ? 'var(--fg)' : 'var(--card)',
              color: selectedCategory === cat ? 'var(--bg)' : 'var(--muted-fg)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.15s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div style={{
        backgroundColor: 'var(--card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--line)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setActivePost(post)}
            style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--line)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              transition: 'background-color 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--muted)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{
                backgroundColor: post.category === '공지사항' ? '#fee2e2' : post.category === '수익 인증' ? '#ecfdf5' : 'var(--blue-50)',
                color: post.category === '공지사항' ? '#dc2626' : post.category === '수익 인증' ? '#059669' : 'var(--blue-700)',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.2rem 0.6rem',
                borderRadius: '999px'
              }}>
                {post.category}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--dim)' }}>{post.date}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--dim)' }}>· {post.author}</span>
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--fg)', lineHeight: 1.4 }}>
              {post.title}
            </h3>

            <p style={{
              fontSize: '0.85rem',
              color: 'var(--muted-fg)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.5
            }}>
              {post.content}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: 'var(--dim)', marginTop: '0.25rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Eye size={14} /> {post.views}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <ThumbsUp size={14} /> {post.likes}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <MessageSquare size={14} /> {post.commentsCount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Post Detail Modal */}
      {activePost && (
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
            maxWidth: '680px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{
                backgroundColor: 'var(--blue-50)',
                color: 'var(--blue-700)',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.25rem 0.65rem',
                borderRadius: '999px'
              }}>
                {activePost.category}
              </span>
              <button
                onClick={() => setActivePost(null)}
                style={{ background: 'none', border: 'none', color: 'var(--muted-fg)', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.35 }}>
                {activePost.title}
              </h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--dim)', marginBottom: '1.5rem' }}>
                <strong>{activePost.author}</strong>
                <span>·</span>
                <span>{activePost.date}</span>
                <span>·</span>
                <span>조회 {activePost.views}</span>
              </div>

              <div style={{ fontSize: '0.95rem', lineHeight: 1.7, whiteSpace: 'pre-wrap', color: 'var(--fg)', marginBottom: '2rem' }}>
                {activePost.content}
              </div>

              {/* Like Button */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <button
                  onClick={() => handleLike(activePost.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '999px',
                    border: '1px solid var(--line)',
                    backgroundColor: 'var(--bg-alt)',
                    color: 'var(--fg)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  <ThumbsUp size={16} /> 좋아요 {activePost.likes}
                </button>
              </div>

              {/* Comments Section */}
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
                  댓글 {activePost.comments?.length || 0}개
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  {activePost.comments?.map((c) => (
                    <div key={c.id} style={{ backgroundColor: 'var(--bg-alt)', borderRadius: '10px', padding: '0.85rem 1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--dim)', marginBottom: '0.3rem' }}>
                        <strong>{c.author}</strong>
                        <span>{c.date}</span>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--fg)' }}>{c.content}</p>
                    </div>
                  ))}
                </div>

                {/* Add Comment Input */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="따뜻한 댓글을 남겨보세요..."
                    onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--line)',
                      backgroundColor: 'var(--bg)',
                      color: 'var(--fg)',
                      fontSize: '0.875rem'
                    }}
                  />
                  <button
                    onClick={handleAddComment}
                    className="btn btn-primary"
                    style={{ padding: '0.75rem 1.2rem', gap: '0.35rem' }}
                  >
                    <Send size={15} /> 작성
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Post Write Modal */}
      {isWriteModalOpen && (
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
            maxWidth: '560px',
            padding: '2rem 1.75rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
            position: 'relative'
          }}>
            <button
              onClick={() => setIsWriteModalOpen(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: 'var(--muted-fg)', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              새 글 작성
            </h2>

            <form onSubmit={handleCreatePost} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  카테고리
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--line)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--fg)',
                    fontSize: '0.875rem'
                  }}
                >
                  <option value="수익 인증">💰 수익 인증</option>
                  <option value="질문과 답변">💬 질문과 답변</option>
                  <option value="자유게시판">☕ 자유게시판</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  제목
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="제목을 입력하세요"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--line)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--fg)',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  내용
                </label>
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="자동화 경험이나 질문하고 싶은 내용을 편하게 작성해 주세요."
                  rows={6}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--line)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--fg)',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem', fontWeight: 700, marginTop: '0.5rem' }}
              >
                게시하기
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
