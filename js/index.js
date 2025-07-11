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
    video: "../img/vd/blue_main.mp4",
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

const backgroundVideos = {
  "#32cd32": "../img/vd/first_green.mp4",
  "#3939dd": "../img/vd/first_blue.mp4",
  "#ffffff": "../img/vd/first_gray.mp4",
  "#ffa500": "../img/vd/first_orange.mp4",
  "#f04b4b": "../img/vd/first_red.mp4",
};

const newSideVideos = {
  "#32cd32": "../img/vd/second_green.mp4",
  "#3939dd": "../img/vd/second_blue.mp4",
  "#ffffff": "../img/vd/second_gray.mp4",
  "#ffa500": "../img/vd/second_orange.mp4",
  "#f04b4b": "../img/vd/second_red.mp4",
};

const thirdBackgroundVideos = {
  "#32cd32": "../img/vd/third_green.mp4",
  "#3939dd": "../img/vd/third_blue.mp4",
  "#ffffff": "../img/vd/third_gray.mp4",
  "#ffa500": "../img/vd/third_orange.mp4",
  "#f04b4b": "../img/vd/third_red.mp4",
};

const fourthBackgroundVideos = {
  "#32cd32": "../img/vd/fourth_green.mp4",
  "#3939dd": "../img/vd/fourth_blue.mp4",
  "#ffffff": "../img/vd/fourth_gray.mp4",
  "#ffa500": "../img/vd/fourth_orange.mp4",
  "#f04b4b": "../img/vd/fourth_red.mp4",
};

const fifthBackgroundVideos = {
  "#32cd32": "../img/vd/five_green.mp4",
  "#3939dd": "../img/vd/five_blue.mp4",
  "#ffffff": "../img/vd/five_gray.mp4",
  "#ffa500": "../img/vd/five_orange.mp4",
  "#f04b4b": "../img/vd/five_red.mp4",
};

const sixthBackgroundVideos = {
  "#32cd32": "../img/vd/sixth_green.mp4",
  "#3939dd": "../img/vd/sixth_blue.mp4",
  "#ffffff": "../img/vd/sixth_gray.mp4",
  "#ffa500": "../img/vd/sixth_orange.mp4",
  "#f04b4b": "../img/vd/sixth_red.mp4",
};

const seventhBackgroundVideos = {
  "#32cd32": "../img/vd/seventh_green.mp4",
  "#3939dd": "../img/vd/seventh_blue.mp4",
  "#ffffff": "../img/vd/seventh_gray.mp4",
  "#ffa500": "../img/vd/seventh_orange.mp4",
  "#f04b4b": "../img/vd/seventh_red.mp4",
};

const eighthBackgroundVideos = {
  "#32cd32": "../img/eight_green.jpg",
  "#3939dd": "../img/eight_blue.jpg",
  "#ffffff": "../img/eight_gray.jpg",
  "#ffa500": "../img/eight_orange.jpg",
  "#f04b4b": "../img/eight_red.jpg",
};

const thumb = document.getElementById("scrollbarThumb");
const maxStep = 53;

function updateThumb(scrollStep) {
  const trackHeight = window.innerHeight;
  const thumbHeight = 20;
  const maxTop = trackHeight - thumbHeight;
  const stepHeight = maxTop / maxStep;

  const top = Math.min(scrollStep * stepHeight, maxTop);
  thumb.style.top = `${top}px`;
}

const originalWheelHandler = window.onwheel || (() => {});
window.addEventListener("wheel", (e) => {
  requestAnimationFrame(() => updateThumb(scrollStep));
});

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
  if (iconRow.getAttribute("data-at-top") !== "true") {
    iconRow.style.position = "relative";
    iconRow.style.display = "flex";
    iconRow.style.justifyContent = "center";
    iconRow.style.alignItems = "center";
    iconRow.style.padding = "0 50px";
    iconRow.style.gap = "25px";
  }
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
  setupIconClickSwap();
}

function setupIconClickSwap() {
  const iconRow = document.getElementById("iconRow");
  const icons = iconRow.querySelectorAll(
    "#iconRow .side-icon, #iconRow .center-replacement-icon"
  );

  icons.forEach((icon, clickedIndex) => {
    icon.addEventListener("click", () => {
      if (clickedIndex === currentCenterIndex) return;

      const centerIconData = currentShuffledIcons[currentCenterIndex];
      const clickedIconData = currentShuffledIcons[clickedIndex];

      currentShuffledIcons[currentCenterIndex] = clickedIconData;
      currentShuffledIcons[clickedIndex] = centerIconData;

      createFourIcons();

      setTimeout(() => {
        showAnimatedTextFromIcon();
      }, 500);

      const profileImage = document.getElementById("profileImage");
      profileImage.classList.remove("show");
      profileImage.style.opacity = "0";
      setTimeout(() => {
        profileImage.src = clickedIconData.personImg;
        profileImage.classList.add("show");
        profileImage.style.opacity = "1";
      }, 400);

      if (scrollStep === 6) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();
        const newVideo = backgroundVideos[newBgColor] || "";

        if (newVideo) {
          playBackgroundVideo(newVideo);
        }
      }

      if (scrollStep === 7) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newSideVideo = newSideVideos[newBgColor] || "";
        const newBackgroundVideo = backgroundVideos[newBgColor] || "";

        if (newBackgroundVideo) {
          playBackgroundVideo(newBackgroundVideo);
        } else {
          stopBackgroundVideo();
        }

        if (newSideVideo) {
          showNextSideVideoAnimated(newSideVideo);
        } else {
          hideSideVideo();
        }
      }

      if (scrollStep === 8) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newZoomedBackgroundVideo = backgroundVideos[newBgColor] || "";
        const newZoomedSideVideo = newSideVideos[newBgColor] || "";

        if (newZoomedBackgroundVideo) {
          playBackgroundVideoZoomed(newZoomedBackgroundVideo);
        } else {
          stopBackgroundVideo();
        }

        if (newZoomedSideVideo) {
          showNextSideVideoZoomed(newZoomedSideVideo);
        } else {
          hideSideVideo();
        }
      }

      if (scrollStep === 9) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newZoomedBackgroundVideo = backgroundVideos[newBgColor] || "";
        const newZoomedSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";

        if (newZoomedBackgroundVideo) {
          playBackgroundVideoZoomed(newZoomedBackgroundVideo);
        } else {
          stopBackgroundVideo();
        }

        if (newZoomedSideVideo) {
          showNextSideVideoZoomed(newZoomedSideVideo);
        } else {
          hideSideVideo();
        }

        if (newThirdVideo) {
          playThirdBackgroundVideoZoomed(newThirdVideo);
        } else {
          hideThirdVideo();
        }
      }

      if (scrollStep === 10) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newZoomedBackgroundVideo = backgroundVideos[newBgColor] || "";
        const newZoomedSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";

        if (newZoomedBackgroundVideo) {
          playBackgroundVideoZoomedNoScale(newZoomedBackgroundVideo);
        }

        if (newZoomedSideVideo) {
          showNextSideVideoZoomedNoScale(newZoomedSideVideo);
        }

        if (newThirdVideo) {
          playThirdBackgroundVideoZoomedNoScale(newThirdVideo);
        }
      }

      if (scrollStep === 11) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newZoomedBackgroundVideo = backgroundVideos[newBgColor] || "";
        const newZoomedSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";

        if (newZoomedBackgroundVideo) {
          playBackgroundVideoZoomedNoScale(newZoomedBackgroundVideo);
        }

        if (newZoomedSideVideo) {
          showNextSideVideoZoomedNoScale(newZoomedSideVideo);
        }

        if (newThirdVideo) {
          playThirdBackgroundVideoZoomedNoScale(newThirdVideo);
        }
      }

      if (scrollStep === 12) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";

        if (newBgVideo) {
          replaceBackgroundVideoSrcOnly(newBgVideo);
        }

        if (newSideVideo) {
          replaceSideVideoSrcOnly(newSideVideo);
        }

        if (newThirdVideo) {
          replaceThirdVideoSrcOnly(newThirdVideo);
        }

        if (newFourthVideo) {
          playFourthBackgroundVideoZoomed(newFourthVideo);
        } else {
          hideFourthVideo();
        }
      }

      if (scrollStep === 13) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);

        scaleUpAllVideosLevel3();
      }

      if (scrollStep === 14) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) playFifthBackgroundVideoZoomed(newFifthVideo);
        else hideFifthVideo();
      }

      if (scrollStep === 15) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) {
          updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        }
        if (newSixthVideo) {
          playSixthBackgroundVideoZoomed(newSixthVideo);
        }

        scale2345VideosExtra();
      }

      if (scrollStep === 16) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);

        if (newFifthVideo) {
          updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        }

        if (newSixthVideo) {
          updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        }

        scale3456VideosIn16Scroll();
      }

      if (scrollStep === 17) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);

        scale3456VideosIn17Scroll();
      }

      if (scrollStep === 18) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);

        scaleThirdVideoExtra18();
        scaleFourthVideoExtra18();
        scaleFifthVideoExtra18();
        scaleSixthVideoExtra18();
        scaleSeventhVideoExtra18();
      }

      if (scrollStep === 19) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleThirdVideoExtra19();
        scaleFourthVideoExtra19();
        scaleFifthVideoExtra19();
        scaleSixthVideoExtra19();
        scaleSeventhVideoExtra19();
        scaleEighthVideoExtra19();
      }

      if (scrollStep === 20) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleThirdVideoExtra20();
        scaleFourthVideoExtra20();
        scaleFifthVideoExtra20();
        scaleSixthVideoExtra20();
        scaleSeventhVideoExtra20();
        scaleEighthVideoExtra20();
      }

      if (scrollStep === 21) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleFifthVideoExtra21();
        scaleSixthVideoExtra21();
        scaleSeventhVideoExtra21();
        scaleEighthVideoExtra21();
      }

      if (scrollStep === 22) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleFifthVideoExtra22();
        scaleSixthVideoExtra22();
        scaleSeventhVideoExtra22();
        scaleEighthVideoExtra22();
      }

      if (scrollStep === 23) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleSixthVideoExtra23();
        scaleSeventhVideoExtra23();
        scaleEighthVideoExtra23();
      }

      if (scrollStep === 24) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleSeventhVideoExtra24();
        scaleEighthVideoExtra24();
      }

      if (scrollStep === 25) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleSeventhVideoExtra25();
        scaleEighthVideoExtra25();
      }

      if (scrollStep === 26) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra25();
      }

      if (scrollStep === 27) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra25();
      }

      if (scrollStep === 28) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra25();
      }

      if (scrollStep === 29) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra25();
      }

      if (scrollStep === 30) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra30();
        animateIconsToTop30();
      }

      if (scrollStep === 31) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra31();
        animateIconsToTop30();
      }

      if (scrollStep === 32) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra32();
        animateIconsToTop30();
      }

      if (scrollStep === 33) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra33();
        animateIconsToTop30();
      }

      if (scrollStep === 34) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra34();
        animateIconsToTop30();
      }

      if (scrollStep === 35) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        transitionCircleToWhiteFrom35();
        animateIconsToTop30();
      }

      if (scrollStep === 36) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        expandCircleHorizontally36();
        animateIconsToTop30();
      }

      if (scrollStep === 37) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        expandCircleHorizontallyMore37();
        animateIconsToTop30();
      }

      if (scrollStep === 38) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra38();
        animateIconsToTop30();
      }

      if (scrollStep === 39) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra38();
        animateIconsToTop30();
      }

      if (scrollStep === 40) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra38();
        animateIconsToTop30();
      }

      if (scrollStep === 41) {
        const newBgColor = clickedIconData.bgColor.toLowerCase();

        const newBgVideo = backgroundVideos[newBgColor] || "";
        const newSideVideo = newSideVideos[newBgColor] || "";
        const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
        const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
        const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
        const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
        const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
        const newEighthVideo = eighthBackgroundVideos?.[newBgColor] || "";

        if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
        if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
        if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
        if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
        if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
        if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
        if (newSeventhVideo)
          updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
        if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

        scaleEighthVideoExtra38();
        animateIconsToTop30();
      }

      const newColor = icon.dataset.bgColor?.toLowerCase();
      if (!newColor) return;

      if (isStep42Active) {
        last42ImageBgColor = newColor;
        const container = document.getElementById("imageAroundCircleContainer");

        if (container) {
          setTimeout(() => {
            showThreeImagesAroundCircle(newColor);
          }, 300);
        } else {
          showThreeImagesAroundCircle(newColor);
        }

        updatePromptText(newColor);

        if (isStep48Active) {
          handleScrollStep48();
        }
        last42ImageBgColor = newColor;
      }
    });
  });
}

