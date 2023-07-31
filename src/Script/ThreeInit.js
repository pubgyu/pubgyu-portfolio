import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// let pixelSize = {s:1};
let pixelSize = {s:12};
let ModelInfo = {
    p : {x:0,y:0,z:-0.3},
    r : {x:0,y:0,z:0}
}

let camera, scene, renderer, helloCircle, box, house, field, modelPixel, animationMixer;
const ThreeInit = (_target) => {
    let dom = _target.current;
    const _GLTFLoader = new GLTFLoader();
    const light = new THREE.AmbientLight( 0xffffff );
    console.log('three init !!!!!!!!!')

    let modelGeometry = new THREE.BoxGeometry( 0.05,0.05,0.05 );
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 15 );
    scene = new THREE.Scene();
    
    // model born
    box = new THREE.Mesh( 
        modelGeometry,
        new THREE.MeshLambertMaterial({ transparent: true, opacity: 0 })
    );
    box.position.set(ModelInfo.p.x,ModelInfo.p.y,ModelInfo.p.z);
    box.rotation.set(ModelInfo.r.x,ModelInfo.r.y,ModelInfo.r.z);
    house = new THREE.Mesh( 
        modelGeometry,
        new THREE.MeshLambertMaterial({ transparent: true, opacity: 0 })
    );
    house.position.set(-1,0,-2);
    house.rotation.set(0,0,0);
    house.scale.set(0,0,0);
    scene.add(box);
    scene.add(house);
    scene.add(light);

    // field
    field = new THREE.Mesh(
        new THREE.BoxGeometry( 15,5.5,0 ),
        new THREE.MeshLambertMaterial({ transparent: true, opacity: 0 })
    )
    field.position.set(4.5,-0.35,-3.5);
    field.rotation.set(-1.55,0,0);
    scene.add(field);
	
    // hello circle
    helloCircle = new THREE.Mesh( 
        new THREE.CircleGeometry( 2, 60), 
        new THREE.MeshBasicMaterial({ color: 0x000000 }) 
    );
    helloCircle.position.set(0,0,-10);
    helloCircle.scale.set(5.2,5.2,5.2);
    scene.add(helloCircle);

    // model
    let gltfList = [
        '/three/modeling/scene.gltf',
        '/three/house/scene.gltf',
        '/three/modeling2/scene.gltf'
    ];
    gltfList.map((_this,i)=> {
        return _GLTFLoader.load(_this,
            gltf => {
                let model = gltf.scene;
                if (i === 0) {
                    model.position.set(0,-0.32,0);
                    model.scale.set(0.4, 0.4, 0.4)
                    // box.add( model );
                }
                if (i === 1) {
                    model.position.set(0,0,0);
                    model.rotation.set(0,0,0);
                    model.scale.set(25,25,25)
                    house.add( model );
                }
                if (i === 2) {
                    model.position.set(-0.1,-0.3,0);
                    model.scale.set(0.0032, 0.0032, 0.0032)
                    animationMixer = new THREE.AnimationMixer(model)
                    animationMixer.clipAction(gltf.animations[0]).play();

                    box.add( model );
                }
            }
        );
    });
    for(let i=0;i<3;i++) {
        _GLTFLoader.load('/three/field/scene.gltf', gltf => {
            let model = gltf.scene;
            model.position.set((5.15*(i+1)),-1.5,0);
            model.rotation.set(-4.58,0,0);
            model.scale.set(0.5,0.5,0.5)
            field.add( model );
        })
    }
    
    camera.position.z = 1;

    // render
    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
	dom.appendChild( renderer.domElement );

    // 후처리
    const composer = new EffectComposer( renderer );
    modelPixel = new RenderPixelatedPass( 15, scene, camera );
    const outputPass = new OutputPass();

    composer.addPass( modelPixel );
    composer.addPass( outputPass );

    // renderer.render( scene, camera );
    composer.render();

    function animation( time ) {
        // renderer.render( scene, camera );
        composer.render();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    // reset
    // let sceneAddList = [...scene.children];
    // sceneAddList.map((_this) => {
    //     scene.remove(_this); 
    // })
}
const renderResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener('resize', renderResize, false );


export {ThreeInit, scene, helloCircle, box, house, field, modelPixel, pixelSize, ModelInfo, animationMixer}