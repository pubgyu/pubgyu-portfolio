import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
let _lenis;
const Scroll = () => {
    // lenis scroll setting
    _lenis = new Lenis({ lerp: 0.1, })
    _lenis.on('scroll', (e) => {
        ScrollTrigger.update();
    });
    gsap.ticker.add((time) => { _lenis.raf(time * 1000); });
}

export {Scroll, _lenis}