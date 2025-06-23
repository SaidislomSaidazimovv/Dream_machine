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
