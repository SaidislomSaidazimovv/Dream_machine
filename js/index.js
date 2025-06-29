const iconData = [
  {
    id: "green",
    img: "../img/Cloud.webp",
    video: "../img/vd/green_vd.mp4",
    title: "Dream",
    subtitle: "of the Sky",
    rightTitle: "of",
    rightSubtitle: "heaven",
    bgColor: "#32CD32",
    description:
      "Explore the endless possibilities of sky and clouds, where dreams take flight and imagination soars beyond the horizon.",
    personImg: "../img/p1.png",
  },
  {
    id: "blue",
    img: "../img/flower.webp",
    video: "../img/vd/flower_vd.mp4",
    title: "Bloom",
    subtitle: "of Colors",
    rightTitle: "of",
    rightSubtitle: "beauty",
    bgColor: "#3939DD",
    description:
      "Witness the magnificent bloom of colors as nature reveals its most beautiful and vibrant expressions.",
    personImg: "../img/p2.png",
  },
  {
    id: "black",
    img: "../img/Black.webp",
    video: "../img/vd/black_vd.mp4",
    title: "New",
    subtitle: "freedoms",
    rightTitle: "of",
    rightSubtitle: "imagination",
    bgColor: "#ffffff",
    description:
      "Ideate, visualize, create videos, and share your dreams with the world, using our most powerful image and video AI models. Available now on iOS and the Web.",
    personImg: "../img/p3.png",
  },
  {
    id: "orange",
    img: "../img/Orange_Icon.webp",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    title: "Power",
    subtitle: "of Light",
    rightTitle: "of",
    rightSubtitle: "energy",
    bgColor: "#FFA500",
    description:
      "Harness the incredible power of light and energy, illuminating paths to new creative possibilities.",
    personImg: "../img/p4.png",
  },
  {
    id: "red",
    img: "../img/Wolf.webp",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "Strength",
    subtitle: "of Nature",
    rightTitle: "of",
    rightSubtitle: "wilderness",
    bgColor: "#F04B4B",
    description:
      "Experience the raw strength and untamed beauty of nature, where wild spirits run free and strong.",
    personImg: "../img/p5.png",
  },
];

let currentShuffledIcons = [];
let currentCenterIndex = 2;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createIcons() {
  const iconRow = document.getElementById("iconRow");
  const shuffledIcons = shuffleArray(iconData);

  currentShuffledIcons = [...shuffledIcons];
  currentCenterIndex = 2;

  iconRow.innerHTML = "";

  shuffledIcons.forEach((iconInfo, index) => {
    const iconDiv = document.createElement("div");
    iconDiv.className = "icon";
    iconDiv.id = `icon${index + 1}`;
    iconDiv.style.backgroundColor = iconInfo.bgColor;

    if (index === 2) {
      iconDiv.classList.add("center");
      iconDiv.innerHTML = `
              <img src="${iconInfo.img}" alt="icon" />
              <div class="expanding-bg" id="expandingBg"></div>
            `;
    } else {
      iconDiv.innerHTML = `<img src="${iconInfo.img}" alt="icon" />`;
    }

    iconDiv.dataset.video = iconInfo.video;
    iconDiv.dataset.title = iconInfo.title;
    iconDiv.dataset.subtitle = iconInfo.subtitle;
    iconDiv.dataset.rightTitle = iconInfo.rightTitle;
    iconDiv.dataset.rightSubtitle = iconInfo.rightSubtitle;
    iconDiv.dataset.description = iconInfo.description;
    iconDiv.dataset.bgColor = iconInfo.bgColor;
    iconDiv.dataset.personImg = iconInfo.personImg;
    iconRow.appendChild(iconDiv);
  });
}