function updateSixthBackgroundVideoSrcOnly(src) {
  const video = document.getElementById("sixthVideo");
  if (video && video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.setAttribute("data-last-src", src);
    video.load();
    video.play().catch((e) => console.error("6th video play error", e));
  }
}

function updateSeventhBackgroundVideoSrcOnly(src) {
  const video = document.getElementById("seventhVideo");

  if (!video) return;

  const lastSrc = video.getAttribute("data-last-src");

  if (lastSrc === src) return;

  video.src = src;
  video.setAttribute("data-last-src", src);

  video.play().catch((e) => {
    console.error("7th video play error:", e);
  });
}

function resetFourthVideoZoom() {
  const fourthContainer = document.getElementById("fourthVideoContainer");
  const fourthVideo = document.getElementById("fourthVideo");

  if (!fourthContainer || !fourthVideo) return;

  fourthContainer.style.transition = "transform 1s ease, opacity 1s ease";
  fourthContainer.style.transform = "translate(-50%, -50%) scale(1)";
  fourthContainer.style.opacity = "0";

  setTimeout(() => {
    fourthVideo.pause();
    fourthVideo.removeAttribute("src");
    fourthVideo.load();
    fourthContainer.style.display = "none";
  }, 800);
}

function replaceBackgroundVideoSrcOnly(src) {
  const videoContainer = document.getElementById("backgroundVideoContainer");
  const video = document.getElementById("backgroundVideo");
  if (!videoContainer || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
    video.play();
  }
}

function replaceSideVideoSrcOnly(src) {
  const container = document.getElementById("sideVideoContainer");
  const video = document.getElementById("sideVideo");
  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
    video.play();
  }
}

function replaceThirdVideoSrcOnly(src) {
  const container = document.getElementById("thirdVideoContainer");
  const video = document.getElementById("thirdVideo");
  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
    video.play();
  }
}

function playBackgroundVideoZoomedNoScale(src) {
  const container = document.getElementById("backgroundVideoContainer");
  const video = document.getElementById("backgroundVideo");
  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
  }

  container.style.display = "block";
  video.play();
}

function showNextSideVideoZoomedNoScale(src) {
  const container = document.getElementById("sideVideoContainer");
  const video = document.getElementById("sideVideo");
  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
  }

  container.style.display = "block";
  video.play();
}

function playThirdBackgroundVideoZoomedNoScale(src) {
  const container = document.getElementById("thirdVideoContainer");
  const video = document.getElementById("thirdVideo");
  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
  }

  container.style.display = "block";
  video.play();
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
let lastPlayedBackgroundSrc = "";
let lastPlayedSideSrc = "";

window.addEventListener("wheel", (e) => {
  const prev = scrollStep;

  if (e.deltaY > 0) {
    scrollStep = Math.min(scrollStep + 1, 53);
  } else if (e.deltaY < 0) {
    scrollStep = Math.max(scrollStep - 1, 0);
  }

  document.body.setAttribute("data-scroll", scrollStep);
  if (scrollStep >= 1) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }

  handleScrollStep(scrollStep);

  if (scrollStep < 34) {
    hideLeftText34();
  }

  if (scrollStep === 30) {
    hideHeaderButtonsOnScroll30();
  }

  if (scrollStep === 29) {
    showCenterTypingText18();
    showCenterDescriptionText18();
    resetIconsToCenterFrom30();
    resetEighthVideoFrom30();
    resetHeaderButtonsFromScroll30();
  }

  if (scrollStep === 18) {
    resetFourthVideoFrom19();
    resetFifthVideoFrom19();
    resetSixthVideoFrom19();
    resetSeventhVideoFrom19();
    resetEighthVideoFrom19();
  }

  if (scrollStep === 17) {
    const existing = document.querySelector(".center-typing-text-18");
    if (existing) existing.remove();
    hideCenterDescriptionText18();
    resetThirdVideoFrom18();
    resetFourthVideoFrom18();
    resetFifthVideoFrom18();
    resetSixthVideoFrom18();
    resetSeventhVideoFrom18();
  }

  if (scrollStep === 16 && e.deltaY < 0) {
    hideSeventhVideo();
    reset3456VideosFrom17Scroll();
  }

  if (scrollStep === 15) {
    animateHeaderTextIn();
  }

  if (previousScroll === 15 && scrollStep < 16) {
    normalizeFourBackgroundVideos();
    hideSixthVideo();
    reset3456VideosToDefault();
  }

  if (scrollStep < 14) {
    hideFifthVideo();
  }

  if (previousScroll === 13 && scrollStep === 12) {
    resetAllVideoScalesToLevel2();
  }

  if (previousScroll === 12 && scrollStep < 12) {
    hideFourthVideo();
  }

  if (previousScroll === 11 && scrollStep === 10) {
    scaleUpAllVideos();
  }

  if (previousScroll === 10 && scrollStep === 9) {
    resetZoomedVideos();
    resetThirdVideoZoom();
  }

  if (previousScroll === 9 && scrollStep < 9) {
    removeDreamMachineHeader();
    hideThirdVideo();
  }

  if (prev === 8 && (scrollStep === 7 || scrollStep === 6)) {
    resetZoomedVideos();
  }

  if (prev === 7 && scrollStep === 6) {
    hideSideVideo();
  }

  if (prev === 6 && scrollStep === 5) {
    stopBackgroundVideo();
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

  if (scrollStep === 6) {
    showAnimatedTextFromIcon();

    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const bgColor = centerIconData.bgColor.toLowerCase();
    const videoURL = backgroundVideos[bgColor] || "";

    if (videoURL) {
      playBackgroundVideo(videoURL);
    } else {
      stopBackgroundVideo();
    }
  } else if (scrollStep === 7) {
    showAnimatedTextFromIcon();

    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const bgColor = centerIconData.bgColor.toLowerCase();
    const videoSideURL = newSideVideos[bgColor] || "";
    const backgroundURL = backgroundVideos[bgColor] || "";

    if (backgroundURL) {
      playBackgroundVideo(backgroundURL);
    }

    if (videoSideURL) {
      showNextSideVideoAnimated(videoSideURL);
    } else {
      hideSideVideo();
    }
  } else if (scrollStep === 8) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const bgColor = centerIconData.bgColor.toLowerCase();
    const sideVideoURL = newSideVideos[bgColor] || "";
    const backgroundURL = backgroundVideos[bgColor] || "";

    setTimeout(() => {
      showAnimatedTextFromIcon();
    }, 100);

    if (backgroundURL) {
      playBackgroundVideoZoomed(backgroundURL);
    }

    if (sideVideoURL) {
      showNextSideVideoZoomed(sideVideoURL);
    } else {
      hideSideVideo();
      setTimeout(resetZoomedVideos, 100);
    }

    const profileImage = document.getElementById("profileImage");
    profileImage.classList.add("show");
    profileImage.style.opacity = "1";
    profileImage.src = centerIconData.personImg;
  }

  if (scrollStep === 9) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const bgColor = centerIconData.bgColor.toLowerCase();
    const enhancedBackgroundURL = backgroundVideos[bgColor] || "";
    const enhancedSideVideoURL = newSideVideos[bgColor] || "";

    const thirdVideoURL = thirdBackgroundVideos?.[bgColor] || "";

    if (enhancedBackgroundURL) {
      playBackgroundVideoEnhancedZoom(enhancedBackgroundURL);
    } else {
      stopBackgroundVideo();
    }

    if (enhancedSideVideoURL) {
      showNextSideVideoEnhancedZoom(enhancedSideVideoURL);
    } else {
      hideSideVideo();
    }

    if (thirdVideoURL) {
      playThirdBackgroundVideoZoomed(thirdVideoURL);
    }

    setTimeout(() => {
      renderDreamMachineHeader();
    }, 300);
  }

  if (scrollStep === 10) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const bgColor = centerIconData.bgColor.toLowerCase();

    scaleUpAllVideos();
  }

  if (scrollStep === 11) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const bgColor = centerIconData.bgColor.toLowerCase();

    scaleUpAllVideosMore();
  }

  if (scrollStep === 12) {
    scaleUpAllVideosLevel2();

    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const bgColor = centerIconData.bgColor.toLowerCase();

    const backgroundVideoSrc = backgroundVideos[bgColor] || "";
    const sideVideoSrc = newSideVideos[bgColor] || "";
    const thirdVideoSrc = thirdBackgroundVideos[bgColor] || "";
    const fourthVideoSrc = fourthBackgroundVideos[bgColor] || "";

    if (backgroundVideoSrc) {
      replaceBackgroundVideoSrcOnly(backgroundVideoSrc);
    }
    if (sideVideoSrc) {
      replaceSideVideoSrcOnly(sideVideoSrc);
    }
    if (thirdVideoSrc) {
      replaceThirdVideoSrcOnly(thirdVideoSrc);
    }
    if (fourthVideoSrc) {
      playFourthBackgroundVideoZoomed(fourthVideoSrc);
    } else {
      hideFourthVideo();
    }
  }

  if (scrollStep === 13) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) {
      replaceBackgroundVideoSrcOnly(newBgVideo);
    }
    if (newSideVideo) {
      replaceSideVideoSrcOnly(newSideVideo);
    }
    if (newThirdVideo) {
      replaceThirdVideoSrcOnly(newThirdVideo);
    }
    if (newFourthVideo) {
      replaceFourthVideoSrcOnly(newFourthVideo);
    }

    setTimeout(() => {
      scaleUpAllVideosLevel3();
    }, 100);
  }

  if (scrollStep === 14) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) {
      replaceBackgroundVideoSrcOnly(newBgVideo);
    }
    if (newSideVideo) {
      replaceSideVideoSrcOnly(newSideVideo);
    }
    if (newThirdVideo) {
      replaceThirdVideoSrcOnly(newThirdVideo);
    }
    if (newFourthVideo) {
      replaceFourthVideoSrcOnly(newFourthVideo);
    }

    if (newFifthVideo) {
      playFifthBackgroundVideoZoomed(newFifthVideo);
    } else {
      hideFifthVideo();
    }

    scaleAllFourVideosAdvanced();
  }

  if (scrollStep === 15) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) {
      replaceBackgroundVideoSrcOnly(newBgVideo);
    }
    if (newSideVideo) {
      replaceSideVideoSrcOnly(newSideVideo);
    }
    if (newThirdVideo) {
      replaceThirdVideoSrcOnly(newThirdVideo);
    }
    if (newFourthVideo) {
      replaceFourthVideoSrcOnly(newFourthVideo);
    }

    if (newFifthVideo) {
      playFifthBackgroundVideoZoomed(newFifthVideo);
    } else {
      hideFifthVideo();
    }

    if (newSixthVideo) playSixthBackgroundVideoZoomed(newSixthVideo);

    scale2345VideosExtra();
    setTimeout(scaleFifthVideoExtra, 100);
  }

  if (scrollStep === 16) {
    animateHeaderTextOut();
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) {
      replaceBackgroundVideoSrcOnly(newBgVideo);
    }
    if (newSideVideo) {
      replaceSideVideoSrcOnly(newSideVideo);
    }
    if (newThirdVideo) {
      replaceThirdVideoSrcOnly(newThirdVideo);
    }
    if (newFourthVideo) {
      replaceFourthVideoSrcOnly(newFourthVideo);
    }

    if (newFifthVideo) {
      playFifthBackgroundVideoZoomed(newFifthVideo);
    } else {
      hideFifthVideo();
    }

    if (newSixthVideo) playSixthBackgroundVideoZoomed(newSixthVideo);

    scale3456VideosIn16Scroll();
    setTimeout(scaleFifthhhVideoExtra, 50);
    setTimeout(scaleSixthVideoExtra, 50);
  }

  if (scrollStep === 17) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";

    if (newBgVideo) {
      replaceBackgroundVideoSrcOnly(newBgVideo);
    }
    if (newSideVideo) {
      replaceSideVideoSrcOnly(newSideVideo);
    }
    if (newThirdVideo) {
      replaceThirdVideoSrcOnly(newThirdVideo);
    }
    if (newFourthVideo) {
      replaceFourthVideoSrcOnly(newFourthVideo);
    }

    if (newFifthVideo) {
      playFifthBackgroundVideoZoomed(newFifthVideo);
    } else {
      hideFifthVideo();
    }

    if (newSixthVideo) playSixthBackgroundVideoZoomed(newSixthVideo);
    if (newSeventhVideo) playSeventhBackgroundVideoZoomed(newSeventhVideo);

    scale3456VideosIn17Scroll();
    setTimeout(scaleFifthhhVideoExtra7, 50);
    setTimeout(scaleSixthVideoExtra7, 50);
  }

  if (scrollStep === 18) {
    showCenterTypingText18();
    showCenterDescriptionText18();
    scaleThirdVideoExtra18();
    scaleFourthVideoExtra18();
    scaleFifthVideoExtra18();
    scaleSixthVideoExtra18();
    scaleSeventhVideoExtra18();
  }

  if (scrollStep === 19) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleFourthVideoExtra19();
    scaleFifthVideoExtra19();
    scaleSixthVideoExtra19();
    scaleSeventhVideoExtra19();

    scaleEighthVideoExtra19();
  }

  if (scrollStep === 20) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleFourthVideoExtra20();
    scaleFifthVideoExtra20();
    scaleSixthVideoExtra20();
    scaleSeventhVideoExtra20();

    scaleEighthVideoExtra20();
  }

  if (scrollStep === 21) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleFifthVideoExtra21();
    scaleSixthVideoExtra21();
    scaleSeventhVideoExtra21();

    scaleEighthVideoExtra21();
  }

  if (scrollStep === 22) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleFifthVideoExtra22();
    scaleSixthVideoExtra22();
    scaleSeventhVideoExtra22();

    scaleEighthVideoExtra22();
  }

  if (scrollStep === 23) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleSixthVideoExtra23();
    scaleSeventhVideoExtra23();

    scaleEighthVideoExtra23();
  }

  if (scrollStep === 24) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleSeventhVideoExtra24();
    scaleEighthVideoExtra24();
  }

  if (scrollStep === 25) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleSeventhVideoExtra25();
    scaleEighthVideoExtra25();
  }

  if (scrollStep === 26) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleEighthVideoExtra25();
  }

  if (scrollStep === 27) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleEighthVideoExtra25();
  }

  if (scrollStep === 28) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleEighthVideoExtra25();
  }

  if (scrollStep === 29) {
    const centerIconData = currentShuffledIcons[currentCenterIndex];
    const newBgColor = centerIconData.bgColor.toLowerCase();

    const newBgVideo = backgroundVideos[newBgColor] || "";
    const newSideVideo = newSideVideos[newBgColor] || "";
    const newThirdVideo = thirdBackgroundVideos[newBgColor] || "";
    const newFourthVideo = fourthBackgroundVideos[newBgColor] || "";
    const newFifthVideo = fifthBackgroundVideos[newBgColor] || "";
    const newSixthVideo = sixthBackgroundVideos[newBgColor] || "";
    const newSeventhVideo = seventhBackgroundVideos[newBgColor] || "";
    const newEighthVideo = eighthBackgroundVideos[newBgColor] || "";

    if (newBgVideo) replaceBackgroundVideoSrcOnly(newBgVideo);
    if (newSideVideo) replaceSideVideoSrcOnly(newSideVideo);
    if (newThirdVideo) replaceThirdVideoSrcOnly(newThirdVideo);
    if (newFourthVideo) replaceFourthVideoSrcOnly(newFourthVideo);
    if (newFifthVideo) updateFifthBackgroundVideoSrcOnly(newFifthVideo);
    if (newSixthVideo) updateSixthBackgroundVideoSrcOnly(newSixthVideo);
    if (newSeventhVideo) updateSeventhBackgroundVideoSrcOnly(newSeventhVideo);
    if (newEighthVideo) updateEighthBackgroundVideoSrcOnly(newEighthVideo);

    scaleEighthVideoExtra25();
  }

  if (scrollStep === 30) {
    hideCenterTypingText18();
    hideCenterDescriptionText18();
    animateIconsToTop30();
    scaleEighthVideoExtra30();
  }

  if (scrollStep === 31) {
    hideCenterTypingText18();
    hideCenterDescriptionText18();
    animateIconsToTop30();
    scaleEighthVideoExtra31();
  }

  if (scrollStep === 32) {
    hideCenterTypingText18();
    hideCenterDescriptionText18();
    animateIconsToTop30();
    scaleEighthVideoExtra32();
  }

  if (scrollStep === 33) {
    hideCenterTypingText18();
    hideCenterDescriptionText18();
    animateIconsToTop30();
    scaleEighthVideoExtra33();
  }

  if (scrollStep === 34) {
    hideCenterTypingText18();
    hideCenterDescriptionText18();
    animateIconsToTop30();
    scaleEighthVideoExtra34();
    showLeftTypingText34();
    showLeftDescriptionText34();
  } else if (scrollStep < 34) {
    resetEighthCircleFrom34();
  }

  if (scrollStep === 35) {
    hideCenterTypingText18();
    hideCenterDescriptionText18();
    animateIconsToTop30();
    transitionCircleToWhiteFrom35();
  }

  if (scrollStep === 36) {
    hideCenterTypingText18();
    hideCenterDescriptionText18();
    animateIconsToTop30();
    expandCircleHorizontally36();
  }

  if (scrollStep === 37) {
    const circle = document.querySelector(".video-circle-overlay");
    const text = circle?.querySelector("span");

    hideCenterTypingText18();
    hideCenterDescriptionText18();
    animateIconsToTop30();
    expandCircleHorizontallyMore37();

    if (text && text.textContent.trim().length > 0) {
      scaleEighthVideoExtra38Backspace();
    }
  }

  if (scrollStep === 38) {
    hideCenterTypingText18();
    hideCenterDescriptionText18();
    animateIconsToTop30();
    scaleEighthVideoExtra38();
  }

  if (scrollStep >= 30 && scrollStep <= 41) {
    animateIconsToTop30(scrollStep, true);
  }

  if (scrollStep === 42 && lastScrollStep !== 42) {
    animateIconsToTop30(scrollStep, true);

    zoomOutBackgroundVideo();

    const centerIconColor =
      currentShuffledIcons[currentCenterIndex]?.bgColor?.toLowerCase();

    const newEighthVideo = eighthBackgroundVideos?.[centerIconColor];

    if (newEighthVideo) {
      updateEighthBackgroundVideoSrcOnly(newEighthVideo);
    }

    setTimeout(() => {
      showThreeImagesAroundCircle(centerIconColor);
      updatePromptText(color);
    }, 800);

    isStep42Active = true;
  }

  previousScroll = scrollStep;
});

