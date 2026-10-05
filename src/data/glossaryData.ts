import type { GlossaryItem } from '../types';

export const GLOSSARY_DATA: GlossaryItem[] = [
  {
    id: 'codex',
    term: 'Codex (코덱스)',
    englishTerm: 'OpenAI Codex',
    category: 'AI 에이전트',
    summary: '코드 생성 및 프로그래밍 자동화에 특화된 고성능 AI 모델',
    detailedDescription: '자연어로 명령하면 웹사이트, 스크립트, 데이터 분석 코드를 직접 작성하고 버그를 수정하는 개발 특화 AI 엔진입니다. 비개발자가 말 한마디로 완전한 소프트웨어 서비스를 구축할 수 있는 기반이 됩니다.',
    example: '"이런 디자인의 강의 사이트 만들고 토스 결제 붙여줘"라고 명령하면 1분 안에 동작하는 전체 웹사이트 코드를 생성합니다.',
    relatedTerms: ['Claude Code', '바이브코딩', 'LLM 에이전트']
  },
  {
    id: 'claude-code',
    term: '클로드 코드 (Claude Code)',
    englishTerm: 'Claude Code',
    category: 'AI 에이전트',
    summary: '터미널에서 직접 실행되는 Anthropic의 차세대 자율형 에이전트 CLI',
    detailedDescription: '개발자 환경(CLI)에서 직접 파일 읽기, 쓰기, 테스트 실행, Git 커밋, 배포까지 스스로 수행하는 자율 코딩 에이전트입니다. 대화형 인터페이스를 넘어 실제 작업 완수까지 중단 없이 달립니다.',
    example: '터미널에 "claude"를 치고 비즈니스 로직 수정을 요청하면 관련 파일 5개를 알아서 찾아서 수정하고 빌드까지 완료합니다.',
    relatedTerms: ['Codex', 'MCP', '바이브코딩']
  },
  {
    id: 'vibe-coding',
    term: '바이브 코딩 (Vibe Coding)',
    englishTerm: 'Vibe Coding',
    category: '바이브코딩',
    summary: '문법이나 코드 한 줄 직접 치지 않고 느낌과 의도만으로 소프트웨어를 만드는 방식',
    detailedDescription: '안드레이 카파시(Andrej Karpathy)가 제안한 패러다임으로, 복잡한 신택스 암기 대신 시스템의 목표, 구조, 느낌(Vibe)만을 프롬프트로 전달하고 실제 구현과 디버깅은 AI 에이전트에게 전담시키는 새로운 개발 방식입니다.',
    example: '"사용자가 결제하면 축하 폭죽이 터지고 이메일로 링크를 보내는 모달을 띄워줘"라고 말하면 끝.',
    relatedTerms: ['Claude Code', 'Codex', '프롬프트']
  },
  {
    id: 'mcp',
    term: 'MCP (모델 컨텍스트 프로토콜)',
    englishTerm: 'Model Context Protocol',
    category: '자동화 인프라',
    summary: 'AI가 외부 데이터베이스, 브라우저, 로컬 파일과 안전하게 연결되도록 하는 표준 규격',
    detailedDescription: 'Anthropic이 제안한 오픈 프로토콜로, AI 모델이 고립된 채팅창을 벗어나 슬랙, 노션, 데이터베이스, 브라우저 조작 툴과 표준화된 방식으로 소통할 수 있게 만듭니다.',
    example: 'MCP를 이용해 AI가 매일 아침 구글 스프레드시트의 주문 목록을 확인하고 자동으로 고객에게 카카오 알림톡을 전송합니다.',
    relatedTerms: ['AI 에이전트', '자동화 인프라']
  },
  {
    id: 'vps',
    term: '무료 VPS (가상 사설 서버)',
    englishTerm: 'Virtual Private Server',
    category: '자동화 인프라',
    summary: '내 컴퓨터를 꺼도 클라우드 상에서 24시간 365일 내 에이전트가 돌아가게 해주는 원격 컴퓨터',
    detailedDescription: '오라클 클라우드, 구글 클라우드 등의 평생 무료 티어(Always Free)를 활용하여 상시 켜져 있는 리눅스 서버를 구축하고, 에이전트가 상주하며 주기적인 마케팅, 크롤링, CS 응대를 수행하도록 설정합니다.',
    example: '밤 12시에 컴퓨터를 끄고 잠들어도, VPS 안의 에이전트는 새벽 6시 인스타그램 발행과 아침 8시 주문 취합을 정상 수행합니다.',
    relatedTerms: ['자동화 인프라', 'AI 에이전트']
  },
  {
    id: 'n8n',
    term: 'n8n (엔에잇엔)',
    englishTerm: 'n8n Workflow Automation',
    category: '자동화 인프라',
    summary: '노드 기반의 노코드/로우코드 오픈소스 업무 자동화 플랫폼',
    detailedDescription: 'Zapier나 Make의 강력한 오픈소스 대안으로, 자체 서버에 무료로 설치해 무제한 워크플로우를 실행할 수 있습니다. AI 에이전트 노드와 결합하여 고난도 복합 자동화 파이프라인을 구축합니다.',
    example: '웹훅 -> 데이터 정제 -> Claude 요약 -> 텔레그램 승인 요청 -> 인스타그램 발행 워크플로우를 시각적으로 연결.',
    relatedTerms: ['자동화 인프라', '텔레그램 봇']
  },
  {
    id: 'telegram-loop',
    term: '텔레그램 3선택 피드백 루프',
    englishTerm: 'Human-in-the-loop via Telegram',
    category: 'AI 에이전트',
    summary: 'AI가 생성한 초안을 사장이 휴대폰에서 원클릭 승인/거절/무시할 수 있는 안전장치',
    detailedDescription: '완전 무인화의 위험(엉뚱한 답변, 이상한 포스팅)을 방지하기 위해, 초안은 AI가 작성하되 텔레그램 메시지의 [승인] [수정/거절] [답변안함] 버튼을 눌러 승인된 것만 발행되도록 하는 구조입니다.',
    example: '고객 댓글이 달리면 3초 만에 스마트폰 텔레그램으로 답글 초안이 오고, 사장은 [승인] 버튼 하나만 딸깍 누릅니다.',
    relatedTerms: ['AI 에이전트', '비즈니스 모델']
  },
  {
    id: 'supabase',
    term: 'Supabase (수파베이스)',
    englishTerm: 'Supabase BaaS',
    category: '자동화 인프라',
    summary: '회원가입, 데이터베이스, 파일 스토리지를 한 번에 해결해주는 오픈소스 Firebase 대안',
    detailedDescription: 'PostgreSQL 기반으로 구축된 최신 백엔드 서비스로, 직관적인 대시보드와 강력한 실시간 API를 무료 티어만으로도 수천 명의 회원을 수용할 수 있게 제공합니다.',
    example: '강의 사이트의 회원 목록, 결제 영수증, 수강 진도율을 1초 만에 저장하고 조회합니다.',
    relatedTerms: ['자동화 인프라', '바이브코딩']
  }
];
