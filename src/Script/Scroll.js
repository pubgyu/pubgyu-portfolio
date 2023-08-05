import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
let _lenis;
const Scroll = () => {
    let root = document.getElementById('root');
    const requsttime = (time) => {
        _lenis.raf(time * 1000); 
    }
    // lenis scroll setting
    if (_lenis) {
        _lenis.destroy(true);
        gsap.ticker.remove(requsttime);
    }
    _lenis = new Lenis({ 
        lerp: 0.1,
        wrapper : root,
        content : root,
        smoothTouch : true,
    })
    _lenis.on('scroll:pub', (e) => {
        ScrollTrigger.update();
    });
    gsap.ticker.add(requsttime);
}

export {Scroll, _lenis}