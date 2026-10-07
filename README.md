# AI진클래스 (jinclass)

> **AI 비즈니스 자동화 강의 — 클로드 코드 · Codex 에이전트**  
> 코딩을 몰라도 웹사이트 · 매일 콘텐츠 · 영상 편집 · 24시간 운영을 AI 에이전트에게 맡기는 실전 클래스

---

## 🌟 주요 기능 및 특징

- **인터랙티브 커리큘럼**: 기초부터 실전 비즈니스 자동화 파이프라인 구축까지 단계별 학습
- **AI 용어 사전 (Glossary)**: 초보자도 쉽게 이해할 수 있는 AI & 코딩 핵심 용어집
- **수강 견적 / 비용 계산기**: 맞춤형 플랜 선택 및 실시간 수강 견적 확인
- **사전 예약 및 수강 신청**: 전환율 높은 직관적인 신청 플로우
- **반응형 & 다크/라이트 테마**: 모든 디바이스에서 최적화된 모던 UI/UX (Pretendard 폰트 기반)

---

## 🛠 기술 스택

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Vanilla CSS (Modern Design Tokens, Responsive, Dark/Light Mode)
- **Icons**: Lucide React
- **Effects**: Canvas Confetti

---

## 🚀 시작하기

### 개발 서버 실행
```bash
npm install
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

## Oracle 배포

사용자 요청에 따라 `main` push 후 GitHub Actions가 린트·빌드를 실행하고 `dist/`를 Oracle에 배포합니다. 신규 Docker/DB 없이 기존 Node 런타임을 사용합니다.

- 접속 주소: `http://161.33.12.59:8891/` (Oracle Cloud 인바운드 TCP 8891 허용 필요)
- 경로: `/home/ubuntu/static-sites/jinclass/current` → 커밋별 릴리스
- 서비스: `static-site@jinclass.service`
- 상태 확인: `/deploy-version.json`의 `commit`과 GitHub 커밋 비교
- Secrets: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_KNOWN_HOSTS`
- 전용 키는 해당 사이트의 정적 빌드 업로드 명령만 실행합니다. 기존 관리자 키를 CI에 넣지 않습니다.
- 서버 내부 점검 실패 시 이전 릴리스로 복원하며, 외부 접속·커밋 검증까지 통과해야 Actions가 성공합니다.
- 정적 서버/배포 수신기 원본: `scripts/oracle/`. Project Hub의 기존 SSH 배포 방식과 Node 정적 파일 제공 방식을 사이트용으로 분리했습니다. 서버 설치 위치는 `/home/ubuntu/static-sites/bin/`이며 스크립트 변경 시 관리자 설치가 필요합니다.
