const currency = document.querySelector(".currency");
const currencyBtn = document.querySelector(".currency-btn");
const options = document.querySelectorAll(".option");
const btnText = document.querySelector(".btn-text");


currencyBtn.addEventListener("click", () => {
  currency.classList.toggle("active");
});
options.forEach(option => {
  option.addEventListener("click", () => {
    let selectOption = option.querySelector(".opt-text").innerText;
    btnText.innerText = selectOption;
    currency.classList.remove("active");
  });

});

var swiper = new Swiper(".myBrand", {
  slidesPerView: 6,
  spaceBetween: 22,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  }
});

// Main-menu
const navBar = document.querySelector(".navbar");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");

navOpen.addEventListener("click", ()=>{
  navBar.classList.add("show-menu");
});
navClose.addEventListener("click", ()=>{
  navBar.classList.remove("show-menu");
})

// Main-menu Remove when click a single menu
const navLink = document.querySelectorAll(".nav-link ");
function clickNavLink() {
  const navBar = document.querySelector(".navbar");
  navBar.classList.remove("show-menu");
}
navLink.forEach(navLink => {
  navLink.addEventListener("click", clickNavLink)
});


// Search Open close

const openSearch = document.querySelector(".show-search");
const closeSearch = document.querySelector(".close-search");

openSearch.addEventListener("click", ()=>{
  navBar.classList.add("searh-show");
  navBar.classList.remove("show-menu");
})
closeSearch.addEventListener("click", ()=>{
  navBar.classList.remove("searh-show")
})




var swiper = new Swiper(".mySwiperone", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


var swiper = new Swiper(".reSlider", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});