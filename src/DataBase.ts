export interface PortfolioItem {
  _id: number;
  title: string;
  url: string;
  mainDesc: string;
  tag: string;
  thumbImg: string;
  images: string[];
  desc: string[];
}

const DataBase: PortfolioItem[] = [
  {
    _id: 5,
    title: "Resume Room",
    url: "https://resume-studio-navy.vercel.app/",
    mainDesc:
      "이력서 양식을 직접 만들고 여러 버전으로 관리하는 과정에서, 브라우저에서 작성한 내용을 저장·수정하고 바로 PDF로 내보낼 수 있는 관리 도구의 필요성을 느껴 해당 서비스를 기획하고 구축했습니다.\n\n이 서비스는 단순 문서 편집이 아니라 버전별 이력서 관리, 작성 중 데이터 보존, 사용자별 문서 분리, 웹 편집 결과와 PDF 출력 결과의 일관성이 함께 요구되는 작업이었기 때문에, 작성 흐름이 끊기지 않으면서도 안정적으로 저장·출력할 수 있는 구조가 필요했습니다. 또한 별도 회원가입 없이 바로 사용할 수 있는 접근성과, 반복 수정이 많은 프로젝트 특성상 빠르게 기획·구현·검증을 반복할 수 있는 개발 방식이 중요했습니다.\n\n이를 위해 인증은 별도 회원가입 절차 없이 바로 사용할 수 있도록 Google OAuth를 적용해 진입 장벽을 낮췄고, 데이터 저장은 사용자별 이력서 분리와 권한 제어를 안정적으로 처리할 수 있도록 Supabase 기반으로 설계했습니다. 편집 과정에서는 local draft와 자동 저장 구조를 두어 작성 내용 유실을 줄였고, 템플릿 전환, 섹션별 표시 제어, JSON import/export, 다페이지 PDF 출력과 실시간 맞춤법 검사도 반영해 실제 작성부터 저장, 출력까지 하나의 흐름으로 연결했습니다.\n\n특히 개발 과정에서는 AI 에이전트 기반 협업 방식을 적극 활용해 프론트엔드, 백엔드, QA 관점으로 다수의 에이젼트로 역할을 분리하고, 기획 정리, UI 개선, 데이터 구조 설계, PDF 출력 검증, 테스트 시나리오 점검을 병렬로 진행하며 반복 수정 속도와 검증 효율을 높였습니다.\n그 결과 여러 버전의 이력서를 웹에서 편집·관리하고 바로 PDF로 내보낼 수 있는 기능을 구현했으며, 그뿐 아니라 AI을 이용하여 기획-구현-검증 전 과정에 연결하는 개발 방식까지 적용해 볼 수 있었습니다.",
    tag: "Next.js 16, React 19, TypeScript, SCSS, Jotai, dnd-kit, Supabase, React PDF Renderer, Codex AI, Vercel",
    thumbImg: "/images/work6.jpg",
    images: [
      "/images/@temp6-1.jpg",
      "/images/@temp6-2.jpg",
      "/images/@temp6-3.jpg",
    ],
    desc: [
      "로그인 화면입니다. 저장, 버전 관리, PDF 정리까지 이어지는 서비스 흐름을 첫 진입에서 바로 이해할 수 있도록 브랜드 영역과 Google 로그인 패널을 분리해 구성했습니다.",
      "문서 목록 워크스페이스 화면입니다. 좌측 row 기반 목록에서 문서를 선택하고, 우측에서는 선택한 이력서를 PDF viewer 기준으로 즉시 미리볼 수 있도록 구성했습니다.",
      "이력서 편집 화면입니다. 좌측 아코디언 편집 패널과 우측 문서 미리보기를 분리하고, 템플릿 전환, 세분화된 섹션 표시 제어, dnd-kit 기반 순서 변경, 저장/PDF 액션을 한 흐름 안에서 처리하도록 설계했습니다.",
    ],
  },
  {
    _id: 4,
    title: "바카라 웹 플랫폼 운영\n(스카이 이글스)",
    url: "",
    mainDesc:
      "실제 카지노 정킷 테이블을 기반으로 운영되는 라이브 바카라 웹 게임의 프론트엔드 개발을 담당했습니다.\n\n이 서비스는 테이블별 라운드 상태, 베팅 실행 및 결과, 잔액 정보가 동시에 빠르게 변하는 환경이어서 단순 REST 중심 구조만으로는 화면의 즉시성과 상태 일관성을 보장하기 어려웠고, 모바일부터 대형 화면, 멀티테이블 환경까지 높은 정보 밀도를 안정적으로 담아내는 UI 설계가 필요했습니다.\n\n이를 해결하기 위해 조회와 캐싱이 필요한 서버 상태는 TanStack Query로 관리하고, 라운드 진행과 베팅 흐름처럼 실시간성이 높은 상태는 Jotai atom과 WebSocket 이벤트 처리로 분리해 설계했습니다. 또한 백엔드 API 변경에 빠르게 대응하기 위해 OpenAPI 기반 연동 구조를 도입했고, viewport 중심 반응형의 한계를 보완하기 위해 컨테이너 쿼리를 적용해 각 UI 블록이 실제 렌더링 영역을 기준으로 재배치되도록 구성했습니다.\n\n그 결과 테이블별 라운드 상태, 베팅 가능 여부, 베팅 통계, 승패 결과, 정산 금액 등을 실시간으로 일관되게 반영할 수 있는 구조를 구축했으며, 12개 언어 지원과 다양한 게임 모드 확장에도 화면 복잡도를 안정적으로 통제할 수 있었습니다. 아울러 자동화 가능한 영역은 Vitest, Playwright로 80건의 테스트를 구축하고, 라이브 검증이 필요한 AI 추천, 오토벳, 세션 재진입 시나리오는 agent-browser 기반 QA runbook으로 분리 운영해 품질 기준선과 운영 검증 체계를 함께 마련했습니다. 또한 Codex 기반 AI 협업을 기능 명세 작성, 테스트 구조 설계, QA 문서화 과정에 연결해 구현부터 검증까지 이어지는 개발 프로세스를 운영했습니다.",
    tag: "Next.js 15, React 19, WebSocket, TanStack Query, Jotai, Nest.js, i18n, Container Query, Codex",
    thumbImg: "/images/work5.jpg",
    images: [
      "/images/@temp5-3.gif",
      "/images/@temp5-1.jpg",
      "/images/@temp5-2.jpg",
    ],
    desc: [
      "플랫폼 진입 시 노출되는 Lightning Baccarat 로딩 화면입니다. 게임 입장 전 브랜드 무드와 몰입감을 전달할 수 있도록 모션이 포함된 진입 화면으로 구성했습니다.",
      "실시간 테이블 영상, 테이블 정보, 베팅 보드, 통계 UI가 한 화면에서 함께 동작하도록 구성한 화면입니다. WebSocket으로 수신한 게임 상태와 유저 행동을 즉시 반영했고, TanStack Query와 Jotai를 조합해 서버 데이터와 클라이언트 상태를 분리해 관리했습니다.",
      "여러 테이블의 카드 오픈, 베팅 가능 시간, 결과 반영 상태를 비교할 수 있는 운영 화면입니다. 컨테이너 쿼리 기반 반응형 스타일을 적용해 베팅 보드와 출목표 같은 복합 UI가 해상도에 따라 자연스럽게 재배치되도록 설계했습니다.",
    ],
  },
  {
    _id: 3,
    title: "바이슈코",
    url: "https://www.bysuco.com/",
    mainDesc:
      "향수·뷰티 직구 플랫폼의 공개 웹, 모바일 웹, 관리자 웹 구축과 운영을 담당했습니다.\n단일 git 루트에서 app, web, api를 함께 관리하는 구조였고, web 내부에 공개/모바일 웹과 관리자 웹이 공존하여 하나의 코드베이스로 운영해야 했습니다.\n화면 수가 많고 운영 이슈 대응 속도가 중요했기 때문에 React 18·TypeScript 기반으로 프런트엔드를 재구성하고, 공통 UI와 페이지를 처음부터 설계해 서비스 리뉴얼과 운영 효율을 동시에 확보했습니다.\n\n이 과정에서 상품 상세, 브랜드, 리뷰, 기획전처럼 SEO 유입과 초기 렌더링 품질이 중요한 화면은 검색 노출과 첫 화면 응답 속도가 핵심이었고, 반대로 장바구니·주문·마이페이지·관리자 화면은 빠른 상호작용과 상태 일관성이 중요했습니다.\n\n이를 해결하기 위해 Vite + Express 기반 커스텀 SSR 구조를 도입하고 서버에서는 fetch로 초기 데이터를 선조 회해 SEO와 초기 렌더링을 대응했으며, 클라이언트에서는 SWR로 캐싱과 재검증을 분리해 CSR 전환 이후의 응답성과 데이터 일관성을 높였습니다.\n또한 공개 웹과 관리자 웹이 같은 코드베이스에서 함께 진화하는 구조였기 때문에 복잡한 전역 상태를 무겁게 끌고 가지 않으면서도 화면 간 공유가 쉬운 Jotai를 채택했고, API 응답과 파라미터 구조가 지속적으로 확장되는 환경에서는 타입 안정성과 런타임 검증을 함께 확보하기 위해 Zod 기반 스키마를 적용해 144개 서비스 모듈 규모의 연동 구조를 정비했습니다.\n\n그 결과 약 3개월 내 구축과 1개월 QA를 거쳐 서비스를 오픈했고, 이미지 리사이즈·WebP 변환·lazy loading·CSS preload 적용으로 Core Web Vitals를 45점에서 85점까지 개선했으며, 서비스 리뉴얼 이후 매출 30% 상승으로 이어졌습니다.\n\n오픈 이후에도 토스페이먼츠 결제 흐름, 쿠폰 복수 적용과 최대 할인 처리, 네이버 쇼핑 유입 추적, GA4·GTM·네이버 WCS·Meta·Criteo·TikTok 기반 유입 및 전환 이벤트, 관리자 rowspan 테이블 컴포넌트 개선, 로그인·마이페이지·주문 취소 등 운영 과정에서 반복적으로 발생한 핵심 이슈를 지속 개선했습니다.",
    tag: "react,SCSS,TypeSCript,jotai,zod,swr,useform",
    thumbImg: "/images/work4.jpg",
    images: [
      "/images/@temp4-1.jpg",
      "/images/@temp4-2.jpg",
      "/images/@temp4-3.jpg",
      "/images/@temp4-4.jpg",
    ],
    desc: [],
  },
  {
    _id: 0,
    title: "SAMSUNG Galaxy Fold3\n글로벌페이지 제작",
    url: "https://www.samsung.com/global/galaxy/galaxy-z-fold3-5g/",
    mainDesc:
      "40여 개국 다국어 동시 오픈이 필요한 삼성 글로벌 페이지 제작 프로젝트입니다.\n반응형 웹 구현, WEBGL 기반 스크롤 인터랙션, SEO·접근성·크로스브라우징 대응까지 포함해 구축했습니다.\n국가별 레이아웃 차이를 고려해 모델 위치와 크기를 유연하게 제어할 수 있도록 구조를 설계했습니다.",
    tag: "WEBGL,SCSS,HTML,CSS,JS,jQuery",
    thumbImg: "/images/work2.gif",
    images: [
      "/images/@temp2-1.gif",
      "/images/@temp2-2.gif",
      "/images/@temp2-3.gif",
    ],
    desc: [
      "모델링 모션의 동선은 각 article마다 직접 attribute로 핸드폰 모델링의 position,rotation,scale 등 값을 지정할 수 있게 작업하여 dom에서 수정할수 있게 작업하였습니다.\njs나 data가 아닌 dom에서 제어한 이유는 다국어 사이트기 때문에 국가마다 dom의 갯수나 위치가 달라질수도 있기 때문에 attribute 제어 방식으로 작업하였습니다.",
    ],
  },
  {
    _id: 1,
    title: "카카오 임팩트 리뉴얼 프로젝트",
    url: "https://gongahreum.github.io/",
    mainDesc:
      "카카오 임팩트 리뉴얼 프로젝트에서 메인 페이지 신규 개발을 담당했습니다.\nP5.js(WebGL), Lottie, SASS 기반으로 스크롤 인터랙션과 모션을 구현했고, 메인 페이지 리딩과 커뮤니케이션도 함께 맡았습니다.\n사용자 경험을 반영해 스크롤 감도와 인터랙션 흐름을 조정했으며, 프로젝트는 최종 오픈되지는 않았습니다.",
    tag: "WEBGL,SCSS,P5.js,Lottie,HTML,CSS,JS",
    thumbImg: "/images/work1.gif",
    images: ["/images/@temp1-1.gif", "/images/@temp1-2.gif"],
    desc: [
      "해당 부분은 너무 기하학적인 도형이라 lottie를 이용해서 영상을 json으로 추출 하여 스크롤과 마우스에 따라 애니메이션 프레임이 가능하도록 제작하였습니다.",
      "p5.js을 사용하여 WEBGL을 구현하였고 각 섹션마다 이어지도록 모션 시나리오는 gsap의 timeline으로 작업하였습니다.",
    ],
  },
  {
    _id: 2,
    title: "Pubgyu Portfolio",
    url: "",
    mainDesc:
      "React 기반으로 제작한 개인 포트폴리오입니다.\nThree.js, GSAP, Lenis를 활용해 스크롤 중심 인터랙션과 픽셀 스타일 연출을 구현했고, SPA 환경에서 모션 흐름과 상태 제어를 함께 설계했습니다.\n개인 작업이지만 인터랙션 구성, 로딩 경험, 페이지 전환 흐름까지 직접 설계하며 구현한 프로젝트입니다.",
    tag: "react(CRA),SCSS,WEBGL,JS",
    thumbImg: "/images/work3.gif",
    images: [
      "/images/@temp3-1.jpg",
      "/images/@temp3-2.gif",
      "/images/@temp3-3.gif",
      "/images/@temp3-4.gif",
    ],
    desc: [
      "컨셉은 Evoland라는 점점 그래픽이 좋아지는 게임을 착안하여 스크롤 하면서 점점 해상도가 좋아지는 컨셉으로 제작했습니다.",
      "기존 오브젝트의 후처리로 RenderPixelatedPass을 사용하여 픽셀화 하였습니다.",
      "각 섹션은 sticky로 이어져 있으며 모션은 각 섹션마다 timeline으로 되어있습니다.",
    ],
  },
];

export default DataBase;
