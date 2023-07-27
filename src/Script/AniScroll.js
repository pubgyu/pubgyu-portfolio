import gsap from 'gsap'
import { isMobile } from 'react-device-detect'
import { camera, scene, renderer, mesh, mesh2, box } from '../Script/ThreeInit.js';

export default function Aniscroll(_target) {
    let dom = _target.current;
    
    // shorts
    if(dom.id == 'shorts') {
        // 3000
        let shortsContent = _target.current;
        let item = dom.querySelectorAll('.item');
        let itemArray = [...item];
        let itemScrollHeight = (!isMobile) ? 1500 : 1500;
        let _deg = 360/10;
        let _translateZ = 600;

        shortsContent.style.height = (item.length*itemScrollHeight)+'px';
        
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                start: "top top",
                end: "bottom 50%",
                scrub: 1
            }
        })
        // .to(box.position, {duration: 0.5, x: 0, z: 0, y: 0}, 'reset')
        // .to(box.rotation, {duration: 0.5, y: 0, z: 0}, 'reset')
        itemArray.map((_this,i)=> {
            _this.style.transform = `rotateY(${i*_deg}deg) translateZ(${_translateZ}px)`;
            _this.style.zIndex = i;
            if (i != itemArray.length-1) {
                t1.to(dom.querySelector('.itemList'), {duration: 0.5, rotationY: `-=${_deg}deg`}, `st${i}`)
            }
        })
    }

    // three dom
    if(dom.id == 'hello') {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                start: "top top",
                end: "bottom 50%",
                scrub: 1
            }
        })
        // .to(camera.rotation, {duration: 0.5, z: 1}, 'st1')
        // .to(camera.position, {duration: 0.5, z: 2}, 'st1')
        .to(dom.querySelector('.sectionTitle'), {duration: 0.5, x: window.innerWidth/2}, 'st1')
        // .to(box.position, {duration: 0.5, x: -0.1, z: 0.8, y: -0.25}, 'st1')
        // .to(box.rotation, {duration: 0.5, y: -6, z: -0.1}, 'st1')

        // .to(mesh.rotation, {duration: 0.5, x: 1,y: 2}, 'st1')
        // .to(mesh.position, {duration: 0.5, x: -0.5, y:-0.5}, 'st1')
        // .to(mesh2.position, {duration: 0.5, x: 0.5, y:0.5}, 'st1')
        // .to(mesh2.rotation, {duration: 0.5, x: -1,y: -2}, 'st1')
    }

    // introduce
    if(dom.id == 'introduce') {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                start: "top top",
                end: "bottom 50%",
                scrub: 1
            }
        })
        .to(dom.querySelector('.sectionTitle'), {duration: 0.5, x: 100}, 'st1')
    }

    if(dom.id == 'threeDom') {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                start: "top top",
                end: "bottom 50%",
                scrub: 1
            }
        })
        // section1
        .to(box.position, {duration: 0.5, x: -0.1, z: 0.8, y: -0.25}, 'st1')
        .to(box.rotation, {duration: 0.5, y: -6, z: -0.1}, 'st1')
        // section2
        .to(box.position, {duration: 0.5, x: 0, z: -0.5, y: 0}, 'st2')
        .to(box.rotation, {duration: 0.5, y: 0, z: 0}, 'st2')
    }
}
