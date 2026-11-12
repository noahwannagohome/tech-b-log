import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://noahwannagohome.github.io/tech-b-log/",
    title: "Tech B.Log",
    description: "백엔드, 개발 환경, 인프라와 AI를 만들고 운영하며 쌓는 개발 경험을 기록합니다.",
    author: "김상훈",
    profile: "https://github.com/noahwannagohome",
    ogImage: "tech-b-log-og.png",
    lang: "ko",
    timezone: "Asia/Seoul",
    dir: "ltr",
  },
  posts: { perPage: 8, perIndex: 5 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: true, url: "https://github.com/noahwannagohome/tech-b-log/edit/main/" },
    search: "pagefind",
    toc: true,
  },
  socials: [{ name: "github", url: "https://github.com/noahwannagohome", linkTitle: "김상훈의 GitHub" }],
  shareLinks: [],
});