function createFourIcons() {
  const videoPopup = document.getElementById("videoPopup");
  const iconRow = document.getElementById("iconRow");

  document.body.style.backdropFilter = "blur(10px)";
  document.body.style.webkitBackdropFilter = "blur(10px)";

  const centerIconData = currentShuffledIcons[currentCenterIndex];

  iconRow.innerHTML = "";
  iconRow.style.position = "relative";
  iconRow.style.display = "flex";
  iconRow.style.justifyContent = "center";
  iconRow.style.alignItems = "center";
  iconRow.style.padding = "0 50px";
  iconRow.style.gap = "30px";

  currentShuffledIcons.forEach((iconInfo, index) => {
    const iconDiv = document.createElement("div");
    iconDiv.className =
      index === currentCenterIndex ? "center-replacement-icon" : "side-icon";

    if (index === currentCenterIndex) {
      const centerColor = iconInfo.bgColor;
      const gradientColor = generateGradientFromColor(centerColor);

      iconDiv.style.width = "60px";
      iconDiv.style.height = "60px";
      iconDiv.style.borderRadius = "30px";
      iconDiv.style.background = gradientColor;
      iconDiv.style.backdropFilter = "blur(20px)";
      iconDiv.style.webkitBackdropFilter = "blur(20px)";
      iconDiv.style.transform = "scale(1.1)";
      iconDiv.style.zIndex = "10";
      iconDiv.style.boxShadow = `
        0 25px 50px ${centerColor}40,
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 2px 0 rgba(255, 255, 255, 0.3)
      `;
    } else {
      iconDiv.style.width = "60px";
      iconDiv.style.height = "60px";
      iconDiv.style.borderRadius = "30px";
      iconDiv.style.background = `
        linear-gradient(135deg, 
          rgba(255, 255, 255, 0.2) 0%, 
          rgba(255, 255, 255, 0.05) 50%, 
          rgba(0, 0, 0, 0.05) 100%
        ), 
        linear-gradient(45deg, ${iconInfo.bgColor}30, ${iconInfo.bgColor}10)
      `;
      iconDiv.style.backdropFilter = "blur(15px)";
      iconDiv.style.webkitBackdropFilter = "blur(15px)";
      iconDiv.style.transform = "translateY(20px) scale(0.9)";
      iconDiv.style.boxShadow = `
        0 15px 30px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `;
    }

    iconDiv.style.position = "relative";
    iconDiv.style.opacity = "0";
    iconDiv.style.transition = "all 0.6s ease";
    iconDiv.style.cursor = "pointer";
    iconDiv.style.overflow = "hidden";
    iconDiv.style.flexShrink = "0";

    iconDiv.innerHTML = `
      <img src="${iconInfo.img}" alt="icon" 
           style="width: 70%; height: 70%; object-fit: cover; 
                  position: absolute; top: 50%; left: 50%; 
                  transform: translate(-50%, -50%); 
                  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));" />
    `;

    iconDiv.dataset.video = iconInfo.video;
    iconDiv.dataset.title = iconInfo.title;
    iconDiv.dataset.subtitle = iconInfo.subtitle;
    iconDiv.dataset.rightTitle = iconInfo.rightTitle;
    iconDiv.dataset.rightSubtitle = iconInfo.rightSubtitle;
    iconDiv.dataset.description = iconInfo.description;
    iconDiv.dataset.bgColor = iconInfo.bgColor;
    iconDiv.dataset.personImg = iconInfo.personImg;

    addMouseFollowEffect(iconDiv);

    iconRow.appendChild(iconDiv);

    setTimeout(() => {
      iconDiv.style.opacity = "1";
      if (index === currentCenterIndex) {
        iconDiv.style.transform = "scale(1.2)";
      } else {
        iconDiv.style.transform = "translateY(0) scale(0.9)";
      }
    }, 300);
  });
}

function generateGradientFromColor(color) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const darkerR = Math.max(0, r - 50);
  const darkerG = Math.max(0, g - 50);
  const darkerB = Math.max(0, b - 50);

  const darkestR = Math.max(0, r - 80);
  const darkestG = Math.max(0, g - 80);
  const darkestB = Math.max(0, b - 80);

  return `linear-gradient(135deg, 
    rgb(${r}, ${g}, ${b}) 0%, 
    rgb(${darkerR}, ${darkerG}, ${darkerB}) 50%, 
    rgb(${darkestR}, ${darkestG}, ${darkestB}) 100%)`;
}