function showLeftTypingText53() {
  const container = document.createElement("h2");
  container.className = "left-typing-text-53";
  container.style.position = "absolute";
  container.style.top = "23%";
  container.style.left = "13%";
  container.style.color = "black";
  container.style.fontSize = "48px";
  container.style.fontWeight = "500";
  container.style.fontFamily = "Arial, sans-serif";
  container.style.whiteSpace = "pre-wrap";
  container.style.zIndex = "999";
  container.style.opacity = "0";
  container.style.transition = "opacity 1s ease";

  const span = document.createElement("span");
  span.textContent = "Reference";
  span.style.fontFamily = "'Dancing Script', cursive";
  span.style.fontWeight = "600";

  container.appendChild(span);
  container.appendChild(document.createElement("br"));

  container.append("and Remix");
  container.appendChild(document.createElement("br"));
  container.append("anything");

  document.body.appendChild(container);

  requestAnimationFrame(() => {
    container.style.opacity = "1";
  });
}

function showLeftDescriptionText53() {
  const desc = document.createElement("p");
  desc.className = "left-description-text-53";
  desc.style.position = "absolute";
  desc.style.top = "53%";
  desc.style.left = "13%";
  desc.style.color = "gray";
  desc.style.fontSize = "18px";
  desc.style.fontWeight = "400";
  desc.style.fontFamily = "Arial, sans-serif";
  desc.style.lineHeight = "1.6";
  desc.style.opacity = "0";
  desc.style.transition = "opacity 1s ease";
  desc.style.zIndex = "999";

  desc.innerHTML = `
    Explore creative alternatives.<br>
    Bring in your own image, style and character<br>
    references. Make it exactly how you<br>
    see it.
  `;

  document.body.appendChild(desc);

  requestAnimationFrame(() => {
    desc.style.opacity = "1";
  });
}

function removeLeftText53() {
  const typing = document.querySelector(".left-typing-text-53");
  const desc = document.querySelector(".left-description-text-53");

  if (typing) typing.remove();
  if (desc) desc.remove();
}

function removeOldLeftTexts(callback) {
  const oldH2 = document.querySelector(".left-typing-text-34");
  const oldP = document.querySelector(".left-description-text-34");

  if (oldH2) {
    oldH2.style.transition = "opacity 0.5s ease";
    oldH2.style.opacity = "0";
    setTimeout(() => oldH2.remove(), 500);
  }

  if (oldP) {
    oldP.style.transition = "opacity 0.5s ease";
    oldP.style.opacity = "0";
    setTimeout(() => oldP.remove(), 500);
  }

  setTimeout(() => {
    if (typeof callback === "function") callback();
  }, 550);
}

function loadDancingScriptFont() {
  const existing = document.querySelector("link[href*='Dancing+Script']");
  if (existing) return;

  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

function handleScrollStep50To52() {
  const circle = document.querySelector(".video-circle-overlay");
  if (!circle) return;

  circle.style.transition = "all 0.4s ease";
  circle.style.backgroundColor = "transparent";
  circle.style.boxShadow = "none";

  const text = circle.querySelector("span");
  if (text) {
    text.style.borderRight = "none";
  }

  const icon = circle.querySelector("div");
  if (icon) {
    icon.style.transition = "opacity 0.3s ease";
    icon.style.opacity = "0";
    setTimeout(() => {
      if (icon.parentNode) icon.parentNode.removeChild(icon);
    }, 300);
  }
}

function handleScrollStep49() {
  const circle = document.querySelector(".video-circle-overlay");
  if (!circle) return;

  circle.style.transition = "all 0.4s ease";
  circle.style.backgroundColor = "transparent";
  circle.style.boxShadow = "none";

  const text = circle.querySelector("span");
  if (text) {
    text.style.borderRight = "none";
  }

  const icon = circle.querySelector("div");
  if (icon) {
    icon.style.transition = "opacity 0.3s ease";
    icon.style.opacity = "0";

    setTimeout(() => {
      if (icon.parentNode) icon.parentNode.removeChild(icon);
    }, 300);
  }
}

function resetScrollStep49Effects() {
  const circle = document.querySelector(".video-circle-overlay");
  if (!circle) return;

  circle.style.display = "flex";
  circle.style.opacity = "1";

  const text = circle.querySelector("span");
  if (text) {
    text.style.borderRight = "1px solid black";
  }

  let icon = circle.querySelector("div");
  if (!icon) {
    icon = document.createElement("div");
    icon.style.width = "5px";
    icon.style.height = "5px";
    icon.style.borderRadius = "50%";
    icon.style.backgroundColor = "#000";
    icon.style.display = "flex";
    icon.style.justifyContent = "center";
    icon.style.alignItems = "center";
    icon.style.flexShrink = "0";
    icon.style.transition = "opacity 0.3s ease";

    const arrow = document.createElement("span");
    arrow.textContent = "↑";
    arrow.style.color = "#fff";
    arrow.style.fontSize = "3px";
    arrow.style.fontWeight = "bold";
    icon.appendChild(arrow);

    circle.appendChild(icon);
  } else {
    icon.style.opacity = "1";
  }
}

function handleScrollStep48() {
  const circle = document.querySelector(".video-circle-overlay");
  const icon = circle?.querySelector("div");
  const arrow = icon?.querySelector("span");

  if (!circle || !icon || !arrow) return;

  circle.style.backgroundColor = "#e0e0e0";
  circle.style.opacity = "0.6";
  circle.style.transition = "all 0.5s ease";

  icon.style.backgroundColor = "#a5a5a5";

  arrow.style.color = "#fff";
  arrow.style.opacity = "0.8";
}

function resetCircleStyle() {
  const circle = document.querySelector(".video-circle-overlay");
  const icon = circle?.querySelector("div");
  const arrow = icon?.querySelector("span");

  if (!circle || !icon || !arrow) return;

  circle.style.backgroundColor = "white";
  circle.style.opacity = "1";
  circle.style.transition = "all 0.5s ease";

  icon.style.backgroundColor = "#000";

  arrow.style.color = "#fff";
  arrow.style.opacity = "1";
}

const promptTexts = {
  "#32cd32": "Can I see this musician in Iceland",
  "#3939dd": "Can I have the flowers in terrarium",
  "#ffffff": "Can I have the model by the water",
  "#ffa500": "Can I have the view for kitchen",
  "#f04b4b": "Can I have this desert be raining",
};

let typeWriterTimeouts = [];

function updatePromptText(bgColor) {
  const text = promptTexts[bgColor];
  const circle = document.querySelector(".video-circle-overlay");

  if (!text || !circle) return;

  const span = circle.querySelector("span");
  if (!span) return;

  typeWriterTimeouts.forEach((id) => clearTimeout(id));
  typeWriterTimeouts = [];

  span.textContent = "";

  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      span.textContent += text.charAt(i);
      const timeoutId = setTimeout(typeWriter, 25);
      typeWriterTimeouts.push(timeoutId);
      i++;
    }
  }

  typeWriter();
}

