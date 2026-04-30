# CONV-Studio

CONV Studio 랜딩 페이지 설계 초안은 [docs/conv-studio-plan.md](/C:/project/CONV-Studio/docs/conv-studio-plan.md) 에 정리되어 있습니다.

핵심 방향:
- 포트폴리오형이 아닌 전환 중심 랜딩 페이지
- 1차 전환: `KakaoTalk 상담`
- 2차 전환: `문의 폼 제출`

## Docker Deploy

이 저장소는 Next.js 앱이 루트에 있으므로 별도의 `app/` 폴더로 옮길 필요 없이, 저장소 루트에서 바로 Docker 배포를 진행합니다.

배포 파일:
- `Dockerfile`
- `docker-compose.yml`
- `nginx/default.conf`
- `.env.example`

서버에서 실행:

```bash
cd /srv/apps/CONV-Studio
cp .env.example .env
docker compose up -d --build
```

접속 포트 변경이 필요하면 `.env`의 `NGINX_PORT` 값을 수정합니다.