function addMouseFollowEffect(element) {
  let isHovered = false;

  element.addEventListener("mouseenter", () => {
    isHovered = true;
    element.style.transition = "transform 0.1s ease-out";
  });

  element.addEventListener("mouseleave", () => {
    isHovered = false;
    element.style.transition = "transform 0.3s ease-out";
    element.style.transform = element.classList.contains(
      "center-replacement-icon"
    )
      ? "scale(1.2)"
      : "translateY(0) scale(0.9)";
  });

  element.addEventListener("mousemove", (e) => {
    if (!isHovered) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = (mouseX - centerX) * 0.3;
    const deltaY = (mouseY - centerY) * 0.3;

    const baseTransform = element.classList.contains("center-replacement-icon")
      ? "scale(1.2)"
      : "translateY(0) scale(0.9)";

    element.style.transform = `${baseTransform} translate(${deltaX}px, ${deltaY}px)`;
  });
}

let centerIconRotationInterval;

function startCenterIconRotation(initialIconData, startIndex) {
  return;
}

function stopCenterIconRotation() {
  clearInterval(centerIconRotationInterval);
}

let scrollStep = 0;
let previousScroll = 0;

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    scrollStep = Math.min(scrollStep + 1, 5);
  } else if (e.deltaY < 0) {
    scrollStep = Math.max(scrollStep - 1, 0);
  }

  document.body.setAttribute("data-scroll", scrollStep);
  if (scrollStep >= 1) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }

  if ((previousScroll === 4 || previousScroll === 5) && scrollStep === 3) {
    resetToScroll3Content();
  }

  if (scrollStep === 4) {
    closeVideoShowFourIcons();
  }

  if (scrollStep === 5) {
    showAnimatedTextFromIcon();
  }

  previousScroll = scrollStep;
});

function resetToScroll3Content() {
  const video = document.getElementById("mainVideo");
  const videoPopup = document.getElementById("videoPopup");
  const leftText = document.getElementById("leftText");
  const rightTitle = document.getElementById("rightTitle");
  const tryNow = document.querySelector(".try-now-button");
  const brand = document.querySelector(".dream-machine-brand");
  const lumaIcon = document.getElementById("lumaIcon");
  const profileImage = document.getElementById("profileImage");
  const iconRow = document.getElementById("iconRow");
  const description = document.getElementById("description");

  document.body.style.backdropFilter = "none";
  document.body.style.webkitBackdropFilter = "none";

  stopCenterIconRotation();

  iconRow.innerHTML = "";
  iconRow.style.position = "";
  iconRow.style.display = "";
  iconRow.style.justifyContent = "";
  iconRow.style.alignItems = "";
  iconRow.style.padding = "";

  currentShuffledIcons.forEach((iconInfo, index) => {
    const iconDiv = document.createElement("div");
    iconDiv.className = "icon";
    iconDiv.id = `icon${index + 1}`;
    iconDiv.style.backgroundColor = iconInfo.bgColor;

    if (index === currentCenterIndex) {
      iconDiv.classList.add("center");
      iconDiv.innerHTML = `
              <img src="${iconInfo.img}" alt="icon" />
              <div class="expanding-bg" id="expandingBg"></div>
            `;
    } else {
      iconDiv.innerHTML = `<img src="${iconInfo.img}" alt="icon" />`;
    }

    iconDiv.dataset.video = iconInfo.video;
    iconDiv.dataset.title = iconInfo.title;
    iconDiv.dataset.subtitle = iconInfo.subtitle;
    iconDiv.dataset.rightTitle = iconInfo.rightTitle;
    iconDiv.dataset.rightSubtitle = iconInfo.rightSubtitle;
    iconDiv.dataset.description = iconInfo.description;
    iconDiv.dataset.bgColor = iconInfo.bgColor;
    iconDiv.dataset.personImg = iconInfo.personImg;
    iconRow.appendChild(iconDiv);
  });

  const centerIcon = document.querySelector(".icon.center");

  if (centerIcon) {
    const source = document.createElement("source");
    source.src = centerIcon.dataset.video;
    source.type = "video/mp4";
    video.innerHTML = "";
    video.appendChild(source);
    video.load();
    video.play();
  }

  videoPopup.classList.add("show");
  leftText.style.display = "block";
  rightTitle.style.display = "block";
  tryNow.style.display = "block";
  brand.style.display = "block";
  lumaIcon.style.display = "block";
  profileImage.classList.add("show");
  description.style.display = "block";

  const existingTextContainer = document.querySelector(
    ".animated-text-container"
  );
  if (existingTextContainer) existingTextContainer.remove();
}