let last42ImageBgColor = null;

let imageElements = [];

const iconImageMap = {
  "#32cd32": ["../img/green_1.jpg", "../img/green_2.jpg", "../img/green_3.jpg"],
  "#3939dd": ["../img/blue_1.jpg", "../img/blue_2.jpg", "../img/blue_3.jpg"],
  "#ffffff": ["../img/gray_1.jpg", "../img/gray_2.jpg", "../img/gray_3.jpg"],
  "#ffa500": [
    "../img/orange_1.jpg",
    "../img/orange_2.jpg",
    "../img/orange_3.jpg",
  ],
  "#f04b4b": ["../img/red_1.jpg", "../img/red_2.jpg", "../img/red_3.jpg"],
};

function zoomOutBackgroundVideo() {
  const video = document.getElementById("eightVideo");
  if (!video) return;

  video.style.transform = "translate(0%, 0%) scale(0.1)";
  video.style.borderRadius = "7px";
  video.style.opacity = "0";
}

function resetBackgroundVideo() {
  const video = document.getElementById("eightVideo");
  if (!video) return;

  video.style.transform = "translate(0%, 0%) scale(1)";
  video.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  video.style.borderRadius = "7px";
  video.style.opacity = "1";
}

function showThreeImagesAroundCircle(bgColor) {
  const imageUrls = iconImageMap[bgColor.toLowerCase()];
  if (!imageUrls) return;

  last42ImageBgColor = bgColor.toLowerCase();

  const container = document.getElementById("imageAroundCircleContainer");

  if (!container) {
    const newContainer = document.createElement("div");
    newContainer.id = "imageAroundCircleContainer";
    newContainer.style.position = "absolute";
    newContainer.style.top = "50%";
    newContainer.style.left = "50%";
    newContainer.style.transform = "translate(-50%, -50%)";
    newContainer.style.zIndex = "5";
    newContainer.style.pointerEvents = "none";
    document.body.appendChild(newContainer);
  }

  const imageContainer = document.getElementById("imageAroundCircleContainer");
  imageContainer.innerHTML = "";

  const positions = [
    {
      top: "-200px",
      left: "120px",
      width: "150px",
      height: "220px",
      borderRadius: "20px",
      delay: "0.1s",
    },
    {
      top: "-200px",
      left: "280px",
      width: "200px",
      height: "220px",
      borderRadius: "20px",
      delay: "0.1s",
    },
    {
      top: "120px",
      left: "120px",
      width: "360px",
      height: "180px",
      borderRadius: "25px",
      delay: "0.1s",
    },
  ];

  imageUrls.forEach((url, index) => {
    const img = document.createElement("img");
    const pos = positions[index];

    img.src = url;
    img.style.position = "absolute";
    img.style.top = pos.top;
    img.style.left = pos.left;
    img.style.width = pos.width;
    img.style.height = pos.height;
    img.style.borderRadius = pos.borderRadius;
    img.style.objectFit = "cover";
    img.style.opacity = "0";
    img.style.transform = "scale(0.2)";
    img.style.transition = `all 0.8s ease ${pos.delay}`;
    img.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.3)";
    imageContainer.appendChild(img);

    setTimeout(() => {
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    }, 50);
  });
}

function hideThreeImagesAroundCircle(callbackAfterHide) {
  const imageContainer = document.getElementById("imageAroundCircleContainer");
  if (!imageContainer) {
    if (typeof callbackAfterHide === "function") callbackAfterHide();
    return;
  }

  const images = imageContainer.querySelectorAll("img");
  images.forEach((img) => {
    img.style.transition = "transform 0.6s ease, opacity 0.6s ease";
    img.style.opacity = "0";
    img.style.transform = "scale(0.2)";
  });

  setTimeout(() => {
    imageContainer.innerHTML = "";

    resetBackgroundVideo();

    if (typeof callbackAfterHide === "function") {
      callbackAfterHide();
    }
  }, 700);
}

let isStep42Active = false;
let isStep48Active = false;
let isStep49Active = false;
let isStep53Active = false;
let lastScrollStep = 0;

function handleScrollStep(scrollStep) {
  if (
    scrollStep >= 42 &&
    scrollStep <= 47 &&
    (lastScrollStep < 42 || lastScrollStep > 47)
  ) {
    animateIconsToTop30(scrollStep, true);
    zoomOutBackgroundVideo();

    const centerIconColor = currentShuffledIcons[currentCenterIndex]?.bgColor?.toLowerCase();
    last42ImageBgColor = centerIconColor;

    const newEighthVideo = eighthBackgroundVideos?.[centerIconColor];
    if (newEighthVideo) {
      updateEighthBackgroundVideoSrcOnly(newEighthVideo);
    }

    setTimeout(() => {
      showThreeImagesAroundCircle(centerIconColor);
      updatePromptText(centerIconColor);
    }, 800);

    isStep42Active = true;
  }

  if (scrollStep === 48 && lastScrollStep !== 48) {
    handleScrollStep48();
    isStep48Active = true;
  }

  if (lastScrollStep >= 42 && lastScrollStep <= 48 && scrollStep < 42) {
    hideThreeImagesAroundCircle(() => {
      const color = last42ImageBgColor;
      const newVideo = eighthBackgroundVideos?.[color];
      if (newVideo) updateEighthBackgroundVideoSrcOnly(newVideo);
      resetBackgroundVideo();
    });

    isStep42Active = false;
  }

  if (lastScrollStep === 48 && scrollStep < 48) {
    resetCircleStyle();
    isStep48Active = false;
  }

  if (
    (scrollStep >= 49 && scrollStep <= 52) &&
    !(lastScrollStep >= 49 && lastScrollStep <= 52)
  ) {
    handleScrollStep49();
    isStep49Active = true;
  }

  if (lastScrollStep >= 49 && lastScrollStep <= 52 && scrollStep < 49) {
    resetScrollStep49Effects();
    isStep49Active = false;
  }

  if (scrollStep === 53 && lastScrollStep !== 53) {
    loadDancingScriptFont();
    removeOldLeftTexts(() => {
      showLeftTypingText53();
      showLeftDescriptionText53();
    });

    isStep53Active = true;
  }

  if (lastScrollStep === 53 && scrollStep < 53) {
    removeLeftText53();

    setTimeout(() => {
      showLeftTypingText34();
      showLeftDescriptionText34();
    }, 100);

    isStep53Active = false;
  }

  lastScrollStep = scrollStep;
}

function getCenterMiddleIconBgColor() {
  const iconRow = document.getElementById("iconRow");
  if (!iconRow) return null;

  const icons = Array.from(iconRow.children).filter(
    (el) =>
      el.classList.contains("center-replacement-icon") ||
      el.classList.contains("side-icon")
  );

  if (icons.length >= 3) {
    const centerIndex = Math.floor(icons.length / 2);
    const centerIcon = icons[centerIndex];
    return centerIcon.dataset.bgColor || null;
  }

  return null;
}

function scaleEighthVideoExtra38() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.display = "block";
  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.opacity = "1";
  });

  const circle = document.querySelector(".video-circle-overlay");
  if (!circle) return;

  circle.innerHTML = "";
  circle.style.display = "flex";
  circle.style.alignItems = "center";
  circle.style.overflow = "hidden";
  circle.style.transition = "all 0.5s ease";
  circle.style.width = "68px";
  circle.style.height = "11px";
  circle.style.borderRadius = "30px";
  circle.style.backgroundColor = "white";
  circle.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";

  const style = document.createElement("style");
  style.innerHTML = `
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black }
}`;
  document.head.appendChild(style);

  const text = document.createElement("span");
  text.style.fontSize = "3px";
  text.style.color = "#000";
  text.style.fontWeight = "300";
  text.style.whiteSpace = "nowrap";
  text.style.overflow = "hidden";
  text.style.marginLeft = "4px";
  text.style.marginRight = "2px";
  text.style.letterSpacing = "0.2px";
  text.style.borderRight = "1px solid black";
  text.style.paddingRight = "0.50px";
  text.style.animation = "blink-caret 0.7s step-start infinite";

  const fullText = "Can I have the model by the water";
  let i = 0;

  function typeWriter() {
    if (i < fullText.length) {
      text.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }

  const icon = document.createElement("div");
  icon.style.width = "5px";
  icon.style.height = "5px";
  icon.style.borderRadius = "50%";
  icon.style.backgroundColor = "#000";
  icon.style.display = "flex";
  icon.style.justifyContent = "center";
  icon.style.alignItems = "center";
  icon.style.flexShrink = "0";

  const arrow = document.createElement("span");
  arrow.textContent = "↑";
  arrow.style.color = "#fff";
  arrow.style.fontSize = "3px";
  arrow.style.fontWeight = "bold";
  icon.appendChild(arrow);

  circle.appendChild(text);
  circle.appendChild(icon);

  typeWriter();
}

function scaleEighthVideoExtra38Backspace() {
  const circle = document.querySelector(".video-circle-overlay");
  if (!circle) return;

  const text = circle.querySelector("span");
  const icon = circle.querySelector("div");

  if (!text) return;

  const currentText = text.textContent;
  let i = currentText.length;

  function backspace() {
    if (i > 0) {
      text.textContent = currentText.substring(0, i - 1);
      i--;
      setTimeout(backspace, 30);
    } else {
      if (icon) {
        icon.style.transition = "opacity 0.4s ease";
        icon.style.opacity = "0";
        setTimeout(() => icon.remove(), 400);
      }
    }
  }

  backspace();
}

function transitionCircleToWhiteFrom35() {
  const circle = document.querySelector(".video-circle-overlay");
  if (!circle) return;

  circle.style.transition =
    "background-color 0.6s ease, box-shadow 0.6s ease, width 0.7s ease";
  circle.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  circle.style.boxShadow = "none";
  circle.style.border = "none";
  circle.style.borderRadius = "30px";
  circle.style.width = "8px";
  circle.style.height = "9px";
}

function expandCircleHorizontally36() {
  const circle = document.querySelector(".video-circle-overlay");
  if (!circle) return;

  circle.style.transition = "width 0.7s ease";
  circle.style.width = "44px";
  circle.style.height = "11px";
  circle.style.borderRadius = "30px";
}

function expandCircleHorizontallyMore37() {
  const circle = document.querySelector(".video-circle-overlay");
  if (!circle) return;

  circle.style.transition = "width 0.7s ease";
  circle.style.width = "68px";
  circle.style.height = "11px";
  circle.style.borderRadius = "30px";
}

