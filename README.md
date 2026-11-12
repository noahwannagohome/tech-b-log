# Tech B.Log

만들고, 부딪히고, 배운 것을 남기는 개인 개발 블로그입니다.

**블로그:** https://noahwannagohome.github.io/tech-b-log/

[AstroPaper](https://github.com/satnaing/astro-paper) 7.1.0과 Astro 7을 기반으로 합니다. 테마 원본: `6f61e2dc0e45bbcefc05f4055f293cd7f81bcb03`. 원본 MIT 라이선스는 `LICENSE`에 보존했습니다.

## 로컬 실행

Node.js 24와 pnpm 11.25.0을 사용합니다.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## 글 작성

`src/content/posts/`에 Markdown 파일을 추가합니다. 제목·날짜·태그·요약을 적으면 글 목록, 태그, 아카이브, RSS와 검색에 자동 반영됩니다.

```md
---
title: "새 글 제목"
pubDatetime: 2026-11-12T23:00:00+09:00
description: "글 요약"
tags: [backend]
draft: true
---

## 해결하려던 문제

본문을 작성합니다.
```

공개할 때 `draft: false`로 바꾸세요. 사이트 시간대는 `Asia/Seoul`입니다.

- 블로그 설정: `astro-paper.config.ts`
- 메인 소개: `src/pages/index.astro`
- 소개 글: `src/content/pages/about.md`
- 기존 운영 사례: `src/content/posts/closed-network-llm.md`

## 검증과 배포

```sh
pnpm build
pnpm preview
```

빌드는 Astro 타입·콘텐츠 검사, 정적 페이지 생성, Pagefind 검색 색인 생성을 수행합니다. `main`에 push하면 GitHub Actions가 빌드 성공 후 GitHub Pages에 배포합니다. PR은 빌드 검증만 수행합니다.

GitHub Settings → Pages → Source는 **GitHub Actions**로 설정합니다. 프로젝트 경로 `/tech-b-log`는 `astro.config.ts`에서 설정했습니다.

기존 `/articles/closed-network-llm.html`과 `/about.html` 주소는 새 경로로 연결합니다. 실제 서비스 소스코드는 포함하지 않습니다.
