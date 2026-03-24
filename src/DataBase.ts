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
      "개인 프로젝트로 기획, 정보 구조 설계, UI 디자인 방향 정리, 프론트엔드 구현, 배포까지 전 과정을 Codex AI를 이용하여 진행한 온라인 이력서 작업 서비스입니다.\nNext.js 16 App Router, React 19, TypeScript, SCSS, Jotai, Supabase 기반으로 Google 로그인, 사용자별 이력서 저장, 다중 버전 관리, PDF 다운로드, import/export, 템플릿 전환이 가능한 작업 공간을 구축했습니다.\n편집 패널과 문서 미리보기를 분리한 워크스페이스 구조 위에 local draft와 auto save 정책을 함께 설계해 작성 흐름이 끊기지 않도록 했고, 모바일에서는 편집/미리보기 전환 UX와 하단 액션 중심 구조로 사용성을 보강했습니다.\n또한 AI agent를 활용해 문서화, 구현 반복 작업, QA 관점 점검을 병행하며 서비스 완성도를 높였고, 실제 배포까지 연결해 바로 사용할 수 있는 상태로 운영했습니다.",
    tag: "Next.js 16, React 19, TypeScript, SCSS, Jotai, dnd-kit, Supabase, React PDF Renderer, Codex AI, Vercel",
    thumbImg: "/images/work6.jpg",
    images: ["/images/@temp6-1.jpg", "/images/@temp6-2.jpg", "/images/@temp6-3.jpg"],
    desc: [
      "로그인 화면입니다. 저장, 버전 관리, PDF 정리까지 이어지는 서비스 흐름을 첫 진입에서 바로 이해할 수 있도록 브랜드 영역과 Google 로그인 패널을 분리해 구성했습니다.",
      "문서 목록 워크스페이스 화면입니다. 좌측 row 기반 목록에서 문서를 선택하고, 우측에서는 선택한 이력서를 PDF viewer 기준으로 즉시 미리볼 수 있도록 구성했습니다.",
      "이력서 편집 화면입니다. 좌측 아코디언 편집 패널과 우측 문서 미리보기를 분리하고, 템플릿 전환, 세분화된 섹션 표시 제어, dnd-kit 기반 순서 변경, 저장/PDF 액션을 한 흐름 안에서 처리하도록 설계했습니다."
    ]
  },
  {
    _id: 4,
    title: "바카라 웹 플랫폼 운영\n(스카이 이글스)",
    url: "",
    mainDesc:
      "온라인 카지노 바카라 게임의 웹 플랫폼 제작 및 운영을 담당했습니다.\n정킷(Junket) 단위 테이블 정보를 WebSocket으로 수신해 게임 승패 결과, 현재 상태, 유저 행동 등을 실시간으로 UI에 반영하는 구조를 설계하고 운영했습니다.\n베팅 보드와 출목표 등 복합적인 UI 요소를 한 화면 안에서 비율감 있게 보여줄 수 있도록 컨테이너 쿼리 기반 반응형 스타일을 적용했고, Next.js 15와 React 19 기반 환경에서 Nest.js API, TanStack Query, Jotai를 활용해 데이터 흐름을 구성했습니다.\nCodex를 활용한 AI 에이전트 기반 업무 방식도 실무에 적용해 프론트엔드·백엔드·QA 엔지니어 역할의 페르소나를 나눠 기능 설계부터 구현, 라이브 테스트까지 단계적으로 진행했습니다.",
    tag: "Next.js 15, React 19, WebSocket, TanStack Query, Jotai, Nest.js, i18n, Container Query, Codex",
    thumbImg: "/images/work5.jpg",
    images: ["/images/@temp5-3.gif", "/images/@temp5-1.jpg", "/images/@temp5-2.jpg"],
    desc: [
      "플랫폼 진입 시 노출되는 Lightning Baccarat 로딩 화면입니다. 게임 입장 전 브랜드 무드와 몰입감을 전달할 수 있도록 모션이 포함된 진입 화면으로 구성했습니다.",
      "실시간 테이블 영상, 테이블 정보, 베팅 보드, 통계 UI가 한 화면에서 함께 동작하도록 구성한 화면입니다. WebSocket으로 수신한 게임 상태와 유저 행동을 즉시 반영했고, TanStack Query와 Jotai를 조합해 서버 데이터와 클라이언트 상태를 분리해 관리했습니다.",
      "여러 테이블의 카드 오픈, 베팅 가능 시간, 결과 반영 상태를 비교할 수 있는 운영 화면입니다. 컨테이너 쿼리 기반 반응형 스타일을 적용해 베팅 보드와 출목표 같은 복합 UI가 해상도에 따라 자연스럽게 재배치되도록 설계했습니다."
    ]
  },
  {
    _id: 3,
    title: "바이슈코",
    url: "https://www.bysuco.com/",
    mainDesc:
      "향수·뷰티 직구 플랫폼 바이슈코의 프론트 구축과 운영을 담당했습니다.\nReact 18, TypeScript 기반으로 반응형 웹과 SSR 구조를 설계했고, 하이드레이션 이슈 해결과 상태 관리 구조 개선을 함께 진행했습니다.\n이미지 최적화, Dynamic Import, 리소스 Preload 적용으로 Core Web Vitals를 45점에서 85점까지 개선했습니다.",
    tag: "react,SCSS,TypeSCript,jotai,zod,swr,useform",
    thumbImg: "/images/work4.jpg",
    images: [
      "/images/@temp4-1.jpg",
      "/images/@temp4-2.jpg",
      "/images/@temp4-3.jpg",
      "/images/@temp4-4.jpg"
    ],
    desc: []
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
      "/images/@temp2-3.gif"
    ],
    desc: [
      "모델링 모션의 동선은 각 article마다 직접 attribute로 핸드폰 모델링의 position,rotation,scale 등 값을 지정할 수 있게 작업하여 dom에서 수정할수 있게 작업하였습니다.\njs나 data가 아닌 dom에서 제어한 이유는 다국어 사이트기 때문에 국가마다 dom의 갯수나 위치가 달라질수도 있기 때문에 attribute 제어 방식으로 작업하였습니다."
    ]
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
      "p5.js을 사용하여 WEBGL을 구현하였고 각 섹션마다 이어지도록 모션 시나리오는 gsap의 timeline으로 작업하였습니다."
    ]
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
      "/images/@temp3-4.gif"
    ],
    desc: [
      "컨셉은 Evoland라는 점점 그래픽이 좋아지는 게임을 착안하여 스크롤 하면서 점점 해상도가 좋아지는 컨셉으로 제작했습니다.",
      "기존 오브젝트의 후처리로 RenderPixelatedPass을 사용하여 픽셀화 하였습니다.",
      "각 섹션은 sticky로 이어져 있으며 모션은 각 섹션마다 timeline으로 되어있습니다."
    ]
  }
];

export default DataBase;
