import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
// import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
// import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';

// let pixelSize = {s:1};
let pixelSize = {s:15};
let ModelInfo = {
    p : {x:0,y:0,z:-0.3},
    r : {x:0,y:0,z:0}
}

let camera, scene, renderer, helloCircle, model, box, field, composer, modelPixel;
const ThreeInit = (_target) => {
    let dom = _target.current;
    const _GLTFLoader = new GLTFLoader();
    const textureLoader = new THREE.TextureLoader();
    const light = new THREE.AmbientLight( 0xffffff );
    console.log('three init !!!!!!!!!')

    let geometry, modelGeometry, material, intensity = 10;
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 15 );
    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2,0.2,0.2 );
    modelGeometry = new THREE.BoxGeometry( 0.05,0.05,0.05 );
    material = new THREE.MeshNormalMaterial();
    
    // model born
    box = new THREE.Mesh( modelGeometry );
	// box.position.set(0.3,0,-0.3);
    box.position.set(ModelInfo.p.x,ModelInfo.p.y,ModelInfo.p.z);
    box.rotation.set(ModelInfo.r.x,ModelInfo.r.y,ModelInfo.r.z);
    scene.add(box);
    scene.add(light);

    // field
    field = new THREE.Mesh(
        new THREE.BoxGeometry( 15,5.5,0 ),
        new THREE.MeshBasicMaterial({ color: 0x3e4151 })
    )
    field.position.set(4.5,-0.35,-3.5);
    field.rotation.set(-1.55,0,0);
    scene.add(field);
    // building -> x,y,z,h
    let building = [
        [0.2, 1, 0.9, 2, 0x292a52],
        [1.1, 2, 0.6, 1.5, 0x244731],
        [1.7, -1, 0.7, 1.5, 0x292a52],
        [2, 2, 0.6, 1.5, 0x4b5c57],
        [2.5, 1, 0.4, 1, 0x244731],
        [3, 3, 0.6, 1.5, 0x4b5c57],
        [4, 1, 0.8, 2, 0x4b5c57],
        [4.5, 2, 0.6, 1.5, 0x292a52],
        [4.7, 0, 0.6, 1.5, 0x244731],
        [5, -0.5, 0.4, 1, 0x4b5c57],
    ]
    building.map((_this, i) => {
        let b = new THREE.Mesh(
            new THREE.BoxGeometry( 0.2,0.3,_this[3] ),
            new THREE.MeshBasicMaterial({ color: _this[4] })
        )
        b.position.set(_this[0],_this[1],_this[2]);
        field.add(b);
    });
	
    // hello circle
    helloCircle = new THREE.Mesh( 
        new THREE.CircleGeometry( 2, 60), 
        new THREE.MeshBasicMaterial({ color: 0x000000 }) 
    );
    helloCircle.position.set(0,0,-10);
    helloCircle.scale.set(5,5,5);
    scene.add(helloCircle);

    // model
    // _GLTFLoader.load('/three/modeling/scene.gltf',
    //     ( gltf ) => {
    //         model = gltf.scene;
    //         model.position.set(0,-0.32,0);
    //         model.scale.set(0.4, 0.4, 0.4)
    //         model.castShadow = true;
    //         model.receiveShadow = true;
    //         box.add( model );
    //     }
    // );
    _GLTFLoader.load('/three/a/scene.gltf',
        ( gltf ) => {
            let model2 = gltf.scene;
            model2.position.set(0,-0.32,0);
            model2.scale.set(0.4, 0.4, 0.4)
            box.add( model2 );
        }
    );
    
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
}
const renderResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener('resize', renderResize, false );


export {ThreeInit ,camera, scene, helloCircle, box, field, modelPixel, pixelSize, ModelInfo}