import gsap from "gsap";

import ThreeMotion from "@/Script/ThreeInit";

export default function Aniscroll(target: HTMLElement) {
  const dom = target;
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  const modelPixel = ThreeMotion.compose.modelPixel;
  const pixelSize = ThreeMotion.pixelSize;
  const ModelInfo = ThreeMotion.ModelInfo;
  const box = ThreeMotion.modeling.box;
  const bg = ThreeMotion.modeling.bg;
  const street = ThreeMotion.modeling.street;
  const gym = ThreeMotion.modeling.gym;

  if (!modelPixel || !box || !bg || !street || !gym) {
    return;
  }

  const aniFrame = {
    f: 0
  };

  const scrollUpdate = () => {
    modelPixel.setPixelSize(pixelSize.s);
    box.position.set(ModelInfo.p.x, ModelInfo.p.y, ModelInfo.p.z);
    box.rotation.set(ModelInfo.r.x, ModelInfo.r.y, ModelInfo.r.z);

    if (ThreeMotion.compose.animationMixer) {
      ThreeMotion.compose.animationMixer.update(aniFrame.f);
    }

    ThreeMotion.render();
  };

  scrollUpdate();

  if (dom.id === "opening") {
    const hiddenText = dom.querySelector(".hideTxt") as HTMLElement | null;
    const openText = dom.querySelector(".openTxt") as HTMLElement | null;
    const scrollInfo = dom.querySelector(".scrollInfo") as HTMLElement | null;

    if (!hiddenText || !openText || !scrollInfo) {
      return;
    }

    const openTextList = hiddenText.innerText.split("");
    openText.innerText = "";

    openTextList.forEach((text, index) => {
      const tag = document.createElement("i");
      tag.append(text);
      tag.style.animationDelay = `${index * 0.3}s`;
      openText.append(tag);
    });

    ThreeMotion.t1?.kill();
    ThreeMotion.t1 = gsap.timeline({
      scrollTrigger: {
        trigger: dom,
        scroller: root,
        start: "top top",
        end: "bottom 0",
        scrub: 0.5,
        toggleClass: "visible",
        onUpdate: scrollUpdate
      } as any
    });

    ThreeMotion.t1
      .to(pixelSize, { duration: 0, s: window.innerHeight / 80 }, "reset")
      .to(bg.material.color, { duration: 0, r: 0, g: 0, b: 0 }, "reset")
      .to(bg.position, { duration: 0, x: 0, y: 0, z: -10 }, "reset")
      .to(bg.scale, { duration: 0, x: 5.8, y: 5.8, z: 5.8 }, "reset")
      .to(street.position, { duration: 0, x: 4.5, y: -0.35, z: -3 }, "reset")
      .to(street.rotation, { duration: 0, x: -1.55, y: 0, z: 0 }, "reset")
      .to(ModelInfo.p, { duration: 0, x: 0, y: 0, z: -0.3 }, "reset")
      .to(ModelInfo.r, { duration: 0, x: 0, y: 0, z: 0 }, "reset");

    if (window.innerWidth <= 768) {
      ThreeMotion.t1
        .to(box.scale, { duration: 0, x: 0.6, y: 0.6, z: 0.6 }, "reset")
        .to(ModelInfo.p, { duration: 0.5, x: -0.1 }, "st0");
    } else {
      ThreeMotion.t1
        .to(box.scale, { duration: 0, x: 1, y: 1, z: 1 }, "reset")
        .to(ModelInfo.p, { duration: 0.5, x: -0.3 }, "st0");
    }

    ThreeMotion.t1
      .to(ModelInfo.r, { duration: 0.5, y: 0.8 }, "st0")
      .to(street.position, { duration: 0.5, x: -0.1 }, "st0")
      .to(ModelInfo.p, { duration: 0.5, x: 0 }, "st1")
      .to(street.position, { duration: 1.5, x: -10 }, "st1")
      .to(aniFrame, { duration: 1.5, f: 0.03 }, "st1")
      .to(openText, { duration: 0.5, x: "-100%" }, "st1")
      .to(scrollInfo, { duration: 0.5, x: "-100%" }, "st1");
  }

  if (dom.id === "hello") {
    const textItem1 = Array.from(
      dom.querySelectorAll(".sectionTitle.title1 i")
    ) as HTMLElement[];
    const textItem2 = Array.from(
      dom.querySelectorAll(".sectionTitle.title2 i")
    ) as HTMLElement[];

    ThreeMotion.t2?.kill();
    ThreeMotion.t2 = gsap.timeline({
      scrollTrigger: {
        trigger: dom,
        scroller: root,
        start: "top top",
        end: "bottom 0",
        scrub: 0.5,
        toggleClass: "visible",
        onUpdate: scrollUpdate
      } as any
    });

    if (window.innerWidth <= 768) {
      ThreeMotion.t2.to(ModelInfo.p, { duration: 0.4, x: 0.1, z: 0 }, "st0");
    } else {
      ThreeMotion.t2.to(ModelInfo.p, { duration: 0.4, x: 0.3, z: 0 }, "st0");
    }

    ThreeMotion.t2
      .to(ModelInfo.r, { duration: 0.4, x: 0, y: -0.8 }, "st0")
      .to(bg.material.color, { duration: 0.4, r: 0, g: 0, b: 0 }, "st0");

    if (window.innerWidth <= 768) {
      ThreeMotion.t2
        .to(bg.position, { duration: 0.4, x: 1.3 }, "st0")
        .to(bg.scale, { duration: 0.4, x: 0.5, y: 0.5, z: 0.5 }, "st0");
    } else {
      ThreeMotion.t2
        .to(bg.position, { duration: 0.4, x: 3.3 }, "st0")
        .to(bg.scale, { duration: 0.4, x: 1, y: 1, z: 1 }, "st0");
    }

    ThreeMotion.t2
      .to(street.position, { duration: 0.25, z: -25 }, "st0")
      .to(ModelInfo.p, { duration: 0.8, y: -0.6, z: -0.3 }, "st1")
      .to(ModelInfo.r, { duration: 0.4, x: 0, y: -3.4, z: 0 }, "st1")
      .to(box.scale, { duration: 0.4, x: 1, y: 1, z: 1 }, "st1");

    if (window.innerWidth <= 768) {
      ThreeMotion.t2
        .to(bg.scale, { duration: 0.8, x: 1, y: 1, z: 1 }, "st1")
        .to(bg.position, { duration: 0.8, x: -2.2 }, "st1");
    } else {
      ThreeMotion.t2
        .to(bg.scale, { duration: 0.8, x: 1.4, y: 1.4, z: 1.4 }, "st1")
        .to(bg.position, { duration: 0.8, x: -3 }, "st1");
    }

    textItem1.forEach((textItem, index) => {
      ThreeMotion.t2?.to(textItem, { delay: index * 0.05, duration: 0.5, x: "100%" }, "st1");
    });

    textItem2.forEach((textItem, index) => {
      ThreeMotion.t2
        ?.to(textItem, { delay: index * 0.05, duration: 0.5, x: 0 }, "st1")
        .to(
          textItem,
          { delay: (textItem2.length - index) * 0.05, duration: 0.5, x: "50%" },
          "st2"
        );
    });

    ThreeMotion.t2
      .to(gym.scale, { duration: 0.5, x: 1, y: 1, z: 1 }, "st2")
      .to(gym.rotation, { duration: 0.5, x: 1.2 }, "st2");

    if (window.innerWidth <= 768) {
      ThreeMotion.t2
        .to(gym.position, { duration: 0.5, x: 0, z: -3 }, "st2")
        .to(box.scale, { duration: 0.5, x: 0.35, y: 0.35, z: 0.35 }, "st2")
        .to(ModelInfo.p, { duration: 0.5, x: 0, y: 0.12, z: -0.8 }, "st2");
    } else {
      ThreeMotion.t2
        .to(gym.position, { duration: 0.5, x: 0, z: -2 }, "st2")
        .to(box.scale, { duration: 0.5, x: 0.6, y: 0.6, z: 0.6 }, "st2")
        .to(ModelInfo.p, { duration: 0.5, x: 0, y: 0.2, z: -0.8 }, "st2");
    }

    ThreeMotion.t2
      .to(pixelSize, { duration: 0.5, s: window.innerHeight / 160 }, "st2")
      .to(ModelInfo.r, { duration: 0.5, x: 1.5, y: 0, z: 0 }, "st2")
      .to(bg.position, { duration: 0.8, x: 0 }, "st2")
      .to(bg.scale, { duration: 0.8, x: 5.8, y: 5.8, z: 5.8 }, "st2")
      .to(bg.material.color, { duration: 0.5, r: 0.47, g: 0.47, b: 0.35 }, "st2");
  }

  if (dom.id === "introduce") {
    const aboutWrap = dom.querySelector(".aboutWrap") as HTMLElement | null;
    const textItems = Array.from(dom.querySelectorAll(".descWrap .txt")) as HTMLElement[];

    if (!aboutWrap) {
      return;
    }

    ThreeMotion.t3?.kill();
    ThreeMotion.t3 = gsap.timeline({
      scrollTrigger: {
        trigger: dom,
        scroller: root,
        start: "top top",
        end: "bottom 0",
        scrub: 0.5,
        toggleClass: "visible",
        onUpdate: scrollUpdate
      } as any
    });

    ThreeMotion.t3
      .to(aboutWrap, { duration: 0.2, opacity: 1 }, "st0")
      .to(aboutWrap, { duration: 0.5, y: 0 }, "st0");

    textItems.forEach((textItem, index) => {
      ThreeMotion.t3?.to(
        textItem,
        { delay: index * 0.05, duration: 0.3, opacity: 1, y: "-50%" },
        `st${index + 1}`
      );

      if (index !== textItems.length - 1) {
        ThreeMotion.t3?.to(
          textItem,
          { delay: index * 0.05, duration: 0.3, opacity: 0, y: "-100%" },
          `st${index + 2}`
        );
      }
    });

    ThreeMotion.t3
      .to(aboutWrap, { duration: 0.2, opacity: 0 }, "last")
      .to(aboutWrap, { duration: 0.5, y: "-100%" }, "last")
      .to(dom, { duration: 0.5 }, "end");
  }

  if (dom.id === "shorts") {
    const shortsWrap = dom.querySelector(".shortsWrap") as HTMLElement | null;
    const itemList = dom.querySelector(".itemList") as HTMLElement | null;
    const itemArray = Array.from(dom.querySelectorAll(".item")) as HTMLElement[];
    const itemScrollHeight = 1500;
    const degree = 360 / 10;
    const translateZ = 600;

    if (!shortsWrap || !itemList) {
      return;
    }

    dom.style.height = `${itemArray.length * itemScrollHeight}px`;

    ThreeMotion.t4?.kill();
    ThreeMotion.t4 = gsap.timeline({
      scrollTrigger: {
        trigger: dom,
        scroller: root,
        start: "top top",
        end: "bottom 0",
        scrub: 0.5,
        toggleClass: "visible",
        onUpdate: scrollUpdate
      } as any
    });

    ThreeMotion.t4
      .to(ModelInfo.r, { duration: 0.5, x: 0 }, "st1")
      .to(gym.rotation, { duration: 0.5, x: 0 }, "st1")
      .to(bg.material.color, { duration: 0.5, r: 1, g: 1, b: 1 }, "st1");

    if (window.innerWidth <= 768) {
      ThreeMotion.t4
        .to(box.scale, { duration: 0.5, x: 0.8, y: 0.8, z: 0.8 }, "st2")
        .to(gym.position, { duration: 0.5, y: -0.28, z: 1 }, "st2");
    } else {
      ThreeMotion.t4
        .to(box.scale, { duration: 0.5, x: 1, y: 1, z: 1 }, "st2")
        .to(gym.position, { duration: 0.5, y: -0.335, z: 1 }, "st2");
    }

    ThreeMotion.t4
      .to(pixelSize, { duration: 0.5, s: 1 }, "st2")
      .to(ModelInfo.p, { duration: 0.5, y: 0, z: 0 }, "st2")
      .to(shortsWrap, { duration: 0.2, opacity: 1 }, "st3-0")
      .to(shortsWrap, { duration: 0.5, y: 0 }, "st3-0");

    itemArray.forEach((item, index) => {
      item.style.transform = `rotateY(${index * degree}deg) translateZ(${translateZ}px)`;
      item.style.zIndex = `${index}`;

      if (index !== itemArray.length - 1) {
        ThreeMotion.t4?.to(
          itemList,
          { duration: 0.5, rotationY: `-=${degree}deg` },
          `st3-${index + 1}`
        );
      }
    });

    ThreeMotion.t4
      .to(shortsWrap, { duration: 0.2, opacity: 0 }, "end")
      .to(shortsWrap, { duration: 0.5, y: "-50%" }, "end")
      .to(dom, { duration: 0.5 }, "end2");
  }

  if (dom.id === "contact") {
    const emailText = dom.querySelector(".emailTxt") as HTMLElement | null;

    if (!emailText) {
      return;
    }

    ThreeMotion.t5?.kill();
    ThreeMotion.t5 = gsap.timeline({
      scrollTrigger: {
        trigger: dom,
        scroller: root,
        start: "top top",
        end: "bottom 0",
        scrub: 0.5,
        toggleClass: "visible",
        onUpdate: scrollUpdate
      } as any
    });

    if (window.innerWidth <= 768) {
      ThreeMotion.t5
        .to(ModelInfo.p, { duration: 0.5, x: 0 }, "st0")
        .to(box.scale, { duration: 0.5, x: 0.7, y: 0.7, z: 0.7 }, "st0")
        .to(ModelInfo.r, { duration: 0.5, y: 3.3 }, "st0");
    } else {
      ThreeMotion.t5
        .to(ModelInfo.p, { duration: 0.5, x: -0.3 }, "st0")
        .to(ModelInfo.r, { duration: 0.5, y: 0.6 }, "st0");
    }

    ThreeMotion.t5
      .to(gym.position, { duration: 0.5, y: -1.5 }, "st0")
      .to(emailText, { duration: 0.5, opacity: 1, y: "-50%" }, "st0")
      .to(dom, { duration: 0.5 }, "end");
  }
}
