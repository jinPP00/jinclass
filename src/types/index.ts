export interface Lecture {
  id: string;
  number: string;
  title: string;
  duration: string;
  isFree?: boolean;
  videoUrl?: string;
  description?: string;
}

export interface CoursePart {
  partNumber: string;
  title: string;
  range: string;
  lectureCount: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  badges: { text: string; variant: 'outline' | 'red' | 'green' | 'secondary' | 'primary' }[];
  originalPrice: number;
  discountRate: number;
  price: number;
  isSoldOut?: boolean;
  durationText: string;
  totalLectures: number;
  parts?: CoursePart[];
  lectures?: Lecture[];
  features?: string[];
}

export interface GlossaryItem {
  id: string;
  term: string;
  englishTerm: string;
  category: 'AI 에이전트' | '바이브코딩' | '자동화 인프라' | '비즈니스 모델' | '프롬프트';
  summary: string;
  detailedDescription: string;
  example: string;
  relatedTerms: string[];
}

export interface BoardPost {
  id: string;
  category: '공지사항' | '수익 인증' | '질문과 답변' | '자유게시판';
  title: string;
  content: string;
  author: string;
  authorBadge?: string;
  date: string;
  views: number;
  likes: number;
  commentsCount: number;
  comments?: {
    id: string;
    author: string;
    date: string;
    content: string;
  }[];
}

export interface BusinessModelResult {
  recommendedModel: string;
  subtitle: string;
  whyFit: string;
  roadmap: {
    week1: string;
    week2: string;
    week3: string;
    week4: string;
  };
  requiredTools: string[];
  firstGoal: string;
  estimatedRevenue: string;
  candidates: {
    title: string;
    desc: string;
    difficulty: string;
  }[];
}
