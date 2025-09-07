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

// gulafuアニメーション---------------------------------------------------------------------------------

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => video.play()),
    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // 再生位置を0秒にリセット
    });
});

// galleryアニメーション---------------------------------------------------------------------------------

const galleryList = document.querySelectorAll(".gallery-list img");
const galleryImg = document.querySelector(".gallery-img img");

galleryList.forEach((list) => {
  list.addEventListener("mouseover", (event) => {
    galleryImg.src = event.target.src;
    galleryImg.animate({ opacity: [0, 1] }, 500);
  });
});
