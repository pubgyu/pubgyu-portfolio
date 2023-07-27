import { useRef, useEffect } from 'react'
import '../Script/Main.ts';
import Scroll from '../Script/Scroll.js';
import Aniscroll from '../Script/AniScroll.js';
import { ThreeInit } from '../Script/ThreeInit.js';
import ShortsVideo from '../components/ShortsVideo.js';

Scroll();

function Main() {
    // ref
    const sectionRef1 = useRef();
    const sectionRef2 = useRef();
    const shortsRef = useRef();
    const threeCanvasRef = useRef();
    const threeDomRef = useRef();
    
    useEffect(() => {
        ThreeInit(threeCanvasRef);
        Aniscroll(sectionRef1);
        Aniscroll(sectionRef2);
        Aniscroll(shortsRef);
        Aniscroll(threeDomRef);
    },[]);

    return (
        <div id="threeDom" ref={threeDomRef}>
            <h1 className="hideTxt">PORTFOLIO by pubgyu</h1>

            <section id="hello" className="contents" ref={sectionRef1}>
                <h2 className="hideTxt">Chapter 1</h2>
                <article className="con">
                    <strong className="sectionTitle">
                        <i className="pointTxt">재미있는{"\n"}</i>
                        사이트를{"\n"}
                        만듭니다
                    </strong>
                </article>
            </section>

            <section id="introduce" className="contents" ref={sectionRef2}>
                <h2 className="hideTxt">Chapter 2</h2>
                <article className="con">
                    <strong className="sectionTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong>
                </article>
            </section>

            <section id="shorts" className="contents" ref={shortsRef}>
                <h2 className="hideTxt">Chapter 3</h2>
                <article className="con center">
                    <ShortsVideo />
                </article>
            </section>
            
            <section className="contents">
                <h2 className="hideTxt">Chapter 4</h2>
                <article className="con">
                    {/* <strong className="sectionTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong> */}
                </article>
            </section>

            <div className="threeWrap" ref={threeCanvasRef}></div>
        </div>
	);
}

export default Main;