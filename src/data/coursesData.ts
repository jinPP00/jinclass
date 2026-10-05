import type { Course, CoursePart, Lecture } from '../types';

export const LECTURES_DATA: Lecture[] = [
  { id: '1', number: '01', title: '언제 사라질지 모르는 codex 무제한 사용법 (웹쫀쿠)', duration: '19:41', isFree: false },
  { id: '2', number: '02', title: 'GPT 6- Astra + 핸드폰 연결해서 일시키는 세팅법', duration: '06:29', isFree: true, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', description: '에이전트를 내 스마트폰과 텔레그램으로 연결하여 외부에서도 즉시 업무를 지시하고 실시간 보고를 받는 환경을 설정합니다.' },
  { id: '3', number: '03', title: '1일 차 ) 내가 할 수 있는 비즈니스 모델(수익화 방법)은 뭘까?', duration: '18:01' },
  { id: '4', number: '04', title: '1일 차 ) 시작 전 준비사항', duration: '04:06' },
  { id: '5', number: '05', title: '1일 차 ) 나를 \'복제\'한다고?', duration: '07:12' },
  { id: '6', number: '06', title: '1일 차 ) 어떤 걸 자동화 할까?', duration: '15:06' },
  { id: '7', number: '07', title: '1일 차 ) 내 수익 모델이 궁금하다면', duration: '10:54' },
  { id: '8', number: '08', title: '1일 차 ) 이건 알고 시작하세요', duration: '23:08' },
  { id: '9', number: '09', title: '1일 차 ) 클로드 코드를 내 컴퓨터에', duration: '08:49' },
  { id: '10', number: '10', title: '1일 차 ) 사람들에게 월 9900원 받으려면?', duration: '23:17' },
  { id: '11', number: '11', title: '1일 차 ) 이 공간이 당신에게 자유를 줄겁니다.', duration: '13:40' },
  { id: '12', number: '12', title: '2일 차 ) 집 밖에서도 가능한 "영상 편집 자동으로 해줘"', duration: '14:06' },
  { id: '13', number: '13', title: '2일 차 ) 가상 머신(VM)을 응용하세요', duration: '07:03' },
  { id: '14', number: '14', title: '2일 차 ) 클라우드 환경 만들기', duration: '08:44' },
  { id: '15', number: '15', title: '3일 차 ) Codex (GPT -6 astra) 가 다해주는 사이트 딸깍', duration: '22:38' },
  { id: '16', number: '16', title: '3일 차 ) 어디서든 사용할 수 있게 skill 공유', duration: '03:06' },
  { id: '17', number: '17', title: '3일 차 ) Codex (GPT -6 astra) 가 다해주는 딸깍 (1)', duration: '10:48' },
  { id: '18', number: '18', title: '3일 차 ) Codex (GPT -6 astra) 가 다해주는 딸깍 (2)', duration: '08:59' },
  { id: '19', number: '19', title: '4일 차 ) 우리는 개발자? ㄴㄴ 사업가!!', duration: '10:48' },
  { id: '20', number: '20', title: '4일 차 ) 시작 전 준비사항', duration: '18:39' },
  { id: '21', number: '21', title: '4일 차 ) "이런 사이트 만들어줘"를 말 대신', duration: '01:00' },
  { id: '22', number: '22', title: '4일 차 ) 왜 내 사이트에서 내 지식을 팔아야하는가', duration: '13:32' },
  { id: '23', number: '23', title: '4일 차 ) 원하는 걸 말해봐', duration: '14:47' },
  { id: '24', number: '24', title: '4일 차 ) 내 디지털 상품을 팔 곳', duration: '23:09' },
  { id: '25', number: '25', title: '4일 차 ) 내 경험과 지식을 상품화하세요', duration: '08:47' },
  { id: '26', number: '26', title: '4일 차 ) 온라인 사무실 꾸미기', duration: '19:43' },
  { id: '27', number: '27', title: '4일 차 ) 필요한 기능은 계속 생깁니다', duration: '14:00' },
  { id: '28', number: '28', title: '4일 차 ) 강의 사이트 만들기', duration: '05:37' },
  { id: '29', number: '29', title: '5일 차 ) 관리자 페이지', duration: '14:23' },
  { id: '30', number: '30', title: '5일 차 ) 첫 만남은 9900원 결제 페이지 구축', duration: '18:50' },
  { id: '31', number: '31', title: '5일 차 ) 토스페이먼츠 실연동 세팅', duration: '20:12' },
  { id: '32', number: '32', title: '6일 차 ) PageSpeed 데스크톱 100점 속도 최적화', duration: '16:45' },
  { id: '33', number: '33', title: '6일 차 ) 보안 A+ 등급 세팅 및 도메인 연결', duration: '12:30' },
  { id: '34', number: '34', title: '6일 차 ) Supabase DB 및 회원 권한 관리', duration: '21:10' },
  { id: '35', number: '35', title: '7일 차 ) 사이트 런칭 실전 체크리스트', duration: '15:22' },
  { id: '36', number: '36', title: '7일 차 ) 첫 결제 알림 및 자동 이메일 발송', duration: '11:40' },
  { id: '37', number: '37', title: '8일 차 ) SNS 콘텐츠 자동 생성 파이프라인 개요', duration: '14:15' },
  { id: '38', number: '38', title: '8일 차 ) 텔레그램 봇으로 3선택 피드백 루프 만들기', duration: '25:04' },
  { id: '39', number: '39', title: '9일 차 ) 스레드/인스타그램 자동 발행 세팅', duration: '18:33' },
  { id: '40', number: '40', title: '9일 차 ) 무료 VPS 클라우드 서버 24시간 백그라운드 구동', duration: '22:15' },
  { id: '41', number: '41', title: '10일 차 ) 컴퓨터가 꺼져도 돌아가는 워커 프로세스', duration: '17:50' },
  { id: '42', number: '42', title: '10일 차 ) 규칙과 판단의 분리: AI 비용 97% 줄이기', duration: '19:28' },
  { id: '43', number: '43', title: '11일 차 ) 댓글 7,000원 -> 200원 비용 절감 실측', duration: '13:05' },
  { id: '44', number: '44', title: '11일 차 ) 상황별 맞춤 판단: B2B 문의 자동 분류 로직', duration: '20:40' },
  { id: '45', number: '45', title: '12일 차 ) 외식/쇼핑몰 클레임 및 예약 자동 응대 분기', duration: '18:12' },
  { id: '46', number: '46', title: '12일 차 ) 피드백이 쌓여 규칙으로 승격되는 자가 진화 시스템', duration: '24:19' },
  { id: '47', number: '47', title: '13일 차 ) 나만의 톤앤매너 프롬프트 튜닝', duration: '15:44' },
  { id: '48', number: '48', title: '13일 차 ) 숏폼 영상 스크립트 + 보이스 자동 생성기', duration: '22:08' },
  { id: '49', number: '49', title: '14일 차 ) 이미지 및 썸네일 자동 렌더링 파이프라인', duration: '19:35' },
  { id: '50', number: '50', title: '14일 차 ) 블로그 포스팅 SEO 자동화 및 구글 노출', duration: '16:50' },
  { id: '51', number: '51', title: '15일 차 ) 고객 문의 CRM 자동 기록 및 알림', duration: '14:20' },
  { id: '52', number: '52', title: '15일 차 ) 전환율 측정: UTM 파라미터 자동 트래킹', duration: '12:45' },
  { id: '53', number: '53', title: '16일 차 ) 주간 성과 요약 보고서 텔레그램 수신', duration: '11:15' },
  { id: '54', number: '54', title: '16일 차 ) 스레드 유입 388명 발생 실측 분석', duration: '16:30' },
  { id: '55', number: '55', title: '17일 차 ) 글 1개로 7건 결제 추적 실사례', duration: '21:05' },
  { id: '56', number: '56', title: '17일 차 ) 팔로워 13명 증가와 프로필 방문 분석', duration: '10:55' },
  { id: '57', number: '57', title: '18일 차 ) 에이전트 오류 자동 복구와 서킷 브레이커', duration: '18:40' },
  { id: '58', number: '58', title: '18일 차 ) 데이터 백업 및 보안 가이드', duration: '14:10' },
  { id: '59', number: '59', title: '19일 차 ) 자동화 대행 비즈니스 상품화 및 단가 산정', duration: '26:15' },
  { id: '60', number: '60', title: '19일 차 ) 첫 외주 클라이언트 제안서 작성법', duration: '17:35' },
  { id: '61', number: '61', title: '20일 차 ) 데이터의 격차: 지금 시작한 사람이 이기는 이유', duration: '25:50' },
  { id: '62', number: '62', title: '21일 차 ) [PART 4] 심화: 다중 에이전트 협업 오케스트레이션', duration: '28:10' },
  { id: '63', number: '63', title: '21일 차 ) MCP(Model Context Protocol) 커스텀 툴 연동', duration: '24:45' },
  { id: '64', number: '64', title: '22일 차 ) 카카오톡 알림톡 및 자동 비즈니스 메시지', duration: '19:20' },
  { id: '65', number: '65', title: '22일 차 ) 매출 정산 및 회계 보고서 자동 취합', duration: '16:40' },
  { id: '66', number: '66', title: '23일 차 ) 1인 기업 24시간 무인 운영 종합 체크리스트', duration: '22:15' },
  { id: '67', number: '67', title: '23일 차 ) 실제 수강생 런칭 케이스 스터디 & 피드백', duration: '31:20' },
  { id: '68', number: '68', title: '24일 차 ) 마침표 없는 자동화의 미래와 다음 단계', duration: '18:55' },
];

export const COURSE_PARTS: CoursePart[] = [
  { partNumber: '맛보기', title: '맛보기 영상', range: '1~2강', lectureCount: 2 },
  { partNumber: 'PART 1', title: '나만의 비즈니스 모델 만들기', range: '3~8강', lectureCount: 6 },
  { partNumber: 'PART 2', title: '내가 원하는 것을 현실화하세요', range: '9~36강', lectureCount: 28 },
  { partNumber: 'PART 3', title: '나를 복제하세요', range: '37~61강', lectureCount: 25 },
  { partNumber: 'PART 4', title: '심화 에이전트 오케스트레이션 & 실전 런칭', range: '62~68강', lectureCount: 7 },
];

export const COURSES: Course[] = [
  {
    id: 'ai-agent',
    slug: 'ai-agent',
    title: '“해줘” 강의',
    subtitle: '자동화 운영을 목적으로 내 비즈니스 만들기 및 에이전트 세팅',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    badges: [
      { text: '중급', variant: 'outline' },
      { text: '🔥 한정 수량', variant: 'red' },
      { text: '📅 1년 수강', variant: 'outline' }
    ],
    originalPrice: 3330000,
    discountRate: 70,
    price: 999000,
    durationText: '68강 · 13시간 22분',
    totalLectures: 68,
    parts: COURSE_PARTS,
    lectures: LECTURES_DATA,
    features: [
      '68강 VOD 평생/1년 무제한 수강',
      '말 한마디로 사이트·결제·회원 세팅 완료',
      '컴퓨터 꺼도 24시간 일하는 무료 VPS 세팅',
      '텔레그램 봇 3선택 피드백 승인 루프 소스코드',
      '수강생 전용 커뮤니티 및 질문 채널 입장권'
    ]
  },
  {
    id: 'auto',
    slug: 'auto',
    title: '초보자를 위한 " AI로 돈버는 방법을 자동화" 1/2세대',
    subtitle: '비개발자 직장인을 위한 코딩 없는 AI 수익화 첫걸음 입문 강좌',
    thumbnail: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    badges: [
      { text: '입문', variant: 'outline' },
      { text: '품절', variant: 'secondary' },
      { text: '📅 1년 수강', variant: 'outline' }
    ],
    originalPrice: 1000000,
    discountRate: 45,
    price: 550000,
    isSoldOut: true,
    durationText: '32강 · 7시간 10분',
    totalLectures: 32
  },
  {
    id: 'consulting',
    slug: 'consulting',
    title: '1:1 컨설팅 신청',
    subtitle: '인생이 바뀔 단 한 번의 미팅(비즈니스 자동화 컨설팅)',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    badges: [
      { text: '🎥 라이브 미팅', variant: 'green' },
      { text: '📅 1개월 수강', variant: 'outline' }
    ],
    originalPrice: 10000000,
    discountRate: 22,
    price: 7770000,
    durationText: '1:1 밀착 코칭 · 전담 에이전트 빌드',
    totalLectures: 4
  }
];

export const BM_PACKS = [
  {
    id: 'bm-pack-5',
    title: '비즈니스 모델 분석 +5회 팩',
    badge: '+5회',
    price: 50000,
    perPrice: '회당 10,000원',
    description: '무료 한도 외에 나만의 다양한 비즈니스 모델을 추가로 심층 분석합니다.'
  },
  {
    id: 'bm-pack-10',
    title: '비즈니스 모델 분석 +10회 팩',
    badge: '+10회',
    price: 99000,
    perPrice: '회당 9,900원',
    description: '충분한 테스트와 시장 조사, 지인 추천까지 넉넉하게 활용 가능한 베스트 패키지.'
  }
];
