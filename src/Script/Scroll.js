import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
let _lenis;
const Scroll = () => {
    console.log('scroll init!!!!!!!');
    // lenis scroll setting
    _lenis = new Lenis({ lerp: 0.1, })
    _lenis.on('scroll', (e) => {
        ScrollTrigger.update();
        handleProgressBar();
    });
    gsap.ticker.add((time) => { _lenis.raf(time * 1000); });
    // _lenis.stop();

    const handleProgressBar = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let _scrollNum = Number(`${(totalScroll / windowHeight) * 100}`);
        // console.log(_scrollNum);
    };
}

export {Scroll, _lenis}