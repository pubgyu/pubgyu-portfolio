import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import {threeLoading} from '@/Script/Load-progress.js';

const ThreeMotion = {
    t1 : null, t2 : null, t3 : null, t4 : null, t5 : null,
    pixelSize : {
        s: (window.innerHeight/80)
    },
    ModelInfo : {
        p : {x:0,y:0,z:-0.3},
        r : {x:0,y:0,z:0}
    },
    setting : {
        dom : '',
        camera : new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 15 ),
        scene : '',
        renderer : new THREE.WebGLRenderer( { antialias: true, alpha: true } ),
    },
    modeling : {
        box : '',
        street : '',
        gym : '',
        bg : '',
        light : new THREE.AmbientLight( 0xffffff )
    },
    compose : {
        composer : '',
        modelPixel : '', 
        animationMixer : '',
        outputPass : new OutputPass(),
        _GLTFLoader : new GLTFLoader(threeLoading)
    },
    init : function () {
        this.setting.scene = new THREE.Scene();
        this.setting.camera.position.z = 1;
        this.resize();

        this.compose.composer = new EffectComposer( this.setting.renderer );
        this.compose.modelPixel = new RenderPixelatedPass( this.pixelSize.x, this.setting.scene, this.setting.camera );
        this.compose.composer.addPass( this.compose.modelPixel );
        this.compose.composer.addPass( this.compose.outputPass );

        this.create();
    },
    create : function () {
        const modelGeometry = new THREE.BoxGeometry( 0.05,0.05,0.05 );
        
        // model born
        this.modeling.box = new THREE.Mesh( 
            modelGeometry,
            new THREE.MeshLambertMaterial({ transparent: true, opacity: 0 })
        );
        this.modeling.box.position.set(this.ModelInfo.p.x,this.ModelInfo.p.y,this.ModelInfo.p.z);
        this.modeling.box.rotation.set(this.ModelInfo.r.x,this.ModelInfo.r.y,this.ModelInfo.r.z);
        (window.innerWidth <= 768) ? this.modeling.box.scale.set(0.6,0.6,0.6) : this.modeling.box.scale.set(1,1,1);

        // street
        this.modeling.street = new THREE.Mesh(
            new THREE.BoxGeometry( 15,5.5,0 ),
            new THREE.MeshLambertMaterial({ transparent: true, opacity: 0 })
        )
        this.modeling.street.position.set(4.5,-0.35,-3);
        this.modeling.street.rotation.set(-1.55,0,0);
        
        // gym
        this.modeling.gym = new THREE.Mesh( 
            modelGeometry,
            new THREE.MeshLambertMaterial({ transparent: true, opacity: 0 })
        );
        this.modeling.gym.position.set(-1,0,-2);
        this.modeling.gym.rotation.set(0,0,0);
        this.modeling.gym.scale.set(0,0,0);

        // bg
        this.modeling.bg = new THREE.Mesh( 
            new THREE.CircleGeometry( 2, 60), 
            new THREE.MeshBasicMaterial({ color: 0x000000 }) 
        );
        this.modeling.bg.position.set(0,0,-10);
        this.modeling.bg.scale.set(5.8,5.8,5.8);

        // model
        let gltfList = [
            '/three/modeling/scene.gltf',
            '/three/house/scene.gltf',
        ];
        gltfList.map((_this,i)=> {
            return this.compose._GLTFLoader.load(_this,
                gltf => {
                    let model = gltf.scene;
                    if (i === 0) {
                        model.position.set(0,-0.32,0);
                        model.scale.set(0.6, 0.6, 0.6)
                        this.compose.animationMixer = new THREE.AnimationMixer(model)
                        this.compose.animationMixer.clipAction(gltf.animations[0]).play();
                        this.compose.animationMixer.update(0);

                        this.modeling.box.add( model );
                        this.render();
                    }
                    if (i === 1) {
                        model.position.set(0,0,0);
                        model.rotation.set(0,0,0);
                        model.scale.set(25,25,25)
                        this.modeling.gym.add( model );
                    }
                }
            );
        });
        for(let i=0;i<3;i++) {
            this.compose._GLTFLoader.load('/three/field/scene.gltf', gltf => {
                let model = gltf.scene;
                model.position.set((5.15*(i+1)),-1.5,0);
                model.rotation.set(-4.58,0,0);
                model.scale.set(0.5,0.5,0.5)
                this.modeling.street.add( model );
                this.render();
            })
        }
    },
    draw : function (_target) {
        this.setting.dom = _target.current;
        this.setting.dom.appendChild( this.setting.renderer.domElement );

        // add
        this.setting.scene.add(this.modeling.box);
        this.setting.scene.add(this.modeling.bg);
        this.setting.scene.add(this.modeling.street);
        this.setting.scene.add(this.modeling.gym);
        this.setting.scene.add(this.modeling.light);

        this.render();
    },
    render : function() {
        // render
        this.compose.composer.render();
    },
    resize : function () {
        ThreeMotion.setting.camera.aspect = window.innerWidth / window.innerHeight;
        ThreeMotion.setting.camera.updateProjectionMatrix();
        ThreeMotion.setting.renderer.setSize( window.innerWidth, window.innerHeight );

        if(this.compose.composer) this.render();
    },
    remove : function() {
        // reset
        let sceneAddList = [...this.setting.scene.children];
        sceneAddList.map((_this) => {
            this.setting.scene.remove(_this); 
        })
    }
}
export default ThreeMotion;