function resetEighthVideoFrom35() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function showLeftTypingText34() {
  const existing = document.querySelector(".left-typing-text-34");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.className = "left-typing-text-34";
  container.style.position = "absolute";
  container.style.top = "30%";
  container.style.left = "13%";
  container.style.color = "black";
  container.style.fontSize = "48px";
  container.style.fontWeight = "500";
  container.style.fontFamily = "Arial, sans-serif";
  container.style.whiteSpace = "pre-wrap";
  container.style.zIndex = "999";

  document.body.appendChild(container);

  const part1 = "No prompt\nengineering needed,\njust";
  const part2 = "ask";

  let index = 0;

  function typeText() {
    if (index < part1.length) {
      container.innerText += part1.charAt(index);
      index++;
      setTimeout(typeText, 60);
    } else {
      const span = document.createElement("span");
      span.textContent = part2;
      span.style.fontFamily = "'Dancing Script', cursive";
      span.style.marginLeft = "20px";
      span.style.fontWeight = "600";
      container.appendChild(span);
    }
  }

  typeText();
}

function hideLeftText34() {
  document.querySelector(".left-typing-text-34")?.remove();
  document.querySelector(".left-description-text-34")?.remove();
}

function showLeftDescriptionText34() {
  const existing = document.querySelector(".left-description-text-34");
  if (existing) existing.remove();

  const desc = document.createElement("div");
  desc.className = "left-description-text-34";
  desc.style.position = "absolute";
  desc.style.top = "58%";
  desc.style.left = "13%";
  desc.style.color = "gray";
  desc.style.fontSize = "18px";
  desc.style.fontWeight = "400";
  desc.style.fontFamily = "Arial, sans-serif";
  desc.style.lineHeight = "1.6";
  desc.style.opacity = "0";
  desc.style.transition = "opacity 1s ease";
  desc.style.zIndex = "999";

  desc.innerHTML = `
    Be as simple or as specific. Talk in your<br>
    own way to generate, edit and move<br>
    through your explorations fluently.<br>
  `;

  document.body.appendChild(desc);

  requestAnimationFrame(() => {
    desc.style.opacity = "1";
  });
}

function scaleEighthVideoExtra34() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(555%, -60%) scale(5.4)";
    container.style.opacity = "1";
  });

  const existingCircle = document.querySelector(".video-circle-overlay");
  if (existingCircle) existingCircle.remove();

  const circle = document.createElement("div");
  circle.className = "video-circle-overlay";
  circle.style.position = "absolute";
  circle.style.top = "60%";
  circle.style.left = "50%";
  circle.style.transform = "translate(-50%, -50%) scale(0)";
  circle.style.width = "8px";
  circle.style.height = "9px";
  circle.style.borderRadius = "50%";
  circle.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  circle.style.border = "1px solid rgba(255, 255, 255, 0.05)";
  circle.style.boxShadow = `
  0 0 20px 10px rgba(255, 255, 255, 0.3),
  0 0 30px 15px rgba(255, 255, 255, 0.2),
  inset 0 0 10px rgba(255, 255, 255, 0.1)
`;
  circle.style.transition = "transform 0.8s ease, opacity 0.8s ease";
  circle.className = "video-circle-overlay";
  circle.style.zIndex = "2";
  circle.style.transition = "transform 0.8s ease";

  container.appendChild(circle);

  requestAnimationFrame(() => {
    circle.style.transform = "translate(-50%, -50%) scale(1)";
  });
}

function resetEighthVideoFrom34() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function resetEighthCircleFrom34() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  const circle = container.querySelector(".video-circle-overlay");
  if (circle) {
    circle.style.transform = "translate(-50%, -50%) scale(0)";
    setTimeout(() => {
      circle.remove();
    }, 500);
  }
}

function scaleEighthVideoExtra33() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(525%, -60%) scale(5.4)";
    container.style.opacity = "1";
  });
}

function resetEighthVideoFrom33() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function scaleEighthVideoExtra32() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(325%, -60%) scale(4.9)";
    container.style.opacity = "1";
  });
}

function resetEighthVideoFrom32() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function scaleEighthVideoExtra31() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-55%, -60%) scale(4.3)";
    container.style.opacity = "1";
  });
}

function resetEighthVideoFrom31() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function hideHeaderButtonsOnScroll30() {
  const buttons = document.querySelectorAll(".btnhd");
  buttons.forEach((btn) => {
    btn.style.transition = "opacity 0.5s ease";
    btn.style.opacity = "0";

    btn.style.pointerEvents = "none";
    btn.style.visibility = "hidden";
  });
}

function resetHeaderButtonsFromScroll30() {
  const buttons = document.querySelectorAll(".btnhd");
  buttons.forEach((btn) => {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
    btn.style.visibility = "visible";
  });
}

function hideCenterTypingText18() {
  const container = document.querySelector(".center-typing-text-18");
  if (container) {
    container.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    container.style.opacity = "0";

    setTimeout(() => {
      container.remove();
    }, 600);
  }
}

function animateIconsToTop30(scrollStep, force = false) {
  const iconRow = document.getElementById("iconRow");
  if (!iconRow) return;

  if ((scrollStep >= 30 && scrollStep <= 38) || force) {
    if (iconRow.getAttribute("data-at-top") !== "true" || force) {
      iconRow.style.position = "absolute";
      iconRow.style.top = "3%";
      iconRow.style.left = "0";
      iconRow.style.right = "0";
      iconRow.style.marginLeft = "auto";
      iconRow.style.marginRight = "auto";
      iconRow.style.width = "fit-content";
      iconRow.style.display = "flex";
      iconRow.style.justifyContent = "center";
      iconRow.style.alignItems = "center";
      iconRow.style.transition = "top 1s ease";
      iconRow.setAttribute("data-at-top", "true");
    }
  } else {
    iconRow.removeAttribute("style");
    iconRow.removeAttribute("data-at-top");
  }
}

function resetIconsToCenterFrom30() {
  const iconRow = document.getElementById("iconRow");
  if (!iconRow) return;

  iconRow.style.position = "relative";
  iconRow.style.left = "unset";
  iconRow.style.right = "unset";
  iconRow.style.transform = "none";
}

function scaleEighthVideoExtra30() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-325%, -60%) scale(3.9)";
    container.style.opacity = "0.8";
  });
}

function resetEighthVideoFrom30() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function scaleSeventhVideoExtra25() {
  const container = document.getElementById("seventhVideoContainer");

  if (!container) {
    console.warn("seventhVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(1025%, 100%) scale(7)";
    container.style.opacity = "0.8";
  });
}

function resetSeventhVideoFrom25() {
  const container = document.getElementById("seventhVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleEighthVideoExtra25() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-435%, -60%) scale(3.6)";
    container.style.opacity = "0.7";
  });
}

function resetEighthVideoFrom25() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function scaleSeventhVideoExtra24() {
  const container = document.getElementById("seventhVideoContainer");

  if (!container) {
    console.warn("seventhVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(825%, 100%) scale(6.6)";
    container.style.opacity = "0.8";
  });
}

function resetSeventhVideoFrom24() {
  const container = document.getElementById("seventhVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleEighthVideoExtra24() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-355%, -60%) scale(3.2)";
    container.style.opacity = "0.7";
  });
}

function resetEighthVideoFrom24() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function scaleSixthVideoExtra23() {
  const container = document.getElementById("sixthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-740%, 680%) scale(5)";
    container.style.opacity = "0.8";
  });
}

function resetSixthVideoFrom23() {
  const container = document.getElementById("sixthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSeventhVideoExtra23() {
  const container = document.getElementById("seventhVideoContainer");

  if (!container) {
    console.warn("seventhVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(485%, 60%) scale(5.2)";
    container.style.opacity = "0.8";
  });
}

function resetSeventhVideoFrom23() {
  const container = document.getElementById("seventhVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleEighthVideoExtra23() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-255%, -60%) scale(2.5)";
    container.style.opacity = "0.7";
  });
}

function resetEighthVideoFrom23() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function scaleFifthVideoExtra22() {
  const container = document.getElementById("fifthVideoContainer");

  if (!container) {
    console.warn("fifthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(520%, -400%) scale(5)";
    container.style.opacity = "1";
  });
}

function resetFifthVideoFrom22() {
  const container = document.getElementById("fifthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSixthVideoExtra22() {
  const container = document.getElementById("sixthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-610%, 455%) scale(4)";
    container.style.opacity = "0.8";
  });
}

function resetSixthVideoFrom22() {
  const container = document.getElementById("sixthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSeventhVideoExtra22() {
  const container = document.getElementById("seventhVideoContainer");

  if (!container) {
    console.warn("seventhVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(265%, 35%) scale(4.1)";
    container.style.opacity = "0.8";
  });
}

function resetSeventhVideoFrom22() {
  const container = document.getElementById("seventhVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleEighthVideoExtra22() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-195%, -60%) scale(2)";
    container.style.opacity = "0.7";
  });
}

function resetEighthVideoFrom22() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function scaleFifthVideoExtra21() {
  const container = document.getElementById("fifthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(350%, -290%) scale(4.1)";
    container.style.opacity = "1";
  });
}

function resetFifthVideoFrom21() {
  const container = document.getElementById("fifthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSixthVideoExtra21() {
  const container = document.getElementById("sixthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-525%, 360%) scale(3.5)";
    container.style.opacity = "0.8";
  });
}

function resetSixthVideoFrom21() {
  const container = document.getElementById("sixthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSeventhVideoExtra21() {
  const container = document.getElementById("seventhVideoContainer");

  if (!container) {
    console.warn("seventhVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(145%, -0%) scale(2.6)";
    container.style.opacity = "0.8";
  });
}

function resetSeventhVideoFrom21() {
  const container = document.getElementById("seventhVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleEighthVideoExtra21() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-140%, -60%) scale(1.5)";
    container.style.opacity = "0.7";
  });
}

function resetEighthVideoFrom21() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function scaleFourthVideoExtra20() {
  const container = document.getElementById("fourthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-685%, -220%) scale(6.1)";
    container.style.opacity = "1";
  });
}

function resetFourthVideoFrom20() {
  const container = document.getElementById("fourthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleFifthVideoExtra20() {
  const container = document.getElementById("fifthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(255%, -220%) scale(3.4)";
    container.style.opacity = "0.7";
  });
}

function resetFifthVideoFrom20() {
  const container = document.getElementById("fifthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSixthVideoExtra20() {
  const container = document.getElementById("sixthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-450%, 300%) scale(3)";
    container.style.opacity = "0.7";
  });
}

function resetSixthVideoFrom20() {
  const container = document.getElementById("sixthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSeventhVideoExtra20() {
  const container = document.getElementById("seventhVideoContainer");

  if (!container) {
    console.warn("seventhVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(85%, -5%) scale(2)";
    container.style.opacity = "0.7";
  });
}

function resetSeventhVideoFrom20() {
  const container = document.getElementById("seventhVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleEighthVideoExtra20() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("eightVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-90%, -60%) scale(1.2)";
    container.style.opacity = "0.3";
  });
}

function resetEighthVideoFrom20() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";
}

function updateEighthBackgroundVideoSrcOnly(src) {
  const video = document.getElementById("eightVideo");

  if (video && video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.setAttribute("data-last-src", src);
    video.load();
    video.play().catch((e) => console.error("8th video play error", e));
  }
}

function scaleEighthVideoExtra19() {
  const container = document.getElementById("eightVideoContainer");

  if (!container) {
    console.warn("8th video container topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-50%, -60%) scale(1)";
    container.style.opacity = "0.3";
  });
}

function resetEighthVideoFrom19() {
  const container = document.getElementById("eightVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(10%, -50%) scale(0.3)";
  container.style.opacity = "0";

  setTimeout(() => {
    container.style.display = "none";
  }, 500);
}

function scaleFourthVideoExtra19() {
  const container = document.getElementById("fourthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-595%, -190%) scale(5.8)";
    container.style.opacity = "1";
  });
}

function resetFourthVideoFrom19() {
  const container = document.getElementById("fourthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleFifthVideoExtra19() {
  const container = document.getElementById("fifthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(175%, -160%) scale(3.1)";
    container.style.opacity = "0.7";
  });
}

