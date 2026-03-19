import * as THREE from "three";

import DataBase from "DataBase";

const threeLoading = new THREE.LoadingManager();

const mainImageAssets = Array.from(
  new Set([
    "/images/pubgyu.png",
    ...DataBase.flatMap((item) => [item.thumbImg, ...item.images])
  ])
);

const preloadImageAssets = async (
  onProgress?: (loadedCount: number, totalCount: number) => void
) => {
  let loadedCount = 0;

  onProgress?.(loadedCount, mainImageAssets.length);

  const loadImage = (src: string) =>
    new Promise<void>((resolve) => {
      const image = new Image();
      let done = false;

      const complete = () => {
        if (done) {
          return;
        }

        done = true;
        loadedCount += 1;
        onProgress?.(loadedCount, mainImageAssets.length);
        resolve();
      };

      image.onload = complete;
      image.onerror = complete;
      image.src = src;

      if (image.complete) {
        complete();
      }
    });

  await Promise.all(mainImageAssets.map(loadImage));
};

const waitForDocumentFonts = async () => {
  if (!("fonts" in document)) {
    return;
  }

  await document.fonts.ready;
};

export { preloadImageAssets, threeLoading, waitForDocumentFonts };
