## Oracle 배포 예외 (2026-10-07 사용자 요청)
정적 빌드 dist를 Oracle /home/ubuntu/static-sites/jinclass에 배포한다. main push → GitHub Actions 린트·빌드 → 프로젝트 전용 제한 SSH 키 → 릴리스 전환을 사용한다. 공개 포트는 8891이다. 기존 Node 런타임과 systemd를 재사용하며 DB나 Docker 스택을 추가하지 않는다.