function resetFifthVideoFrom19() {
  const container = document.getElementById("fifthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSixthVideoExtra19() {
  const container = document.getElementById("sixthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-400%, 250%) scale(2.3)";
    container.style.opacity = "0.7";
  });
}

function resetSixthVideoFrom19() {
  const container = document.getElementById("sixthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSeventhVideoExtra19() {
  const container = document.getElementById("seventhVideoContainer");

  if (!container) {
    console.warn("seventhVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(45%, -5%) scale(1.6)";
    container.style.opacity = "0.7";
  });
}

function resetSeventhVideoFrom19() {
  const container = document.getElementById("seventhVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleThirdVideoExtra18() {
  const container = document.getElementById("thirdVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    container.style.transform = "translate(-1150%, 430%) scale(8.5)";
    container.style.opacity = "1";
  });
}

function resetThirdVideoFrom18() {
  const container = document.getElementById("thirdVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleFourthVideoExtra18() {
  const container = document.getElementById("fourthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-410%, -190%) scale(4.6)";
    container.style.opacity = "1";
  });
}

function resetFourthVideoFrom18() {
  const container = document.getElementById("fourthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleFifthVideoExtra18() {
  const container = document.getElementById("fifthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(105%, -140%) scale(2.3)";
    container.style.opacity = "0.7";
  });
}

function resetFifthVideoFrom18() {
  const container = document.getElementById("fifthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSixthVideoExtra18() {
  const container = document.getElementById("sixthVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(-370%, 190%) scale(1.8)";
    container.style.opacity = "0.7";
  });
}

function resetSixthVideoFrom18() {
  const container = document.getElementById("sixthVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function scaleSeventhVideoExtra18() {
  const container = document.getElementById("seventhVideoContainer");

  if (!container) {
    console.warn("sixthVideoContainer topilmadi");
    return;
  }

  container.style.display = "block";

  container.getBoundingClientRect();

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    container.style.transform = "translate(5%, -5%) scale(1.3)";
    container.style.opacity = "0.7";
  });
}

function resetSeventhVideoFrom18() {
  const container = document.getElementById("seventhVideoContainer");
  if (!container) return;

  container.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  container.style.transform = "translate(0, 0) scale(1)";
  container.style.opacity = "1";
}

function showCenterTypingText18() {
  const existing = document.querySelector(".center-typing-text-18");
  if (existing) existing.remove();

  const textContainer = document.createElement("div");
  textContainer.className = "center-typing-text-18";
  textContainer.style.position = "absolute";
  textContainer.style.top = "24%";
  textContainer.style.left = "50%";
  textContainer.style.transform = "translateX(-50%)";
  textContainer.style.color = "black";
  textContainer.style.fontSize = "48px";
  textContainer.style.textAlign = "center";
  textContainer.style.whiteSpace = "pre-wrap";
  textContainer.style.fontFamily = "Arial, sans-serif";
  textContainer.style.fontWeight = "500";
  textContainer.style.zIndex = "999";

  document.body.appendChild(textContainer);

  const fullTextPart1 = "Create beautiful images and ";
  const fullTextPart2 = "videos, ";
  const fastSpan = document.createElement("span");
  fastSpan.textContent = "fast";
  fastSpan.style.fontFamily = '"Dancing Script", cursive';
  fastSpan.style.fontWeight = "600";

  let index = 0;
  textContainer.textContent = "";

  function typePart1() {
    if (index < fullTextPart1.length) {
      textContainer.textContent += fullTextPart1.charAt(index);
      index++;
      setTimeout(typePart1, 50);
    } else {
      textContainer.innerHTML += "<br>";
      index = 0;
      typePart2();
    }
  }

  function typePart2() {
    if (index < fullTextPart2.length) {
      textContainer.innerHTML =
        textContainer.innerHTML.replace(/<br>.*$/, "<br>") +
        fullTextPart2.slice(0, index + 1);
      index++;
      setTimeout(typePart2, 50);
    } else {
      textContainer.appendChild(fastSpan);
    }
  }

  typePart1();
}

function showCenterDescriptionText18() {
  const existing = document.querySelector(".center-description-text-18");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.className = "center-description-text-18";
  container.style.position = "absolute";
  container.style.bottom = "23%";
  container.style.left = "77%";
  container.style.transform = "translateX(-50%)";
  container.style.color = "gray";
  container.style.fontSize = "18px";
  container.style.textAlign = "left";
  container.style.fontWeight = "400";
  container.style.maxWidth = "1000px";
  container.style.width = "80%";
  container.style.opacity = "0";
  container.style.transition = "opacity 1s ease, transform 1s ease";
  container.style.zIndex = "50";

  container.innerHTML = `
    Ideate and iterate as fast as you think.<br>
    Explore endless ideas, make something<br>
    unique and spectacular. Powered by Luma <br>
     Photon, the most creative AI model.
  `;

  document.body.appendChild(container);

  requestAnimationFrame(() => {
    container.style.opacity = "1";
    container.style.transform = "translate(-50%, 0)";
  });
}

function hideCenterDescriptionText18() {
  const container = document.querySelector(".center-description-text-18");
  if (container) {
    container.style.opacity = "0";
    container.style.transform = "translate(-50%, 0px)";
    setTimeout(() => {
      container.remove();
    }, 500);
  }
}

function scale34567VideosExtra18() {
  const transformations = [
    {
      id: "thirdVideoContainer",
      scale: 7,
      translateX: "-900%",
      translateY: "320%",
      opacity: 1,
    },
    {
      id: "fourthVideoContainer",
      scale: 3,
      translateX: "-180%",
      translateY: "-80%",
      opacity: 1,
    },
    {
      id: "fifthVideoContainer",
      scale: 3.2,
      translateX: "-120%",
      translateY: "-60%",
      opacity: 0.5,
    },
    {
      id: "sixthVideoContainer",
      scale: 1.8,
      translateX: "-300%",
      translateY: "130%",
      opacity: 0.7,
    },
    {
      id: "seventhVideoContainer",
      scale: 1.5,
      translateX: "-200%",
      translateY: "100%",
      opacity: 0.5,
    },
  ];

  transformations.forEach(({ id, scale, translateX, translateY, opacity }) => {
    const container = document.getElementById(id);
    if (container) {
      container.style.display = "block";
      container.style.transition = "transform 0.8s ease, opacity 0.8s ease";
      container.style.transform = `translate(${translateX}, ${translateY}) scale(${scale})`;
      container.style.opacity = opacity;
    }
  });
}

function reset34567VideosToDefault18() {
  const ids = [
    "thirdVideoContainer",
    "fourthVideoContainer",
    "fifthVideoContainer",
    "sixthVideoContainer",
    "seventhVideoContainer",
  ];

  ids.forEach((id) => {
    const container = document.getElementById(id);
    if (container) {
      container.style.transition = "transform 0.8s ease, opacity 0.8s ease";
      container.style.transform = "translate(0, 0) scale(1)";
      container.style.opacity = "1";
    }
  });
}

function playSeventhBackgroundVideoZoomed(src) {
  const container = document.getElementById("seventhVideoContainer");
  const video = document.getElementById("seventhVideo");

  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.setAttribute("data-last-src", src);
  }

  container.style.display = "block";
  container.style.transition = "none";
  container.style.transform = "translate(-150%, -40%) scale(0.3)";
  container.style.opacity = "0";

  setTimeout(() => {
    container.style.transition = "transform 1.4s ease, opacity 1.4s ease";
    container.style.transform = "translate(-60%, -10%) scale(1)";
    container.style.opacity = "0.4";
  }, 50);

  video.play().catch((e) => {
    console.error("Seventh video play error:", e);
  });
}

function hideSeventhVideo() {
  const container = document.getElementById("seventhVideoContainer");
  const video = document.getElementById("seventhVideo");

  if (!container || !video) return;

  container.style.transition = "transform 1.2s ease, opacity 1.2s ease";
  container.style.transform = "translate(-120%, -30%) scale(0.3)";
  container.style.opacity = "0";

  setTimeout(() => {
    video.pause();
    video.removeAttribute("src");
    video.removeAttribute("data-last-src");
    video.load();
    container.style.display = "none";
  }, 1200);
}

function scale3456VideosIn17Scroll() {
  const transformations = [
    {
      id: "thirdVideoContainer",
      scale: 8,
      translateX: "-1105%",
      translateY: "400%",
      opacity: 1,
    },
    {
      id: "fourthVideoContainer",
      scale: 3,
      translateX: "-265%",
      translateY: "-150%",
      opacity: 1,
    },
  ];

  transformations.forEach(({ id, scale, translateX, translateY, opacity }) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = "block";

      requestAnimationFrame(() => {
        element.style.transition = "transform 0.8s ease, opacity 0.8s ease";
        element.style.transform = `translate(${translateX}, ${translateY}) scale(${scale})`;
        element.style.opacity = opacity;
      });
    }
  });
}

function reset3456VideosFrom17Scroll() {
  const targets = [
    "thirdVideoContainer",
    "fourthVideoContainer",
    "fifthVideoContainer",
    "sixthVideoContainer",
  ];

  targets.forEach((id) => {
    const container = document.getElementById(id);
    if (container) {
      container.style.transition = "transform 0.8s ease, opacity 0.8s ease";
      container.style.transform = "translate(0, 0) scale(1)";
      container.style.opacity = "1";
    }
  });
}

function scaleFifthhhVideoExtra7() {
  const container = document.getElementById("fifthVideoContainer");

  if (!container) {
    setTimeout(scaleFifthVideoExtra, 100);
    return;
  }

  container.style.display = "block";
  container.style.transition = "transform 0.8s ease, opacity 0.8s ease";

  container.getBoundingClientRect();

  container.style.transform = "translate(60%, -110%) scale(1.9)";
  container.style.opacity = "0.7";
}

function scaleSixthVideoExtra7() {
  const container = document.getElementById("sixthVideoContainer");

  if (!container) {
    setTimeout(scaleSixthVideoExtra, 50);
    return;
  }

  container.style.display = "block";
  container.style.transition = "transform 0.8s ease, opacity 0.8s ease";

  container.getBoundingClientRect();

  container.style.transform = "translate(-350%, 130%) scale(1.5)";
  container.style.opacity = "0.7";
}

function animateHeaderTextOut() {
  const header = document.querySelector(".dream-header-container");
  if (!header) return;

  const h2 = header.querySelector("h2");
  const p = header.querySelector("p");

  if (h2 && p) {
    h2.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    h2.style.transform = "scale(0.5)";
    h2.style.opacity = "0";

    p.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    p.style.transform = "scale(0.5)";
    p.style.opacity = "0";
  }
}

function animateHeaderTextIn() {
  const header = document.querySelector(".dream-header-container");
  if (!header) return;

  const h2 = header.querySelector("h2");
  const p = header.querySelector("p");

  if (h2 && p) {
    h2.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    h2.style.transform = "scale(1)";
    h2.style.opacity = "1";

    p.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    p.style.transform = "scale(1)";
    p.style.opacity = "1";
  }
}

function playSixthBackgroundVideoZoomed(src) {
  const container = document.getElementById("sixthVideoContainer");
  const video = document.getElementById("sixthVideo");

  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.setAttribute("data-last-src", src);
    video.load();
    video.play().catch((e) => {
      console.error("Sixth video play error:", e);
    });
  }

  container.style.display = "block";
  container.style.transform = "translate(-250%, 60%) scale(0.3)";
  container.style.opacity = "0";
  container.getBoundingClientRect();
  container.style.transition = "transform 1s ease, opacity 1s ease";
  container.style.transform = "translate(-295%, 100%) scale(1)";
  container.style.opacity = "0.1";
}

function hideSixthVideo() {
  const container = document.getElementById("sixthVideoContainer");
  const video = document.getElementById("sixthVideo");

  if (!container || !video) return;

  container.style.transition = "none";
  container.style.transform = "translate(-295%, 100%) scale(1)";
  container.style.opacity = "0.1";

  requestAnimationFrame(() => {
    container.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    container.style.transform = "translate(-250%, 60%) scale(0.3)";
    container.style.opacity = "0";

    setTimeout(() => {
      video.pause();
      video.removeAttribute("src");
      video.removeAttribute("data-last-src");
      video.load();
      container.style.display = "none";
    }, 800);
  });
}

