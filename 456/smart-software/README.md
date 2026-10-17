# CODE YOUR NEXT — 스마트소프트웨어과

한국폴리텍대학 대전캠퍼스 스마트소프트웨어과 홍보 사이트 시안. Next.js App Router + React 프런트엔드, NestJS API, MongoDB/Mongoose 데이터 계층.

## 실행

Node.js 22 이상, pnpm, MongoDB 7 이상을 준비합니다.

```sh
pnpm install
cp .env.example .env
pnpm seed
pnpm api:dev
# 별도 터미널
pnpm dev
```

프런트엔드 http://127.0.0.1:3000 / API http://127.0.0.1:4000/api/stories

MongoDB 연결 URI를 `.env`에 설정하세요. 로컬 MongoDB 또는 Atlas를 사용할 수 있습니다. API는 DB 연결 없이는 시작하지 않습니다. `seed`는 예시 문서를 추가하며 기존 문서를 덮어쓰지 않습니다. 공개 쓰기 API는 제공하지 않습니다. 운영 콘텐츠는 MongoDB에서 관리하며 CMS/관리자 인증은 별도 확장 대상입니다.

## 검증과 배포

```sh
pnpm api:check
pnpm build
pnpm api:start
```

`out/`은 Next.js 정적 내보내기 결과이며 정적 호스팅에 배포합니다. NestJS는 별도 Node.js 서버, MongoDB는 별도 DB가 필요합니다. 운영 API 주소를 `NEXT_PUBLIC_API_URL`로 설정한 뒤 프런트엔드를 다시 빌드하세요. API 서버의 `FRONTEND_ORIGIN`에는 정확한 HTTPS 프런트엔드 주소를 설정합니다. HTTPS 배포에서는 API도 HTTPS가 필요합니다.

API 주소가 없거나 연결이 실패하면 명시적으로 표시한 예시 소식을 보여줍니다. 개인정보 수집 폼이나 허위 접수 완료 기능은 없습니다. 입학 안내는 공식 홈페이지 및 확인된 입학상담 번호로 연결합니다.

## 디자인과 콘텐츠

독자적인 네이비/라임 아트 디렉션, Canvas 입자 궤도, 동작 일시정지, reduced-motion 대응, 반응형 메뉴, 키보드 접근 가능한 학습 분야 탭, 뉴스 필터, 포커스가 복원되는 상세 다이얼로그, FAQ를 구현했습니다.

학과 기본정보 참고: https://www.kopo.ac.kr/daejeon/content.do?menu=5545 및 https://www.kopo.ac.kr/daejeon/content.do?menu=5544

정보 위계 및 미디어 활용 참고: https://www.kopo.ac.kr/daejeon/index.do / https://www.snu.ac.kr/index.html / https://www.yonsei.ac.kr/sc/index.do / https://www.korea.ac.kr/sites/ko/index.do

원문 디자인, 로고, 사진을 복제하지 않았습니다. 로고 마크는 시안용 타이포그래픽 마크입니다. 프로젝트, 학습 분야 설명과 소식은 기획 예시입니다. 실제 교육과정·행사·취업성과는 학과 확인 후 교체해야 합니다. 학생 사진은 Unsplash 분위기 이미지이며 대전캠퍼스 실사로 표시하지 않습니다. 외부 폰트와 사진은 네트워크가 필요하며, 운영 전 기관이 승인한 로컬 자산으로 교체하는 것을 권장합니다.
