import { useRef, useEffect } from 'react'
import '../Script/Main.js';
import Scroll from '../Script/Scroll.js';
import Aniscroll from '../Script/AniScroll.js';
import ShortsVideo from '../components/ShortsVideo.js';
Scroll();

function Main() {
    // ref
    const sectionRef = useRef(null);
    const shortsRef = useRef(null);
    
    useEffect(() => {
        Aniscroll(sectionRef);
        Aniscroll(shortsRef);
    },[]);

    return (
        <>
            <h1 className="hideTxt">PORTFOLIO by pubgyu</h1>

            <section className="contents">
                <h2 className="hideTxt">Chapter 1</h2>
                <article className="con">
                    <strong className="sectionTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong>
                </article>
            </section>

            <section id="test" className="contents" ref={sectionRef}>
                <h2 className="hideTxt">Chapter 2</h2>
                <article className="con">
                    <strong className="sectionTitle tt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong>
                </article>
            </section>

            <section id="shorts" className="contents" ref={shortsRef}>
                <h2 className="hideTxt">Chapter 3</h2>
                <article className="con center">
                    <ShortsVideo />
                </article>
            </section>
        </>
	);
}

export default Main;