function playFifthBackgroundVideoZoomed(src) {
  const container = document.getElementById("fifthVideoContainer");
  const video = document.getElementById("fifthVideo");

  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.setAttribute("data-last-src", src);
    video.load();
  }

  container.style.display = "block";
  container.style.opacity = "0";
  container.style.transform = "translate(-50%, -90%) scale(0.4)";

  video.play().then(() => {
    requestAnimationFrame(() => {
      container.style.transition = "transform 1.8s ease, opacity 1.8s ease";
      container.style.transform = "translate(-50%, -70%) scale(1)";
      container.style.opacity = "0.4";
    });
  });
}

function scaleFifthVideoExtra() {
  const container = document.getElementById("fifthVideoContainer");

  if (!container) {
    setTimeout(scaleFifthVideoExtra, 100);
    return;
  }

  container.style.display = "block";
  container.style.transition =
    "transform 1.8s ease-in-out, opacity 1.6s ease-in-out";

  container.getBoundingClientRect();

  container.style.transform = "translate(-20%, -80%) scale(1.3)";
  container.style.opacity = "0.7";
}

function scaleFifthhhVideoExtra() {
  const container = document.getElementById("fifthVideoContainer");

  if (!container) {
    setTimeout(scaleFifthVideoExtra, 100);
    return;
  }

  container.style.display = "block";
  container.style.transition = "transform 0.8s ease, opacity 0.8s ease";

  container.getBoundingClientRect();

  container.style.transform = "translate(20%, -90%) scale(1.6)";
  container.style.opacity = "0.7";
}

function scaleSixthVideoExtra() {
  const container = document.getElementById("sixthVideoContainer");

  if (!container) {
    setTimeout(scaleSixthVideoExtra, 100);
    return;
  }

  container.style.display = "block";
  container.style.transition = "transform 0.8s ease, opacity 0.8s ease";

  container.getBoundingClientRect();

  container.style.transform = "translate(-310%, 140%) scale(1.3)";
  container.style.opacity = "0.7";
}

function hideFifthVideo() {
  const container = document.getElementById("fifthVideoContainer");
  const video = document.getElementById("fifthVideo");

  if (!container || !video) return;

  container.style.transition = "transform 0.8s ease, opacity 0.8s ease";
  container.style.transform = "translate(-50%, -70%) scale(0.2)";
  container.style.opacity = "0";

  setTimeout(() => {
    video.pause();
    video.removeAttribute("src");
    video.removeAttribute("data-last-src");
    video.load();
    container.style.display = "none";
  }, 800);
}

function updateFifthBackgroundVideoSrcOnly(src) {
  const video = document.getElementById("fifthVideo");
  const container = document.getElementById("fifthVideoContainer");

  if (!video || !container) return;

  const lastSrc = video.getAttribute("data-last-src");

  if (lastSrc !== src) {
    video.src = src;
    video.setAttribute("data-last-src", src);
    video.load();
  }

  if (container.style.display !== "block") {
    container.style.display = "block";
  }

  video.play().catch((err) => {
    console.warn("Fifth video play error:", err);
  });
}

function scaleUpAllVideosLevel2() {
  const bgContainer = document.getElementById("backgroundVideoContainer");
  if (bgContainer) {
    bgContainer.style.transition = "transform 1.8s ease, opacity 1.5s ease";
    bgContainer.style.transform = "translate(-570%, -120%) scale(3.5)";
    bgContainer.style.opacity = "1";
  }

  const sideContainer = document.getElementById("sideVideoContainer");
  if (sideContainer) {
    sideContainer.style.transition = "transform 1.8s ease, opacity 1.5s ease";
    sideContainer.style.transform = "translate(60%, -40%) scale(2.6)";
    sideContainer.style.opacity = "1";
  }

  const thirdContainer = document.getElementById("thirdVideoContainer");
  if (thirdContainer) {
    thirdContainer.style.transition = "transform 1.8s ease, opacity 1.5s ease";
    thirdContainer.style.transform = "translate(-200%, -10%) scale(2.2)";
    thirdContainer.style.opacity = "0.6";
  }
}

function scaleUpAllVideosLevel3() {
  const bgContainer = document.getElementById("backgroundVideoContainer");
  if (bgContainer) {
    bgContainer.style.transition = "transform 1.8s ease, opacity 1.5s ease";
    bgContainer.style.transform = "translate(-780%, -120%) scale(4.9)";
    bgContainer.style.opacity = "1";
  }

  const sideContainer = document.getElementById("sideVideoContainer");
  if (sideContainer) {
    sideContainer.style.transition = "transform 1.8s ease, opacity 1.5s ease";
    sideContainer.style.transform = "translate(150%, -40%) scale(3.5)";
    sideContainer.style.opacity = "1";
  }

  const thirdContainer = document.getElementById("thirdVideoContainer");
  if (thirdContainer) {
    thirdContainer.style.transition = "transform 1.8s ease, opacity 1.5s ease";
    thirdContainer.style.transform = "translate(-280%, 30%) scale(3)";
    thirdContainer.style.opacity = "1";
  }

  const fourthContainer = document.getElementById("fourthVideoContainer");
  if (fourthContainer) {
    fourthContainer.style.display = "block";
    fourthContainer.style.transition = "transform 1.8s ease, opacity 1.5s ease";
    fourthContainer.style.transform = "translate(-80%, -75%) scale(1.2)";
    fourthContainer.style.opacity = "0.6";
  }
}

function scaleAllFourVideosAdvanced() {
  const videoConfigs = [
    {
      id: "backgroundVideoContainer",
      scale: 4.5,
      translateX: "-930%",
      translateY: "-40%",
      opacity: 1,
    },
    {
      id: "sideVideoContainer",
      scale: 5,
      translateX: "325%",
      translateY: "-40%",
      opacity: 1,
    },
    {
      id: "thirdVideoContainer",
      scale: 4,
      translateX: "-335%",
      translateY: "100%",
      opacity: 1,
    },
    {
      id: "fourthVideoContainer",
      scale: 1.5,
      translateX: "-100%",
      translateY: "-75%",
      opacity: 0.8,
    },
  ];

  videoConfigs.forEach(({ id, scale, translateX, translateY, opacity }) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = "block";
      el.style.transition =
        "transform 1.6s ease-in-out, opacity 1.4s ease-in-out";
      el.style.transform = `translate(${translateX}, ${translateY}) scale(${scale})`;
      el.style.opacity = opacity;
    }
  });
}

function scale2345VideosExtra() {
  const targets = [
    {
      id: "sideVideoContainer",
      scale: 7,
      translateX: "605%",
      translateY: "50%",
      opacity: 1,
    },
    {
      id: "thirdVideoContainer",
      scale: 5.3,
      translateX: "-495%",
      translateY: "185%",
      opacity: 1,
    },
    {
      id: "fourthVideoContainer",
      scale: 1.8,
      translateX: "-150%",
      translateY: "-85%",
      opacity: 1,
    },
    {
      id: "fifthVideoContainer",
      translateX: "-110%",
      translateY: "-40%",
      opacity: 1,
    },
  ];

  targets.forEach(({ id, scale, translateX, translateY, opacity }) => {
    const eel = document.getElementById(id);
    if (eel) {
      eel.style.display = "block";
      eel.style.transition =
        "transform 1.6s ease-in-out, opacity 1.4s ease-in-out";
      eel.style.transform = `translate(${translateX}, ${translateY}) scale(${scale})`;
      eel.style.opacity = opacity;
    }
  });
}

function scale3456VideosIn16Scroll() {
  const transformations = [
    {
      id: "thirdVideoContainer",
      scale: 6.5,
      translateX: "-700%",
      translateY: "290%",
      opacity: 1,
    },
    {
      id: "fourthVideoContainer",
      scale: 2.3,
      translateX: "-190%",
      translateY: "-100%",
      opacity: 1,
    },
    {
      id: "fifthVideoContainer",
      translateX: "-70%",
      translateY: "-50%",
      opacity: 1,
    },
    {
      id: "sixthVideoContainer",
      translateX: "-270%",
      translateY: "120%",
      opacity: 0.7,
    },
  ];

  transformations.forEach(({ id, scale, translateX, translateY, opacity }) => {
    const eeel = document.getElementById(id);
    if (eeel) {
      eeel.style.display = "block";

      requestAnimationFrame(() => {
        eeel.style.transition = "transform 0.8s ease, opacity 0.8s ease";
        eeel.style.transform = `translate(${translateX}, ${translateY}) scale(${scale})`;
        eeel.style.opacity = opacity;
      });
    }
  });
}

function reset3456VideosToDefault() {
  const videoIds = [
    "thirdVideoContainer",
    "fourthVideoContainer",
    "fifthVideoContainer",
    "sixthVideoContainer",
  ];

  videoIds.forEach((id) => {
    const eeel = document.getElementById(id);
    if (eeel) {
      eeel.style.transition = "transform 0.8s ease, opacity 0.8s ease";
      eeel.style.transform = "translate(0, 0) scale(1)";
      eeel.style.opacity = "1";
    }
  });
}

function resetAllFourVideosToDefault() {
  const videoIds = [
    "backgroundVideoContainer",
    "sideVideoContainer",
    "thirdVideoContainer",
    "fourthVideoContainer",
  ];

  videoIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.transition = "transform 0.5s ease, opacity 0.4s ease";
      el.style.transform = "translate(0, 0) scale(1)";
      el.style.opacity = "1";
    }
  });
}

function normalizeFourBackgroundVideos() {
  const containers = [
    "sideVideoContainer",
    "thirdVideoContainer",
    "fourthVideoContainer",
    "fifthVideoContainer",
  ];

  containers.forEach((id) => {
    const eel = document.getElementById(id);
    if (eel) {
      eel.style.transition = "transform 0.8s ease, opacity 0.6s ease";
      eel.style.transform = "translate(0, 0) scale(1)";
      eel.style.opacity = "1";
    }
  });
}

function replaceBackgroundVideoSrcOnly(src) {
  const video = document.getElementById("backgroundVideo");
  if (!video) return;
  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
    video.play();
  }
}

function replaceSideVideoSrcOnly(src) {
  const video = document.getElementById("sideVideo");
  if (!video) return;
  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
    video.play();
  }
}

function replaceThirdVideoSrcOnly(src) {
  const video = document.getElementById("thirdVideo");
  if (!video) return;
  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
    video.play();
  }
}

function replaceFourthVideoSrcOnly(src) {
  const container = document.getElementById("fourthVideoContainer");
  const video = document.getElementById("fourthVideo");

  if (!container || !video) {
    return;
  }

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
  }

  container.style.display = "block";
  video
    .play()
    .then(() => {
      console.log("🎬 fourthVideo PLAY bo‘ldi");
    })
    .catch((err) => {
      console.error("❌ fourthVideo play error:", err);
    });
}

function resetAllVideoScalesToLevel2() {
  const bg = document.getElementById("backgroundVideoContainer");
  const side = document.getElementById("sideVideoContainer");
  const third = document.getElementById("thirdVideoContainer");
  const fourth = document.getElementById("fourthVideoContainer");

  if (bg) {
    bg.style.transition = "transform 1s ease, opacity 1s ease";
    bg.style.transform = "translate(-350%, -85%) scale(1.85)";
    bg.style.opacity = "1";
  }

  if (side) {
    side.style.transition = "transform 1s ease, opacity 1s ease";
    side.style.transform = "translate(-50%, -45%) scale(1.7)";
    side.style.opacity = "0.8";
  }

  if (third) {
    third.style.transition = "transform 1s ease, opacity 1s ease";
    third.style.transform = "translate(-120%, -45%) scale(1.4)";
    third.style.opacity = "0.5";
  }

  if (fourth) {
    fourth.style.transition = "transform 1s ease, opacity 1s ease";
    fourth.style.transform = "translate(-40%, -60%) scale(1.2)";
    fourth.style.opacity = "0.2";
  }
}

