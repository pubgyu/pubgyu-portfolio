import gsap from 'gsap'
import ThreeMotion from '@/Script/ThreeInit.js';

export default function Aniscroll(_target) {
    let dom = _target;
    let root = document.getElementById('root');
    // ThreeMotion
    let modelPixel = ThreeMotion.compose.modelPixel;
    let pixelSize = ThreeMotion.pixelSize;
    let ModelInfo = ThreeMotion.ModelInfo;
    let box = ThreeMotion.modeling.box;
    let bg = ThreeMotion.modeling.bg;
    let street = ThreeMotion.modeling.street;
    let gym = ThreeMotion.modeling.gym;
    
    let aniFrame = {
        f : 0
    }
    
    const scrollUpdate = () => {
        modelPixel.setPixelSize( pixelSize.s );
        box.position.set(ModelInfo.p.x,ModelInfo.p.y,ModelInfo.p.z);
        box.rotation.set(ModelInfo.r.x,ModelInfo.r.y,ModelInfo.r.z);
        if(ThreeMotion.compose.animationMixer) ThreeMotion.compose.animationMixer.update(aniFrame.f);
        // three render
        ThreeMotion.render();
    }
    scrollUpdate();
    
    // opening
    if(dom.id === 'opening') {
        let openTxt = dom.querySelector('.hideTxt').innerText.split('');
        dom.querySelector('.openTxt').innerText = '';
        openTxt.map((_this,i)=> {
            let tag = document.createElement("i");
            tag.append(_this);
            dom.querySelector('.openTxt').append(tag);
            return tag.style.animationDelay = (i*0.3) + 's';
        });
        if (ThreeMotion.t1) ThreeMotion.t1.kill();
        ThreeMotion.t1 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                scroller : root,
                start: "top top",
                end: "bottom 0",
                scrub: 0.5,
                toggleClass : 'visible',
                onUpdate : scrollUpdate
            }
        })

        // reset style
        .to(pixelSize, {duration: 0, s: (window.innerHeight/80) }, 'reset')
        .to(bg.material.color, {duration:0, r:0, g :0,b :0}, 'reset')
        .to(bg.position, {duration:0,x:0,y:0,z:-10}, 'reset')
        .to(bg.scale, {duration:0, x:5.8,y:5.8,z:5.8}, 'reset')
        .to(street.position, {duration:0, x:4.5,y:-0.35,z:-3}, 'reset')
        .to(street.rotation, {duration:0, x:-1.55,y:0,z:0}, 'reset')
        .to(ModelInfo.p, {duration: 0, x:0,y:0,z:-0.3}, 'reset')
        .to(ModelInfo.r, {duration: 0, x:0,y:0,z:0}, 'reset')

        if (window.innerWidth <= 768) {
            ThreeMotion.t1.to(box.scale, {duration: 0, x: 0.6, y: 0.6, z: 0.6}, 'reset')
            ThreeMotion.t1.to(ModelInfo.p, {duration: 0.5, x:-0.1}, 'st0')
        }else {
            ThreeMotion.t1.to(box.scale, {duration: 0, x: 1, y: 1, z: 1}, 'reset')
            ThreeMotion.t1.to(ModelInfo.p, {duration: 0.5, x:-0.3}, 'st0')
        }
        
        ThreeMotion.t1.to(ModelInfo.r, {duration: 0.5, y:0.8}, 'st0')
        .to(street.position, {duration: 0.5, x : -0.1}, 'st0')
        
        .to(ModelInfo.p, {duration: 0.5, x : 0}, 'st1')
        .to(street.position, {duration: 1.5, x : -10}, 'st1')
        .to(aniFrame, {duration: 1.5, f : 0.03}, 'st1')

        .to(dom.querySelector('.openTxt'), {duration: 0.5, x : '-100%'}, 'st1')
        .to(dom.querySelector('.scrollInfo'), {duration: 0.5, x : '-100%'}, 'st1')
    }
    // hello
    if(dom.id === 'hello') {
        let txtItem1 = dom.querySelectorAll('.sectionTitle.title1 i');
        let txtItem2 = dom.querySelectorAll('.sectionTitle.title2 i');
        let txtItemArray1 = [...txtItem1];
        let txtItemArray2 = [...txtItem2];
        if (ThreeMotion.t2) ThreeMotion.t2.kill();
        ThreeMotion.t2 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                scroller : root,
                start: "top top",
                end: "bottom 0",
                scrub: 0.5,
                toggleClass : 'visible',
                onUpdate : scrollUpdate
            }
        })
        
        // 오프닝
        if (window.innerWidth <= 768) {
            ThreeMotion.t2.to(ModelInfo.p, {duration: 0.4, x:0.1,z:0}, 'st0')
        }else {
            ThreeMotion.t2.to(ModelInfo.p, {duration: 0.4, x:0.3,z:0}, 'st0')
        }
        ThreeMotion.t2.to(ModelInfo.r, {duration: 0.4, x:0, y:-0.8}, 'st0')
        .to(bg.material.color, {duration: 0.4, r:0, g :0,b :0}, 'st0')

        if (window.innerWidth <= 768) {
            ThreeMotion.t2.to(bg.position, {duration: 0.4, x:1.3}, 'st0')
            .to(bg.scale, {duration: 0.4, x:0.5,y:0.5,z:0.5}, 'st0')
        }else {
            ThreeMotion.t2.to(bg.position, {duration: 0.4, x:3.3}, 'st0')
            .to(bg.scale, {duration: 0.4, x:1,y:1,z:1}, 'st0')
        }

        ThreeMotion.t2.to(street.position, {duration: 0.25, z : -25}, 'st0')

        // 옆으로 구르는 모션
        .to(ModelInfo.p, {duration: 0.8, y : -0.6,z : -0.3}, 'st1')
        .to(ModelInfo.r, {duration: 0.4, x:0, y: -3.4, z: 0}, 'st1')
        
        .to(box.scale, {duration: 0.4, x: 1, y: 1, z: 1}, 'st1')

        if (window.innerWidth <= 768) {
            ThreeMotion.t2.to(bg.scale, {duration: 0.8, x:1,y:1,z:1}, 'st1')
            .to(bg.position, {duration: 0.8, x:-2.2}, 'st1')
        }else {
            ThreeMotion.t2.to(bg.scale, {duration: 0.8, x:1.4,y:1.4,z:1.4}, 'st1')
            .to(bg.position, {duration: 0.8, x:-3}, 'st1')
        }

        txtItemArray1.map((_this,i)=> {
            return ThreeMotion.t2.to(_this, {delay: (i*0.05), duration: 0.5, x:'100%'}, 'st1')    
        })
        txtItemArray2.map((_this,i)=> {
            return ThreeMotion.t2.to(_this, {delay: (i*0.05), duration: 0.5, x:0}, 'st1')
            .to(_this, {delay: ((txtItemArray2.length-i)*0.05), duration: 0.5, x:'50%'}, 'st2')
        })

        // 얼굴커지는 장면
        ThreeMotion.t2.to(gym.scale, {duration: 0.5, x:1,y:1,z:1 }, 'st2')
        .to(gym.rotation, {duration: 0.5, x:1.2 }, 'st2')
        if (window.innerWidth <= 768) {
            ThreeMotion.t2.to(gym.position, {duration: 0.5, x:0,z:-3 }, 'st2')
            .to(box.scale, {duration: 0.5, x: 0.35, y: 0.35, z: 0.35}, 'st2')
            .to(ModelInfo.p, {duration: 0.5, x: 0, y: 0.12, z: -0.8 }, 'st2')
        }else {
            ThreeMotion.t2.to(gym.position, {duration: 0.5, x:0,z:-2 }, 'st2')
            .to(box.scale, {duration: 0.5, x: 0.6, y: 0.6, z: 0.6}, 'st2')
            .to(ModelInfo.p, {duration: 0.5, x: 0, y: 0.2, z: -0.8 }, 'st2')
        }

        ThreeMotion.t2.to(pixelSize, {duration: 0.5, s:(window.innerHeight/160) }, 'st2')
        .to(ModelInfo.r, {duration: 0.5, x: 1.5, y: 0, z: 0}, 'st2')
        .to(bg.position, {duration: 0.8, x:0}, 'st2')
        .to(bg.scale, {duration: 0.8, x:5.8,y:5.8,z:5.8}, 'st2')
        .to(bg.material.color, {duration: 0.5, r:0.47, g :0.47,b :0.35}, 'st2')
    }
    
    // introduce
    if(dom.id === 'introduce') {
        let txtItem = dom.querySelectorAll('.descWrap .txt');
        let txtItemArray = [...txtItem];
        if (ThreeMotion.t3) ThreeMotion.t3.kill();
        ThreeMotion.t3 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                scroller : root,
                start: "top top",
                end: "bottom 0",
                scrub: 0.5,
                toggleClass : 'visible',
                onUpdate : scrollUpdate
            }
        })
        .to(dom.querySelector('.aboutWrap'), {duration: 0.2, opacity: 1}, 'st0')
        .to(dom.querySelector('.aboutWrap'), {duration: 0.5, y: 0}, 'st0')

        txtItemArray.map((_this,i)=> {
            ThreeMotion.t3.to(_this, {delay: (i*0.05), duration: 0.3, opacity: 1, y:'-50%'}, `st${i+1}`)
            if (i !== txtItemArray.length-1)
            ThreeMotion.t3.to(_this, {delay: (i*0.05), duration: 0.3, opacity: 0, y:'-100%'}, `st${i+2}`)
        })

        ThreeMotion.t3.to(dom.querySelector('.aboutWrap'), {duration: 0.2, opacity: 0}, 'last')
        .to(dom.querySelector('.aboutWrap'), {duration: 0.5, y: '-100%'}, 'last')
        
        .to(dom, {duration: 0.5}, 'end')
    }
    
    // shorts
    if(dom.id === 'shorts') {
        // 3000
        let shortsContent = _target;
        let item = dom.querySelectorAll('.item');
        let itemArray = [...item];
        let itemScrollHeight = 1500;
        let _deg = 360/10;
        let _translateZ = 600;

        shortsContent.style.height = (item.length*itemScrollHeight)+'px';
        
        if (ThreeMotion.t4) ThreeMotion.t4.kill();
        ThreeMotion.t4 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                scroller : root,
                start: "top top",
                end: "bottom 0",
                scrub: 0.5,
                toggleClass : 'visible',
                onUpdate : scrollUpdate
            }
        })

        .to(ModelInfo.r, {duration: 0.5, x:0}, 'st1')
        .to(gym.rotation, {duration: 0.5, x:0 }, 'st1')
        .to(bg.material.color, {duration: 0.5, r:1, g :1,b :1}, 'st1')

        if (window.innerWidth <= 768) {
            ThreeMotion.t4.to(box.scale, {duration: 0.5, x: 0.8, y:0.8, z:0.8}, 'st2')
            .to(gym.position, {duration: 0.5, y:-0.28, z:1 }, 'st2')
        }else {
            ThreeMotion.t4.to(box.scale, {duration: 0.5, x: 1, y:1, z:1}, 'st2')
            .to(gym.position, {duration: 0.5, y:-0.335, z:1 }, 'st2')
        }

        ThreeMotion.t4.to(pixelSize, {duration: 0.5, s:1 }, 'st2')
        .to(ModelInfo.p, {duration: 0.5, y: 0, z: 0 }, 'st2')

        .to(dom.querySelector('.shortsWrap'), {duration: 0.2, opacity: 1}, 'st3-0')
        .to(dom.querySelector('.shortsWrap'), {duration: 0.5, y: 0}, 'st3-0')
        itemArray.map((_this,i)=> {
            _this.style.transform = `rotateY(${i*_deg}deg) translateZ(${_translateZ}px)`;
            _this.style.zIndex = i;
            if (i !== itemArray.length-1) {
                ThreeMotion.t4.to(dom.querySelector('.itemList'), {duration: 0.5, rotationY: `-=${_deg}deg`}, `st3-${i+1}`)
            }
        })

        ThreeMotion.t4.to(dom.querySelector('.shortsWrap'), {duration: 0.2, opacity: 0}, 'end')
        .to(dom.querySelector('.shortsWrap'), {duration: 0.5, y: '-50%'}, 'end')
        .to(dom, {duration: 0.5}, 'end2')
    }
    
    // contact
    if(dom.id === 'contact') {
        if (ThreeMotion.t5) ThreeMotion.t5.kill();
        ThreeMotion.t5 = gsap.timeline({
            scrollTrigger: {
                trigger: dom,
                scroller : root,
                start: "top top",
                end: "bottom 0",
                scrub: 0.5,
                toggleClass : 'visible',
                onUpdate : scrollUpdate
            }
        })
        if (window.innerWidth <= 768) {
            ThreeMotion.t5
            .to(ModelInfo.p, {duration: 0.5, x:0 }, 'st0')
            .to(box.scale, {duration: 0.5, x: 0.7, y: 0.7, z: 0.7}, 'st0')
            .to(ModelInfo.r, {duration: 0.5, y:3.3 }, 'st0')
        }else {
            ThreeMotion.t5.to(ModelInfo.p, {duration: 0.5, x:-0.3 }, 'st0')
            .to(ModelInfo.r, {duration: 0.5, y:0.6 }, 'st0')
        }
        ThreeMotion.t5.to(gym.position, {duration: 0.5, y:-1.5 }, 'st0')
        .to(dom.querySelector('.emailTxt'), {duration: 0.5, opacity:1 ,y:'-50%' }, 'st0')
        .to(dom, {duration: 0.5}, 'end')
    }
}
