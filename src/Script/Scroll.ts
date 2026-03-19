import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let _lenis: Lenis | null = null;

const requestTime = (time: number) => {
  _lenis?.raf(time * 1000);
};

const Scroll = () => {
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  if (_lenis) {
    _lenis.destroy();
    gsap.ticker.remove(requestTime);
  }

  _lenis = new Lenis({
    lerp: 0.1,
    wrapper: root,
    content: root,
    smoothTouch: true
  } as any);

  _lenis.on("scroll", () => {
    ScrollTrigger.update();
  });

  gsap.ticker.add(requestTime);
};

export { Scroll, _lenis };