function playFourthBackgroundVideoZoomed(src) {
  const container = document.getElementById("fourthVideoContainer");
  const video = document.getElementById("fourthVideo");
  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.setAttribute("data-last-src", src);
    video.load();
  }

  container.style.display = "block";
  container.style.opacity = "0";
  container.style.transform = "translate(-50%, -90%) scale(0.4)";

  video.play().then(() => {
    requestAnimationFrame(() => {
      container.style.transition = "transform 2s ease, opacity 2s ease";
      container.style.transform = "translate(-50%, -70%) scale(1)";
      container.style.opacity = "0.2";
    });
  });
}

function hideFourthVideo() {
  const container = document.getElementById("fourthVideoContainer");
  const video = document.getElementById("fourthVideo");
  if (!container || !video) return;

  container.style.opacity = "0";
  container.style.transform = "translate(-10%, -90%) scale(0.4)";

  setTimeout(() => {
    video.pause();
    video.removeAttribute("src");
    video.removeAttribute("data-last-src");
    video.load();
    container.style.display = "none";
  }, 800);
}

function scaleUpFourthVideoOnly() {
  const fourthContainer = document.getElementById("fourthVideoContainer");
  if (fourthContainer) {
    fourthContainer.style.transition = "transform 1.5s ease, opacity 1.5s ease";
    fourthContainer.style.transform = "translate(-50%, -95%) scale(1.2)";
    fourthContainer.style.opacity = "0.6";
  }
}

function scaleUpAllVideosMore() {
  const bgContainer = document.getElementById("backgroundVideoContainer");
  if (bgContainer) {
    bgContainer.style.transition = "transform 1.5s ease, opacity 1.5s ease";
    bgContainer.style.transform = "translate(-440%, -110%) scale(2.8)";
    bgContainer.style.opacity = "1";
  }

  const sideContainer = document.getElementById("sideVideoContainer");
  if (sideContainer) {
    sideContainer.style.transition = "transform 1.5s ease, opacity 1.5s ease";
    sideContainer.style.transform = "translate(-10%, -45%) scale(1.85)";
    sideContainer.style.opacity = "0.9";
  }

  const thirdContainer = document.getElementById("thirdVideoContainer");
  if (thirdContainer) {
    thirdContainer.style.transition = "transform 1.5s ease, opacity 1.5s ease";
    thirdContainer.style.transform = "translate(-120%, -45%) scale(2.1)";
    thirdContainer.style.opacity = "0.8";
  }
}

function playBackgroundVideo(src) {
  if (src === lastPlayedBackgroundSrc) return;
  lastPlayedBackgroundSrc = src;
  const videoContainer = document.getElementById("backgroundVideoContainer");
  const video = document.getElementById("backgroundVideo");

  if (!videoContainer || !video) return;

  video.src = src;
  video.load();

  videoContainer.style.display = "block";
  videoContainer.style.transform = "translate(-150%, -50%) scale(0.4)";
  videoContainer.style.opacity = "0";

  video.play().then(() => {
    requestAnimationFrame(() => {
      videoContainer.style.transform = "translate(-220%, -70%) scale(1)";
      videoContainer.style.opacity = "0.7";
    });
  });
}

function showNextSideVideoAnimated(newVideoSrc) {
  if (newVideoSrc === lastPlayedSideSrc) return;
  lastPlayedSideSrc = newVideoSrc;
  const sideVideoContainer = document.getElementById("sideVideoContainer");
  const sideVideo = document.getElementById("sideVideo");

  if (!sideVideoContainer || !sideVideo) return;

  sideVideo.src = newVideoSrc;
  sideVideo.load();

  sideVideoContainer.style.display = "block";
  sideVideoContainer.style.transform = "translate(-220%, -50%) scale(0.4)";
  sideVideoContainer.style.opacity = "0";

  sideVideo.play().then(() => {
    requestAnimationFrame(() => {
      sideVideoContainer.style.transform = "translate(-85%, -55%) scale(1)";
      sideVideoContainer.style.opacity = "0.1";
    });
  });
}

function playBackgroundVideoZoomed(src) {
  const videoContainer = document.getElementById("backgroundVideoContainer");
  const video = document.getElementById("backgroundVideo");
  if (!videoContainer || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
  }

  videoContainer.style.display = "block";
  videoContainer.style.transform = "translate(-150%, -50%) scale(1)";
  videoContainer.style.opacity = "0.8";

  video.play().then(() => {
    requestAnimationFrame(() => {
      videoContainer.style.transition = "transform 1s ease, opacity 1s ease";
      videoContainer.style.transform = "translate(-250%, -80%) scale(1.35)";
      videoContainer.style.opacity = "1";
    });
  });
}

function showNextSideVideoZoomed(src) {
  const sideVideoContainer = document.getElementById("sideVideoContainer");
  const video = document.getElementById("sideVideo");
  if (!sideVideoContainer || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
  }

  sideVideoContainer.style.display = "block";
  sideVideoContainer.style.transform = "translate(-100%, -55%) scale(1)";
  sideVideoContainer.style.opacity = "0.1";

  video.play().then(() => {
    requestAnimationFrame(() => {
      sideVideoContainer.style.transition =
        "transform 1s ease, opacity 1s ease";
      sideVideoContainer.style.transform = "translate(-80%, -55%) scale(1.2)";
      sideVideoContainer.style.opacity = "0.3";
    });
  });
}

function resetZoomedVideos() {
  const backgroundVideoContainer = document.getElementById(
    "backgroundVideoContainer"
  );
  const backgroundVideo = document.getElementById("backgroundVideo");

  const sideVideoContainer = document.getElementById("sideVideoContainer");
  const sideVideo = document.getElementById("sideVideo");

  if (backgroundVideoContainer && backgroundVideo) {
    backgroundVideoContainer.style.transition =
      "transform 0.8s ease, opacity 0.8s ease";
    backgroundVideoContainer.style.transform =
      "translate(-220%, -70%) scale(1)";
    backgroundVideoContainer.style.opacity = "0.7";
  }

  if (sideVideoContainer && sideVideo) {
    sideVideoContainer.style.transition =
      "transform 0.8s ease, opacity 0.8s ease";
    sideVideoContainer.style.transform = "translate(-85%, -55%) scale(1)";
    sideVideoContainer.style.opacity = "0.1";
  }
}

function playBackgroundVideoEnhancedZoom(src) {
  const videoContainer = document.getElementById("backgroundVideoContainer");
  const video = document.getElementById("backgroundVideo");
  if (!videoContainer || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
  }

  videoContainer.style.display = "block";
  videoContainer.style.transform = "translate(-150%, -50%) scale(1)";
  videoContainer.style.opacity = "0.8";

  video.play().then(() => {
    requestAnimationFrame(() => {
      videoContainer.style.transition =
        "transform 2.5s ease-out, opacity 2s ease";
      videoContainer.style.transform = "translate(-285%, -80%) scale(1.6)";
      videoContainer.style.opacity = "1";
      videoContainer.style.filter = "blur(0.5px)";

      setTimeout(() => {
        videoContainer.style.filter = "none";
      }, 2500);
    });
  });
}

function showNextSideVideoEnhancedZoom(src) {
  const sideVideoContainer = document.getElementById("sideVideoContainer");
  const video = document.getElementById("sideVideo");
  if (!sideVideoContainer || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
  }

  sideVideoContainer.style.display = "block";
  sideVideoContainer.style.transform = "translate(-100%, -55%) scale(1)";
  sideVideoContainer.style.opacity = "0.1";

  video.play().then(() => {
    requestAnimationFrame(() => {
      sideVideoContainer.style.transition =
        "transform 2.2s ease-out, opacity 1.8s ease";
      sideVideoContainer.style.transform = "translate(-60%, -45%) scale(1.4)";
      sideVideoContainer.style.opacity = "0.7";
    });
  });
}

function playThirdBackgroundVideoZoomed(src) {
  const container = document.getElementById("thirdVideoContainer");
  const video = document.getElementById("thirdVideo");
  if (!container || !video) return;

  if (video.getAttribute("data-last-src") !== src) {
    video.src = src;
    video.load();
    video.setAttribute("data-last-src", src);
  }

  container.style.display = "block";
  container.style.transform = "translate(-50%, -50%) scale(0.8)";
  container.style.opacity = "0";

  video.play().then(() => {
    requestAnimationFrame(() => {
      container.style.transition = "transform 2s ease, opacity 2s ease";
      container.style.transform = "translate(-50%, -45%) scale(1.1)";
      container.style.opacity = "0.1";
    });
  });
}

function scaleUpAllVideos() {
  const bgContainer = document.getElementById("backgroundVideoContainer");
  if (bgContainer) {
    bgContainer.style.transition = "transform 1.5s ease, opacity 1.5s ease";
    bgContainer.style.transform = "translate(-350%, -85%) scale(1.85)";
    bgContainer.style.opacity = "1";
  }

  const sideContainer = document.getElementById("sideVideoContainer");
  if (sideContainer) {
    sideContainer.style.transition = "transform 1.5s ease, opacity 1.5s ease";
    sideContainer.style.transform = "translate(-50%, -45%) scale(1.7)";
    sideContainer.style.opacity = "0.8";
  }

  const thirdContainer = document.getElementById("thirdVideoContainer");
  if (thirdContainer) {
    thirdContainer.style.transition = "transform 1.5s ease, opacity 1.5s ease";
    thirdContainer.style.transform = "translate(-120%, -45%) scale(1.4)";
    thirdContainer.style.opacity = "0.5";
  }
}

function resetThirdVideoZoom() {
  const thirdContainer = document.getElementById("thirdVideoContainer");
  if (thirdContainer) {
    thirdContainer.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    thirdContainer.style.transform = "translate(-50%, -45%) scale(1.1)";
    thirdContainer.style.opacity = "0.1";
  }
}

function hideThirdVideo() {
  const container = document.getElementById("thirdVideoContainer");
  const video = document.getElementById("thirdVideo");
  if (!container || !video) return;

  container.style.opacity = "0";
  container.style.transform = "translate(-50%, -50%) scale(0.4)";

  setTimeout(() => {
    video.pause();
    video.removeAttribute("src");
    video.load();
    container.style.display = "none";
  }, 800);
}

function stopBackgroundVideo() {
  const videoContainer = document.getElementById("backgroundVideoContainer");
  const video = document.getElementById("backgroundVideo");
  if (!videoContainer || !video) return;

  videoContainer.style.opacity = "0";
  videoContainer.style.transform = "translate(-150%, -50%) scale(0.4)";

  setTimeout(() => {
    video.pause();
    video.removeAttribute("src");
    video.load();
    videoContainer.style.display = "none";
    lastPlayedBackgroundSrc = "";
  }, 800);
}

function hideSideVideo() {
  const sideVideoContainer = document.getElementById("sideVideoContainer");
  const sideVideo = document.getElementById("sideVideo");
  if (!sideVideoContainer || !sideVideo) return;

  sideVideoContainer.style.opacity = "0";
  sideVideoContainer.style.transform = "translate(-150%, -50%) scale(0.4)";

  setTimeout(() => {
    sideVideo.pause();
    sideVideo.removeAttribute("src");
    sideVideo.load();
    sideVideoContainer.style.display = "none";
    lastPlayedSideSrc = "";
  }, 800);
}

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

function renderDreamMachineHeader() {
  const existing = document.querySelector(".dream-header-container");
  if (existing) return;

  const header = document.createElement("div");
  header.className = "dream-header-container";

  header.innerHTML = `
    <div class="header-left">
      <img class="invert" src="./img/dreamMachine.svg" alt="Dream Machine" />
    </div>
    <div class="header-right">
      <button class="btnhd">Join Us</button>
      <button class="btnhd">Photon</button>
      <button class="btnhd">Ray2</button>
      <button class="hd-try">Try Now</button>
    </div>
    <div class="header-center">
      <h2 id="typed-text">Make it real with <br/> <span class="drm_spn">Dream</span> Machine</h2>
      <p>A new fluid medium to create stunning <br/> images and videos that feel out of this <br/> world. All you need to do is ask.</p>
    </div>
  `;

  document.body.appendChild(header);
}

function removeDreamMachineHeader() {
  const header = document.querySelector(".dream-header-container");
  if (header) {
    header.remove();
  }
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
