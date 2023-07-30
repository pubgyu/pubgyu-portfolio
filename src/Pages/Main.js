import { useRef, useEffect } from 'react'
import '@/Script/Main.ts';
import Scroll from '@/Script/Scroll.js';
import Aniscroll from '@/Script/AniScroll.js';
import { ThreeInit } from '@/Script/ThreeInit.js';
import ShortsVideo from '@/Components/ShortsVideo.js';

Scroll();

function Main() {
    // ref
    const threeCanvasRef = useRef();
    const threeDomRef = useRef();
    
    useEffect(() => {
        ThreeInit(threeCanvasRef);
        
        const refSection = threeDomRef.current.children;
        for(let i=0;i<refSection.length;i++) {
            if (refSection[i].tagName == 'SECTION')
            Aniscroll(refSection[i]);
        }
        // Aniscroll(threeDomRef);

    },[]);

    return (
        <div id="threeDom" ref={threeDomRef}>
            <h1 className="hideTxt">PORTFOLIO by pubgyu</h1>

            <section id="opening" className="contents visible">
                <article className="con">
                    <h2 className="menuTitle">Hi !</h2>
                    <strong className="hideTxt">Hello!</strong>
                    <strong className="openTxt" aria-hidden="true"></strong>
                    <span className="scrollInfo">
                        Scroll Down !
                        <i className="arrow">arrow</i>
                    </span>
                </article>
            </section>

            <section id="hello" className="contents">
                <article className="con">
                    <h2 className="menuTitle">hello</h2>

                    <div className="sectionTitle title1">
                        <strong>
                            {/* <i className="pointTxt">재미있는{"\n"}</i>
                            <i>사이트를{"\n"}</i>
                            <i>만듭니다</i> */}
                            <i className="pointTxt">I'm creating{"\n"}</i>
                            <i>a fun and{"\n"}</i>
                            <i>exciting site.</i>
                        </strong>
                    </div>
                    <div className="sectionTitle title2">
                        <strong>
                            {/* <i>반갑습니다{"\n"}</i>
                            <i className="pointTxt">박규태{"\n"}</i>
                            <i>입니다</i> */}
                            <i>Nice to{"\n"}</i>
                            <i>meet you{"\n"}</i>
                            <i className="pointTxt">It's pubgyu{"\n"}</i>
                        </strong>
                    </div>
                </article>
            </section>

            <section id="introduce" className="contents">
                <article className="con">
                    <h2 className="menuTitle">introduce</h2>
                    
                    <div className="aboutWrap">
                        <span className="imgWrap">
                            <img src="/images/pubgyu.jpg" alt="pubgyu" />
                        </span>
                        <strong>About{"\n"}PubGyu</strong>
                        <p className="txt">
                            {/* 안녕하세요. 웹 퍼블리셔로 일하고 있는 박규태입니다.{"\n"}
                            다양한 기술을 이용하여 모션을 만드는 것을 좋아합니다.{"\n"}
                            (WEBGL, d3.js, p5.js 등){"\n"}
                            프론트 관련해서 관심 있게 공부하고 배우고 있습니다.{"\n"}
                            (react, next.js 등){"\n"}
                            또한 다양한 것을 배우고 적용하고 싶습니다.{"\n"}
                            {"\n"}
                            프로젝트의 목적을 우선적으로 고려하지만{"\n"}
                            다양한 사람들의 협업과 커뮤니케이션 그리고{"\n"}
                            더욱 나은 코드를 위해 계속적으로 나아가고 싶습니다. */}

                            논리적 사고로 구조를 세우고{"\n"}
                            사용자의 시선을 매료할 모션을{"\n"}
                            브라우저에 표현하는 박규태입니다.{"\n"}
                            {"\n"}
                            다양한 모션을 하는 것을 좋아하지만{"\n"}
                            프론트 혹은 다양한 기술에 대해{"\n"}
                            관심도 많고 공부하고 있습니다.{"\n"}
                            아직 우물 안 개구리라고 생각을 하며{"\n"}
                            이 생각을 깨뜨리기 위해 계속 배워나가는 중입니다.{"\n"}
                        </p>
                    </div>
                </article>
            </section>

            <section id="shorts" className="contents">
                <article className="con center">
                    <h2 className="menuTitle">work</h2>

                    <ShortsVideo />
                </article>
            </section>
            
            <section className="contents">
                <h2 className="hideTxt">WORK</h2>
                <article className="con">
                    {/* <strong className="sectionTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong> */}
                </article>
            </section>

            <div className="threeWrap" ref={threeCanvasRef}></div>
        </div>
	);
}

export default Main;