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
