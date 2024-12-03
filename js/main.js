const tabs = document.querySelectorAll(".green-offer__tab");
const contents = document.querySelectorAll(".green-offer__content-item");

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    tabs.forEach((t) => t.classList.remove("--active"));
    tab.classList.add("--active");

    const targetSelector = tab.getAttribute("href");
    const targetElement = document.querySelector(targetSelector);

    contents.forEach((content) => content.classList.remove("--active"));
    targetElement.classList.add("--active");
  });
});

$(document).ready(function () {
  $(".clients__slider").slick({
    prevArrow: '<button type="button" class="button slick-prev"><img src="./images/prevArrow.svg" alt="стрелка назад" width="40"></button>',
    nextArrow: '<button type="button" class="button slick-next"><img src="./images/nextArrow.svg" alt="стрелка вперед" width="40"></button>',
  });
});
