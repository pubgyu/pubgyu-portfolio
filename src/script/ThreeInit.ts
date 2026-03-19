import type { RefObject } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { RenderPixelatedPass } from "three/examples/jsm/postprocessing/RenderPixelatedPass";

import { threeLoading } from "script/Load-progress";

type Vector3Like = {
  x: number;
  y: number;
  z: number;
};

type ThreeTimeline = any;

const ThreeMotion = {
  t1: null as ThreeTimeline,
  t2: null as ThreeTimeline,
  t3: null as ThreeTimeline,
  t4: null as ThreeTimeline,
  t5: null as ThreeTimeline,
  pixelSize: {
    s: window.innerHeight / 80
  },
  ModelInfo: {
    p: { x: 0, y: 0, z: -0.3 } as Vector3Like,
    r: { x: 0, y: 0, z: 0 } as Vector3Like
  },
  setting: {
    dom: null as HTMLDivElement | null,
    camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 15),
    scene: null as THREE.Scene | null,
    renderer: new THREE.WebGLRenderer({ antialias: true, alpha: true })
  },
  modeling: {
    box: null as THREE.Mesh | null,
    street: null as THREE.Mesh | null,
    gym: null as THREE.Mesh | null,
    bg: null as THREE.Mesh | null,
    light: new THREE.AmbientLight(0xffffff)
  },
  compose: {
    composer: null as EffectComposer | null,
    modelPixel: null as RenderPixelatedPass | null,
    animationMixer: null as THREE.AnimationMixer | null,
    outputPass: new OutputPass(),
    _GLTFLoader: new GLTFLoader(threeLoading)
  },
  init() {
    this.setting.scene = new THREE.Scene();
    this.setting.camera.position.z = 1;
    this.resize();

    this.compose.composer = new EffectComposer(this.setting.renderer);
    this.compose.modelPixel = new RenderPixelatedPass(
      this.pixelSize.s,
      this.setting.scene,
      this.setting.camera
    );
    this.compose.composer.addPass(this.compose.modelPixel);
    this.compose.composer.addPass(this.compose.outputPass);

    this.create();
  },
  create() {
    const modelGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);

    this.modeling.box = new THREE.Mesh(
      modelGeometry,
      new THREE.MeshLambertMaterial({ transparent: true, opacity: 0 })
    );
    this.modeling.box.position.set(this.ModelInfo.p.x, this.ModelInfo.p.y, this.ModelInfo.p.z);
    this.modeling.box.rotation.set(this.ModelInfo.r.x, this.ModelInfo.r.y, this.ModelInfo.r.z);

    if (window.innerWidth <= 768) {
      this.modeling.box.scale.set(0.6, 0.6, 0.6);
    } else {
      this.modeling.box.scale.set(1, 1, 1);
    }

    this.modeling.street = new THREE.Mesh(
      new THREE.BoxGeometry(15, 5.5, 0),
      new THREE.MeshLambertMaterial({ transparent: true, opacity: 0 })
    );
    this.modeling.street.position.set(4.5, -0.35, -3);
    this.modeling.street.rotation.set(-1.55, 0, 0);

    this.modeling.gym = new THREE.Mesh(
      modelGeometry,
      new THREE.MeshLambertMaterial({ transparent: true, opacity: 0 })
    );
    this.modeling.gym.position.set(-1, 0, -2);
    this.modeling.gym.rotation.set(0, 0, 0);
    this.modeling.gym.scale.set(0, 0, 0);

    this.modeling.bg = new THREE.Mesh(
      new THREE.CircleGeometry(2, 60),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    this.modeling.bg.position.set(0, 0, -10);
    this.modeling.bg.scale.set(5.8, 5.8, 5.8);

    const gltfList = ["/three/modeling/scene.gltf", "/three/house/scene.gltf"];

    gltfList.forEach((gltfPath, index) => {
      this.compose._GLTFLoader.load(gltfPath, (gltf) => {
        const model = gltf.scene;

        if (!this.modeling.box || !this.modeling.gym) {
          return;
        }

        if (index === 0) {
          model.position.set(0, -0.32, 0);
          model.scale.set(0.6, 0.6, 0.6);
          this.compose.animationMixer = new THREE.AnimationMixer(model);
          this.compose.animationMixer.clipAction(gltf.animations[0]).play();
          this.compose.animationMixer.update(0);

          this.modeling.box.add(model);
          this.render();
        }

        if (index === 1) {
          model.position.set(0, 0, 0);
          model.rotation.set(0, 0, 0);
          model.scale.set(25, 25, 25);
          this.modeling.gym.add(model);
        }
      });
    });

    for (let i = 0; i < 3; i += 1) {
      this.compose._GLTFLoader.load("/three/field/scene.gltf", (gltf) => {
        const model = gltf.scene;

        if (!this.modeling.street) {
          return;
        }

        model.position.set(5.15 * (i + 1), -1.5, 0);
        model.rotation.set(-4.58, 0, 0);
        model.scale.set(0.5, 0.5, 0.5);
        this.modeling.street.add(model);
        this.render();
      });
    }
  },
  draw(target: RefObject<HTMLDivElement>) {
    const dom = target.current;

    if (!dom || !this.setting.scene || !this.modeling.box || !this.modeling.bg || !this.modeling.street || !this.modeling.gym) {
      return;
    }

    this.setting.dom = dom;
    this.setting.dom.appendChild(this.setting.renderer.domElement);

    this.setting.scene.add(this.modeling.box);
    this.setting.scene.add(this.modeling.bg);
    this.setting.scene.add(this.modeling.street);
    this.setting.scene.add(this.modeling.gym);
    this.setting.scene.add(this.modeling.light);

    this.render();
  },
  render() {
    this.compose.composer?.render();
  },
  resize() {
    this.setting.camera.aspect = window.innerWidth / window.innerHeight;
    this.setting.camera.updateProjectionMatrix();
    this.setting.renderer.setSize(window.innerWidth, window.innerHeight);

    if (this.compose.composer) {
      this.render();
    }
  },
  remove() {
    if (!this.setting.scene) {
      return;
    }

    const sceneAddList = [...this.setting.scene.children];
    sceneAddList.forEach((sceneItem) => {
      this.setting.scene?.remove(sceneItem);
    });
  }
};

export default ThreeMotion;
