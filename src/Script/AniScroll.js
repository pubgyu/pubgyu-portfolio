import gsap from 'gsap'
import { isMobile } from 'react-device-detect'
import { camera, scene, mesh, box } from '@/Script/ThreeInit.js';

export default function Aniscroll(_target) {
    let dom = _target;

    // // hello
    if(dom.id == 'hello') {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                start: "top top",
                end: "bottom 0",
                scrub: 1,
                toggleClass : 'visible'
            }
        })

        // .to(camera.position, {duration: 0.5, z: 1}, 'st0')

        // .to(mesh.rotation, {duration: 0.5, x: 2, y: 3, z: -2}, 'st0')
        // .to(mesh.position, {duration: 0.5, y:2.2,z: -5}, 'st0')
        // .to(box.position, {duration: 0.5, z: 0}, 'st0')

        .to(box.position, {duration: 0.4, x: -0.05}, 'st1')
        .to(box.rotation, {duration: 0.4, y: -6, z: 0}, 'st1')

        .to(dom.querySelector('.title1 strong'), {duration: 0.5, x:'100%'}, 'st1')
        .to(dom.querySelector('.title2 strong'), {duration: 0.5, x:0}, 'st1')

        .to(box.position, {duration: 0.5, x: -0.1, z: 0.8, y: -0.25}, 'st2')
        .to(box.rotation, {duration: 0.5, y: -12, z: -0.1}, 'st2')

        .to(dom, {duration: 0.5}, 'end')
    }

    // // introduce
    if(dom.id == 'introduce') {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                start: "top top",
                end: "bottom 0",
                scrub: 1,
                toggleClass : 'visible'
            }
        })
        .to(dom.querySelector('.sectionTitle'), {duration: 0.2, opacity: 1}, 'st1')
        .to(dom.querySelector('.sectionTitle'), {duration: 0.5, y: '-50%'}, 'st1')
        .to(dom.querySelector('.sectionTitle'), {duration: 0.2, opacity: 0}, 'st2')
        .to(dom.querySelector('.sectionTitle'), {duration: 0.5, y: '-100%'}, 'st2')

        // .to(box.position, {duration: 0.5, x: -0.1, z: 0.8, y: -0.25}, 'st2')
        // .to(box.rotation, {duration: 0.5, y: -12, z: -0.1}, 'st2')
        
        .to(box.position, {duration: 0.5, x: 0, z: -0.7, y: -0.5}, 'st2')
        .to(box.rotation, {duration: 0.5, y: 0, z: 0}, 'st2')
    }

    // // shorts
    if(dom.id == 'shorts') {
        // 3000
        let shortsContent = _target;
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
                end: "bottom 0",
                scrub: 1,
                toggleClass : 'visible'
            }
        })
        // .to(box.position, {duration: 0.5, x: 0, z: -0.5, y: 0}, 'st0')
        // .to(box.rotation, {duration: 0.5, y: 3, z: 0}, 'st0')
        .to(dom.querySelector('.shortsWrap'), {duration: 0.2, opacity: 1}, 'st0')
        .to(dom.querySelector('.shortsWrap'), {duration: 0.5, y: 0}, 'st0')
        itemArray.map((_this,i)=> {
            _this.style.transform = `rotateY(${i*_deg}deg) translateZ(${_translateZ}px)`;
            _this.style.zIndex = i;
            if (i != itemArray.length-1) {
                t1.to(dom.querySelector('.itemList'), {duration: 0.5, rotationY: `-=${_deg}deg`}, `st${i+1}`)
            }
        })

        t1.to(dom.querySelector('.shortsWrap'), {duration: 0.2, opacity: 0}, 'end')
        .to(dom.querySelector('.shortsWrap'), {duration: 0.5, y: '-50%'}, 'end')
    }

    // three js
    // if(dom.id == 'threeDom') {
    //     let t1 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: dom,
    //             start: "top top",
    //             end: "bottom 0",
    //             scrub: 1,
    //         }
    //     })
    // }
}
