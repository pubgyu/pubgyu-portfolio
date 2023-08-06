const DataBase = [
    {
        _id : 0,
        title : '카카오 임팩트 리뉴얼 프로젝트',
        url : 'http://pubgyu.dothome.co.kr/',
        mainDesc : '해당 프로젝트는 기존 페이지 리뉴얼 작업이지만 메인 페이지만 신규로 작업되었으며 메인페이지를 맡아서 작업했습니다.\n 메인 페이지만을 위한 커뮤니케이션이 구축되어 있었고 제가 리드하고 서브 인원 1명 포함 이렇게 작업하였습니다. \n스크롤에 따라 움직이는 도형 애니메이션은 p5.js 이용하여 WEBGL작업을 하였으며 작업 난이도가 높은 기하학적인 도형은 lottie 를 사용하여 기하학적인 도형 영상을 json으로 추출하여 구현하였습니다.\n스크롤에 대한 감도나 스크롤의 높이는 고객사의 체험조사를 통해 사용자의 사용자 편의에 따라 조절하였습니다.\n크로스브라우징은 ie10까지 맞추어졌으며 이번 프로젝트는 최신 css기술이 들어가서 지원안하는 브라우져 마다 다른 static한 방식으로 2벌씩 제작 되었습니다.\n \n해당 프로젝트는 고객사에 사정에 따라 결국 오픈하지 못하였습니다.',
        tag : 'WEBGL,SCSS,P5.js,Lottie,HTML,CSS,JS',
        thumbImg : '/images/work1.gif',
        images : ['/images/@temp1-1.gif','/images/@temp1-2.gif'],
        desc : [
            '해당 부분은 너무 기하학적인 도형이라 lottie를 이용해서 영상을 json으로 추출 하여 스크롤과 마우스에 따라 애니메이션 프레임이 가능하도록 제작하였습니다.', 
            'p5.js을 사용하여 WEBGL을 구현하였고 각 섹션마다 이어지도록 모션 시나리오는 gsap의 timeline으로 작업하였습니다.'
        ],
    },
    {
        _id : 1,
        title : 'SAMSUNG Galaxy Fold3\n글로벌페이지 제작',
        url : 'https://www.samsung.com/global/galaxy/galaxy-z-fold3-5g/',
        mainDesc : '- 언팩 행사 40여개국 다국어 동시 오픈(rtl국가 포함)\n - HTML 시멘틱 마크업,JS,SASS,WEBGL 작업\n - 반응형 웹 제작\n - jquery 모션 작업 (스크롤 기반 비주얼 모션)\n - 웹 표준, 접근성 , seo, meta, 구글 애널리틱스 작업\n - WEBGL 모션 작업 (스크롤 기반 WEBGL 모션 작업)\n - ie 11 크로스 브라우징\n - 프로젝트 리더로 작업 및 커뮤니케이션\n\n해당 프로젝트는 WEBGL을 사용하여 컨텐츠를 보여주고자 했습니다.\n THREE.js 모델링 파일은 OBJ 파일 형식을 사용하여 WEBGL을 보여줄 피쳐에 대해 영역의 크기 위치를 스타일로 잡아주면 스크롤에 따라 카메라와 모델링이 해당 영역으로 보여주고 이동할 수 있도록 처리하였습니다.\n 크기와 위치를 스타일로 잡아주니 반응형 웹을 할때 JS로 일일히 크기와 위치를 지정하지 않아도 손쉽게 스타일로도 지정할수 있도록 모듈화 진행을 하였습니다.\n WEBGL을 사용하다 보니 리소스 최적화, 로드에 대해 신경을 많이 썼습니다.\n 해당 페이지는 혼자 작업하였습니다.',
        tag : 'WEBGL,SCSS,HTML,CSS,JS,jQuery',
        thumbImg : '/images/work2.gif',
        images : ['/images/@temp2-1.gif','/images/@temp2-2.gif','/images/@temp2-3.gif'],
        desc : ['모델링 모션의 동선은 각 article마다 직접 attribute로 핸드폰 모델링의 position,rotation,scale 등 값을 지정할 수 있게 작업하여 dom에서 수정할수 있게 작업하였습니다.\njs나 data가 아닌 dom에서 제어한 이유는 다국어 사이트기 때문에 국가마다 dom의 갯수나 위치가 달라질수도 있기 때문에 attribute 제어 방식으로 작업하였습니다.'],
    },
    {
        _id : 2,
        title : 'Pubgyu Portfolio',
        url : '',
        mainDesc : '포트폴리오 입니다.\n CRA로 제작 되었으며 반응형 웹 입니다. lenis scroll과 gsap 의 timeline을 이용 하여 three.js로 모션을 구현하였습니다.\n컨셉은 고전게임 컨셉화 하였습니다.\n style은 컴포넌트 수도 많지 않고 작업할때 화면 분할이 더 가독성이 좋아 styled-components 대신 scss로 작업하였습니다.\n기존에 SSR 형식으로만 작업하여 신경을 크게 쓰지 못하였는데 SPA 상황일때는 페이지간 마운트,언마운트로 인한 모션의 init과 reset처리의 대한 작업에 대해 신경을 많이 썼습니다.\n 특히 움직임이 많은 화면이다 보니 기존엔 dom을 직접 제어하였지만 이번엔 ref으로 접근하여 제어하였습니다.',
        tag : 'react(CRA),SCSS,WEBGL,JS',
        thumbImg : '/images/work3.gif',
        images : ['/images/@temp3-1.jpg','/images/@temp3-2.gif','/images/@temp3-3.gif','/images/@temp3-4.gif'],
        desc : [
            '컨셉은 Evoland라는 점점 그래픽이 좋아지는 게임을 착안하여 스크롤 하면서 점점 해상도가 좋아지는 컨셉으로 제작했습니다.',
            '기존 오브젝트의 후처리로 RenderPixelatedPass을 사용하여 픽셀화 하였습니다.',
            '각 섹션은 sticky로 이어져 있으며 모션은 각 섹션마다 timeline으로 되어있습니다.'
        ],
    },
]

export default DataBase;