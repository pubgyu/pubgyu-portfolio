import gsap from 'gsap'
import { isMobile } from 'react-device-detect'
import { box, helloCircle, modelPixel, pixelSize, ModelInfo } from '@/Script/ThreeInit.js';

export default function Aniscroll(_target) {
    let dom = _target;

    const scrollUpdate = () => {
        modelPixel.setPixelSize( pixelSize.s );
        box.position.set(ModelInfo.p.x,ModelInfo.p.y,ModelInfo.p.z);
        box.rotation.set(ModelInfo.r.x,ModelInfo.r.y,ModelInfo.r.z);
    }
    
    // opening
    if(dom.id === 'opening') {
        let openTxt = dom.querySelector('.hideTxt').innerText.split('');
        dom.querySelector('.openTxt').innerText = '';
        openTxt.map((_this,i)=> {
            let tag = document.createElement("i");
            tag.append(_this);
            dom.querySelector('.openTxt').append(tag);
            tag.style.animationDelay = (i*0.3) + 's';
        });
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                start: "top top",
                end: "bottom 0",
                scrub: 1,
                toggleClass : 'visible',
                onUpdate : scrollUpdate
            }
        })
        .to(ModelInfo.p, {duration: 0.5, x : -0.3}, 'st0')
        .to(ModelInfo.r, {duration: 0.5, y : 0.8}, 'st0')
        
        .to(ModelInfo.p, {duration: 0.5, x : 0.3}, 'st1')

        .to(dom.querySelector('.openTxt'), {duration: 0.5, x : '-100%'}, 'st1')
        .to(dom.querySelector('.scrollInfo'), {duration: 0.5, x : '-100%'}, 'st1')
    }
    // hello
    if(dom.id === 'hello') {
        let txtItem1 = dom.querySelectorAll('.sectionTitle.title1 i');
        let txtItem2 = dom.querySelectorAll('.sectionTitle.title2 i');
        let txtItemArray1 = [...txtItem1];
        let txtItemArray2 = [...txtItem2];
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                start: "top top",
                end: "bottom 0",
                scrub: 1,
                toggleClass : 'visible',
                onUpdate : scrollUpdate
            }
        })
        
        // 오프닝
        // .to(pixelSize, {duration: 0.8, s: 1}, 'st0')
        .to(ModelInfo.p, {duration: 0.4, z:0}, 'st0')
        .to(ModelInfo.r, {duration: 0.4, y:-0.8}, 'st0')

        // .to(helloCircle.material.color, {duration: 0.4, r:0.0908, g :0.4452,b :1}, 'st0')
        .to(helloCircle.position, {duration: 0.4, x:2.5, z:-9}, 'st0')

        // 옆으로 구르는 모션
        .to(ModelInfo.p, {duration: 0.8, y : -0.6,z : -0.3}, 'st1')
        .to(ModelInfo.r, {duration: 0.4, y: -3.4, z: 0}, 'st1')

        .to(helloCircle.position, {duration: 0.8, x:-2.5, z:-6}, 'st1')
        txtItemArray1.map((_this,i)=> {
            t1.to(_this, {delay: (i*0.05), duration: 0.5, x:'100%'}, 'st1')    
        })
        txtItemArray2.map((_this,i)=> {
            t1.to(_this, {delay: (i*0.05), duration: 0.5, x:0}, 'st1')
            .to(_this, {delay: ((txtItemArray2.length-i)*0.05), duration: 0.5, x:'50%'}, 'st2')
        })

        // 얼굴커지는 장면
        t1.to(ModelInfo.p, {duration: 0.5, x: -0.3, z: 0, y: -0.25}, 'st2')
        .to(ModelInfo.r, {duration: 0.5, y: -4, z: 0}, 'st2')
        .to(helloCircle.position, {duration: 0.8, x:0, z:-1}, 'st2')

        .to(helloCircle.material.color, {duration: 0.8, r:0.9, g :0.85,b :0.8}, 'st2')
        .to(dom, {duration: 0.5}, 'end')
    }

    // // introduce
    if(dom.id === 'introduce') {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                start: "top top",
                end: "bottom 0",
                scrub: 1,
                toggleClass : 'visible',
                onUpdate : scrollUpdate
            }
        })
        .to(dom.querySelector('.aboutWrap'), {duration: 0.2, opacity: 1}, 'st1')
        .to(dom.querySelector('.aboutWrap'), {duration: 0.5, y: '-50%'}, 'st1')
        .to(dom.querySelector('.aboutWrap'), {duration: 0.2, opacity: 0}, 'st2')
        .to(dom.querySelector('.aboutWrap'), {duration: 0.5, y: '-100%'}, 'st2')
        // .to(box.position, {duration: 0.5, x: -0.1, z: 0.8, y: -0.25}, 'st2')
        // .to(box.rotation, {duration: 0.5, y: -12, z: -0.1}, 'st2')
        
        // ?
        // .to(box.position, {duration: 0.5, x: 0, z: -0.7, y: -0.5}, 'st3')
        // .to(box.rotation, {duration: 0.5, y: 0, z: 0}, 'st3')

        .to(dom, {duration: 0.5}, 'end')
    }

    // // shorts
    if(dom.id === 'shorts') {
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
                toggleClass : 'visible',
                onUpdate : scrollUpdate
            }
        })
        // .to(box.position, {duration: 0.5, x: 0, z: -0.5, y: 0}, 'st0')
        // .to(box.rotation, {duration: 0.5, y: 3, z: 0}, 'st0')
        .to(dom.querySelector('.shortsWrap'), {duration: 0.2, opacity: 1}, 'st0')
        .to(dom.querySelector('.shortsWrap'), {duration: 0.5, y: 0}, 'st0')
        itemArray.map((_this,i)=> {
            _this.style.transform = `rotateY(${i*_deg}deg) translateZ(${_translateZ}px)`;
            _this.style.zIndex = i;
            if (i !== itemArray.length-1) {
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
