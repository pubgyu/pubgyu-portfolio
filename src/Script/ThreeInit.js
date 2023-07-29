import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
// import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
// import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';

let pixelSize = {s:15};
let ModelInfo = {
    p : {x:-0.3,y:0,z:-0.3},
    r : {x:0,y:-0.8,z:0}
}

let camera, scene, renderer, helloCircle, model, box, composer, modelPixel;
const ThreeInit = (_target) => {
    let dom = _target.current;
    const _GLTFLoader = new GLTFLoader();
    const textureLoader = new THREE.TextureLoader();
    const light = new THREE.AmbientLight( 0xffffff );
    console.log('three init !!!!!!!!!')

    let geometry, modelGeometry, material, intensity = 10;
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 10 );
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
	
    // hello circle
    helloCircle = new THREE.Mesh( 
        new THREE.CircleGeometry( 2, 60 ), 
        new THREE.MeshBasicMaterial({ color: 0x000000 }) 
    );
    helloCircle.position.set(0,0,-1);
    scene.add(helloCircle);

    // model
    _GLTFLoader.load('/three/modeling/scene.gltf',
        ( gltf ) => {
            model = gltf.scene;
            model.position.set(0,-0.32,0);
            model.scale.set(0.4, 0.4, 0.4)
            model.castShadow = true;
            model.receiveShadow = true;
            box.add( model );
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


export {ThreeInit ,camera, scene, helloCircle, box, modelPixel, pixelSize, ModelInfo}