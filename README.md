# LLM Serving Notes

김상훈의 LLM 서비스 구축·운영 포트폴리오와 기술 기록입니다.

이 저장소에는 공개 웹사이트용 HTML·CSS와 설명 문서만 포함합니다. 실제 서비스 소스코드와는 독립적인 저장소입니다.

## 페이지

- `index.html`: 소개, 대표 프로젝트, 기술 기록
- `articles/closed-network-llm.html`: 폐쇄망 LLM 서비스 구축·운영 사례
- `assets/style.css`: 반응형 스타일

## GitHub Pages 게시

1. 별도의 공개 저장소 `llm-serving-notes`를 생성합니다.
2. 이 폴더의 파일을 저장소의 `main` 브랜치 루트에 업로드합니다. `.nojekyll`도 포함합니다.
3. Settings → Pages → Build and deployment에서 Deploy from a branch를 선택합니다.
4. 브랜치 `main`, 폴더 `/ (root)`를 지정하고 저장합니다.
5. Pages 설정 화면에 표시되는 게시 주소를 확인합니다.

## 편집

별도 설치나 빌드 과정이 없습니다. HTML을 수정하면 됩니다. 상대 경로를 사용하므로 프로젝트 Pages 경로에서도 동작합니다.

운영 지표를 수정할 때는 집계 기간과 측정 기준을 함께 갱신합니다.
