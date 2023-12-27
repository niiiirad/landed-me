const intellectSection = document.querySelector("div.intellect-vid");
const slide = document.querySelector("div.intellect-slide");

// criti-sections
const critiSection = document.querySelector("div.criti-sections");
const critiItems1 = document.querySelectorAll("div.crititexting-odd");
const critiItems2 = document.querySelector("div.crititexting-even");

const intellectScroll = () => {
  const distance = window.scrollY - intellectSection.offsetTop;
  const total = intellectSection.clientHeight - window.innerHeight;

  let percentage = distance / total;
  percentage = Math.max(0, percentage);
  percentage = Math.min(0.82, percentage);

  slide.style.translate = `-${percentage * 100}%`;
};

const critiScroll = () => {
  const distance = window.scrollY - critiSection.offsetTop;
  const total = critiSection.clientHeight - window.innerHeight;

  let percentage = distance / total;
  percentage = Math.max(0, percentage);
  percentage = Math.min(1, percentage);

  if (percentage > 0.3) {
    // critiItems1.style.opacity = "1";
    critiItems1.forEach((element) => {
      element.style.opacity = "1";
    });
  } else {
    critiItems1.forEach((element) => {
      element.style.opacity = "0";
    });
  }

  if (percentage > 0.6) {
    critiItems2.style.opacity = "1";
  } else {
    critiItems2.style.opacity = "0";
  }
};

intellectScroll();
critiScroll();
window.addEventListener("scroll", intellectScroll);
window.addEventListener("scroll", critiScroll);
