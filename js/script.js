// テキスト浮き出し---------------------------------------------------------------------------------

const mainP = document.querySelector(".main-p");

const text1 = (items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.animate(
        { opacity: [0, 1] },
        {
          duration: 2000,
          fill: "forwards",
        }
      );
    }
  });
};

const Observer1 = new IntersectionObserver(text1);
Observer1.observe(mainP);

const indexH3 = document.querySelector(".index-h3");

const text2 = (items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.animate(
        { opacity: [0, 1] },
        {
          duration: 1000,
          fill: "forwards",
        }
      );
    }
  });
};

const Observer2 = new IntersectionObserver(text2);
Observer2.observe(indexH3);

const wButton = document.querySelector(".w-button");

const text3 = (items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.animate(
        { opacity: [0, 1] },
        {
          duration: 2000,
          fill: "forwards",
        }
      );
    }
  });
};

const Observer3 = new IntersectionObserver(text3);
Observer3.observe(wButton);

const header = document.querySelector(".header-div");
const footer = document.querySelector("footer");

const text4 = (items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      header.animate(
        { opacity: [1, 0] },
        {
          duration: 200,
          fill: "forwards",
        }
      );
    } else {
      header.animate(
        { opacity: [0, 1] },
        {
          duration: 1000,
          fill: "forwards",
        }
      );
    }
  });
};

const Observer4 = new IntersectionObserver(text4);
Observer4.observe(footer);

// bannerアニメーション---------------------------------------------------------------------------------

const cards = document.querySelectorAll(".card");
let current = 0;

function updateCards() {
  cards.forEach((card, i) => {
    const index = (i - current + cards.length) % cards.length;

    if (index === 0) {
      card.style.transform = "translate(-50%, -50%) scale(1)";
      card.style.zIndex = 3;
      card.style.filter = "grayscale(0)";
      card.style.opacity = 1;
    } else if (index === 1) {
      card.style.transform = "translate(30%, -50%) scale(0.6)";
      card.style.zIndex = 2;
      card.style.filter = "grayscale(100%)";
      card.style.opacity = 0.8;
    } else {
      card.style.transform = "translate(-130%, -50%) scale(0.6)";
      card.style.zIndex = 2;
      card.style.filter = "grayscale(100%)";
      card.style.opacity = 0.8;
    }
  });
}

function next() {
  current = (current + 1) % cards.length;
  updateCards();
}

function prev() {
  current = (current - 1 + cards.length) % cards.length;
  updateCards();
}

updateCards();

let autoRotate = setInterval(next, 4000);

document.querySelector(".carousel").addEventListener("click", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  if (e.clientX > rect.left + rect.width / 2) {
    next();
  } else {
    prev();
  }
  clearInterval(autoRotate);
  autoRotate = setInterval(next, 4000);
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(autoRotate);
  } else {
    autoRotate = setInterval(next, 4000);
  }
});

// gulafuアニメーション---------------------------------------------------------------------------------

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => video.play()),
    video.addEventListener("mouseleave", () => video.pause());
});