function closeVideoShowFourIcons() {
  const video = document.getElementById("mainVideo");
  const videoPopup = document.getElementById("videoPopup");
  const profileImage = document.getElementById("profileImage");
  const iconRow = document.getElementById("iconRow");

  video.pause();
  video.removeAttribute("src");
  video.load();
  videoPopup.classList.remove("show");

  document.getElementById("leftText").style.display = "none";
  document.getElementById("rightTitle").style.display = "none";
  document.querySelector(".try-now-button").style.display = "none";
  document.querySelector(".dream-machine-brand").style.display = "none";
  document.getElementById("lumaIcon").style.display = "none";
  document.getElementById("description").style.display = "none";

  profileImage.classList.add("show");
  profileImage.style.display = "block";
  profileImage.style.opacity = "1";

  createFourIcons();
  iconRow.style.display = "flex";

  const existingTextContainer = document.querySelector(
    ".animated-text-container"
  );
  if (existingTextContainer) existingTextContainer.remove();
}

function showAnimatedTextFromIcon() {
  const centerIcon = document.querySelector(".center-replacement-icon");
  const iconRow = document.getElementById("iconRow");
  if (!centerIcon || !iconRow) return;

  const existing = document.querySelector(".icon-text-wrapper");
  if (existing) existing.remove();

  const centerIconData = currentShuffledIcons[currentCenterIndex];
  const bgColor = centerIconData.bgColor.toLowerCase();

  const isWhiteBg = bgColor === "#ffffff";
  const textColor = isWhiteBg ? "black" : "white";

  let customText = "";
  switch (bgColor) {
    case "#f04b4b":
      customText = "Cinematic visuals for your film";
      break;
    case "#ffffff":
      customText = "Gorgeous visuals for fashion";
      break;
    case "#3939dd":
      customText = "Beautiful visuals for your store";
      break;
    case "#ffa500":
      customText = "Lovely visuals for interior design";
      break;
    case "#32cd32":
      customText = "Exciting visuals for your music";
      break;
    default:
      customText = centerIconData.title;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "icon-text-wrapper";
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "center";
  wrapper.style.backgroundColor = bgColor;
  wrapper.style.borderRadius = "40px";
  wrapper.style.padding = "12px 20px 12px 60px";
  wrapper.style.transition = "width 0.8s ease";
  wrapper.style.overflow = "visible";
  wrapper.style.position = "relative";
  wrapper.style.height = "50px";
  wrapper.style.width = "80px";
  wrapper.style.marginLeft = "20px";
  wrapper.style.zIndex = "5";

  const iconImg = document.createElement("img");
  iconImg.src = centerIcon.querySelector("img").src;
  iconImg.alt = "icon";
  iconImg.style.width = "90px";
  iconImg.style.height = "70px";
  iconImg.style.objectFit = "cover";
  iconImg.style.position = "absolute";
  iconImg.style.left = "-33px";
  iconImg.style.top = "50%";
  iconImg.style.transform = "translateY(-70%)";
  iconImg.style.zIndex = "10";
  iconImg.style.padding = "5px";

  const textWrap = document.createElement("div");
  textWrap.style.display = "flex";
  textWrap.style.alignItems = "center";
  textWrap.style.opacity = "0";
  textWrap.style.transition = "opacity 0.6s ease";
  textWrap.style.height = "100%";
  textWrap.style.justifyContent = "center";

  const word = document.createElement("span");
  word.className = "animated-word word1";
  word.textContent = customText;
  word.style.color = textColor;

  textWrap.appendChild(word);
  wrapper.appendChild(iconImg);
  wrapper.appendChild(textWrap);
  centerIcon.replaceWith(wrapper);

  const totalTextWidth =
    getTextWidth(customText, "600 18px Helvetica Neue") + 100;

  setTimeout(() => {
    wrapper.style.width = `${80 + totalTextWidth}px`;
    textWrap.style.opacity = "1";
  }, 100);
}

function getTextWidth(text, font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  return context.measureText(text).width;
}

function showTextOnCenterIcon() {
  const centerIcon = document.querySelector(".center-replacement-icon");

  if (!centerIcon) return;

  const existingText = document.querySelector(".center-icon-text");
  if (existingText) return;

  const centerIconData = currentShuffledIcons[currentCenterIndex];

  const textBox = document.createElement("div");
  textBox.className = "center-icon-text";
  textBox.innerHTML = `
    <h2 style="font-size:24px; margin:0; color:white; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">${centerIconData.title}</h2>
  `;

  textBox.style.position = "absolute";
  textBox.style.top = "70%";
  textBox.style.left = "65%";
  textBox.style.transform = "translateX(-50%)";
  textBox.style.opacity = "0";
  textBox.style.transition = "opacity 1s ease, transform 1s ease";

  centerIcon.appendChild(textBox);

  setTimeout(() => {
    textBox.style.opacity = "1";
    textBox.style.transform = "translateX(-50%) translateY(-10px)";
  }, 100);
}

function openVideoPopup(centerIcon) {
  const video = document.getElementById("mainVideo");
  const mainTitle = document.getElementById("mainTitle");
  const mainSubtitle = document.getElementById("mainSubtitle");
  const rightTitle = document.getElementById("rightTitle");
  const rightSubtitle = document.getElementById("rightSubtitle");
  const description = document.getElementById("description");
  const expandingBg = document.getElementById("expandingBg");

  video.innerHTML = `<source src="${centerIcon.dataset.video}" type="video/mp4" />`;
  video.load();

  mainTitle.innerHTML = `${centerIcon.dataset.title} <br> <span>${centerIcon.dataset.subtitle}</span>`;
  rightTitle.innerHTML = `${centerIcon.dataset.rightTitle} <br> <span>${centerIcon.dataset.rightSubtitle}</span>`;
  description.textContent = centerIcon.dataset.description;
  expandingBg.style.backgroundColor = centerIcon.dataset.bgColor;
  expandingBg.classList.add("expand");

  setTimeout(() => {
    document.getElementById("videoPopup").classList.add("show");

    setTimeout(() => {
      const profileImage = document.getElementById("profileImage");
      profileImage.src = centerIcon.dataset.personImg;
      profileImage.classList.add("show");
      setTimeout(() => {
        lumaIcon.classList.add("show");
      }, 300);
    }, 100);
  }, 1200);
}

document.addEventListener("DOMContentLoaded", function () {
  createIcons();
  setTimeout(() => {
    const centerIcon = document.querySelector(".icon.center");
    if (centerIcon) {
      openVideoPopup(centerIcon);
    }
  }, 2000);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "r" || e.key === "R") {
    location.reload();
  }
});

const style = document.createElement("style");
style.textContent = `
  .side-icon {
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    width: 60px !important;
    height: 60px !important;
    border-radius: 30px !important;
    padding-left: 9px !important;
    padding-right: 9px !important;
    box-shadow: 
      0 15px 30px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
  }

  .side-icon:hover {
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
  }

  .center-replacement-icon {
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    width: 60px !important;
    height: 60px !important;
    border-radius: 30px !important;
    padding-left: 17px !important;
    padding-right: 17px !important;
  }

  body[data-scroll="4"] {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .center-replacement-icon img,
  .side-icon img {
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    pointer-events: none;
  }

  .animated-text-container {
    position: absolute;
    z-index: 20;
    pointer-events: none;
  }

  .text-background {
    position: absolute;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .animated-word {
    font-family: 'Helvetica Neue', sans-serif;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.5px;
  }

  @keyframes typeWriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  .word1 {
    animation: typeWriter 0.8s steps(20) forwards;
    animation-delay: 0.5s;
  }

  .word2 {
    animation: typeWriter 1s steps(25) forwards;
    animation-delay: 1s;
  }
`;
document.head.appendChild(style);
