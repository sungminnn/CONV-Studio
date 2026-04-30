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
- `nginx/http.conf.template`
- `nginx/https.conf.template`
- `.env.example`

## HTTPS Deploy

도메인: `io5869.cafe24.com`

먼저 GitHub 반영 후 서버에서 실행:

```bash
cd /srv/apps/CONV-Studio
git pull
cp .env.example .env
```

`.env`에서 최소한 아래 값은 확인합니다.

```env
DOMAIN=io5869.cafe24.com
LETSENCRYPT_EMAIL=your-email@example.com
```

1차 기동:

```bash
docker compose up -d --build app nginx
```

인증서 발급:

```bash
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path /var/www/certbot \
  -d io5869.cafe24.com \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email
```

인증서 반영:

```bash
docker compose restart nginx
```

이후 `https://io5869.cafe24.com` 으로 접속합니다.

갱신 시:

```bash
docker compose run --rm certbot renew
docker compose restart nginx
```
