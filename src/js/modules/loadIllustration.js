import canUseWebp from "../helpers/canUseWebp";

export const loadImages = async () => {
  return new Promise((resolve, reject) => {
    const layerContainer = document.querySelector(".js-layer-container");
    const names = Array.from(document.querySelectorAll(".js-intro-names"));

    // подставляем остальные части иллюстрации
    for (let i = 1; i < 6; i++) {
      const newImg = new Image;
      const imgurl = canUseWebp() ? `assets/images/intro/layers/layer${i}_web.webp` : `assets/images/intro/layers/layer${i}_${i}.png`

      newImg.src = imgurl;
      newImg.classList.add("intro-layer__image", "js-intro-layer");
      newImg.setAttribute("alt", "Layer");
      newImg.onload = () => {
        names[i].classList.add("is-loaded");

        layerContainer.append(newImg);

        if (i === 5) {
          resolve();
        }
      };
    };
  })
};
