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

            <section id="hello" className="contents">
                <article className="con">
                    <h2 className="hideTxt">hello</h2>

                    <div className="sectionTitle title1">
                        <strong>
                            <i className="pointTxt">재미있는{"\n"}</i>
                            <i>사이트를{"\n"}</i>
                            <i>만듭니다</i>
                        </strong>
                    </div>
                    <div className="sectionTitle title2">
                        <strong>
                            <i>반갑습니다{"\n"}</i>
                            <i className="pointTxt">박규태{"\n"}</i>
                            <i>입니다</i>
                        </strong>
                    </div>
                </article>
            </section>

            <section id="introduce" className="contents">
                <article className="con">
                    <h2 className="menuTitle">introduce</h2>
                    <strong className="sectionTitle">
                        안녕하세요. 웹 퍼블리셔로 일하고 있는 박규태 입니다.{"\n"}
                        다양한 기술을 이용하여 모션을 만드는 것을 좋아합니다.{"\n"}
                        또한 다양한 것을 배우고 적용하고 싶습니다.
                    </strong>
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