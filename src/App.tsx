import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { AuthModal } from './components/AuthModal';
import { CheckoutModal } from './components/CheckoutModal';
import { VideoModal } from './components/VideoModal';

import { HomeView } from './views/HomeView';
import { CoursesView } from './views/CoursesView';
import { CourseDetailView } from './views/CourseDetailView';
import { BusinessModelView } from './views/BusinessModelView';
import { GlossaryView } from './views/GlossaryView';
import { BoardsView } from './views/BoardsView';
import { LearnView } from './views/LearnView';

import { COURSES } from './data/coursesData';

export const App: React.FC = () => {
  // Navigation tab state
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('ai-agent');
  const [currentLectureId, setCurrentLectureId] = useState<string>('2');

  // Theme state (Dark/Light mode)
  const [isDark, setIsDark] = useState<boolean>(false);

  // Modals state
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });
  const [checkoutModal, setCheckoutModal] = useState<{
    isOpen: boolean;
    item: { title: string; price: number; originalPrice?: number } | null;
  }>({
    isOpen: false,
    item: null
  });
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: ''
  });

  // Current logged in user email
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  // Sync theme to document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentTab('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToLearn = (courseId: string, lectureId: string) => {
    setSelectedCourseId(courseId);
    setCurrentLectureId(lectureId);
    setCurrentTab('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* GNB Navigation Header */}
      {currentTab !== 'learn' && (
        <Header
          currentTab={currentTab}
          onTabChange={handleTabChange}
          onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
          isDark={isDark}
          onToggleTheme={toggleTheme}
          showBackButton={currentTab === 'course-detail'}
          onBack={() => handleTabChange('courses')}
          currentUser={currentUser}
          onGoToMyCourse={() => handleGoToLearn('ai-agent', '1')}
        />
      )}

      {/* Main Page Views */}
      <main style={{ flex: 1 }}>
        {currentTab === 'home' && (
          <HomeView
            onStartBusinessModel={() => handleTabChange('business-model')}
            onGoToCourses={() => handleTabChange('courses')}
          />
        )}

        {currentTab === 'courses' && (
          <CoursesView
            onSelectCourse={handleSelectCourse}
            onBuyPack={(pack) => setCheckoutModal({ isOpen: true, item: pack })}
            onStartBusinessModel={() => handleTabChange('business-model')}
          />
        )}

        {currentTab === 'course-detail' && (
          <CourseDetailView
            course={selectedCourse}
            onOpenCheckout={(item) => setCheckoutModal({ isOpen: true, item })}
            onOpenVideoModal={(title) => setVideoModal({ isOpen: true, title })}
            onGoToLearn={handleGoToLearn}
            onBack={() => handleTabChange('courses')}
          />
        )}

        {currentTab === 'business-model' && (
          <BusinessModelView
            onGoToCourses={() => handleSelectCourse('ai-agent')}
            onOpenCheckout={(item) => setCheckoutModal({ isOpen: true, item })}
          />
        )}

        {currentTab === 'glossary' && <GlossaryView />}

        {currentTab === 'boards' && <BoardsView />}

        {currentTab === 'learn' && (
          <LearnView
            course={selectedCourse}
            currentLectureId={currentLectureId}
            onSelectLecture={(id) => setCurrentLectureId(id)}
            onBack={() => handleTabChange('course-detail')}
          />
        )}
      </main>

      {/* Footer */}
      {currentTab !== 'learn' && <Footer onTabChange={handleTabChange} />}

      {/* Floating Action Buttons */}
      {currentTab !== 'learn' && <FloatingButtons />}

      {/* Authentication Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ isOpen: false, mode: 'login' })}
        onSuccess={(email) => {
          setCurrentUser(email);
          alert(`${email} 님, 환영합니다!`);
        }}
      />

      {/* Toss Payments Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModal.isOpen}
        item={checkoutModal.item}
        onClose={() => setCheckoutModal({ isOpen: false, item: null })}
        onSuccess={(_title) => {
          // Open learning room after payment
          setTimeout(() => {
            handleGoToLearn('ai-agent', '1');
          }, 800);
        }}
        onOpenLearn={() => handleGoToLearn('ai-agent', '1')}
      />

      {/* Free Lecture Preview Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        title={videoModal.title}
        onClose={() => setVideoModal({ isOpen: false, title: '' })}
      />
    </div>
  );
};

export default App;
