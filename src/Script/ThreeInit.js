import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let camera, scene, renderer, mesh, mesh2, model, box;
const ThreeInit = (_target) => {
    let dom = _target.current;
    const _GLTFLoader = new GLTFLoader();
    const textureLoader = new THREE.TextureLoader();
    const light = new THREE.AmbientLight( 0xffffff );
    console.log('three init !!!!!!!!!')

    let geometry, modelGeometry, material, intensity = 10;
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 10 );
    scene = new THREE.Scene();

    camera.position.z = 1;
    geometry = new THREE.BoxGeometry( 0.2,0.2,0.2 );
    modelGeometry = new THREE.BoxGeometry( 0.05,0.05,0.05 );
    box = new THREE.Mesh( modelGeometry );
	material = new THREE.MeshNormalMaterial();
    

	mesh = new THREE.Mesh( geometry, material );
    // mesh2 = new THREE.Mesh( geometry, material );
    
    _GLTFLoader.load('/modeling/scene.gltf',
        ( gltf ) => {
            model = gltf.scene;
            model.position.set(0,-0.32,0);
            model.scale.set(0.4, 0.4, 0.4)
            model.castShadow = true;
            model.receiveShadow = true;
            box.add( model );
        }
    );
    // box.position.z = 1;
    box.position.x = .3;
    box.rotation.y = -0.8;
    scene.add(box);
    scene.add(light);

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
	dom.appendChild( renderer.domElement );
    renderer.render( scene, camera );

    function animation( time ) {
        renderer.render( scene, camera );
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener( 'resize', ()=>{
        renderer.setSize( window.innerWidth, window.innerHeight );
    }, false );
}

export {ThreeInit ,camera, scene, renderer, mesh, mesh2, box}