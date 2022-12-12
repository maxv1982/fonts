//slider
const images = document.querySelectorAll(".slider-line img");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSllider();
}

window.addEventListener("resize", init);
setTimeout(init, 3000);

document.querySelector(".btn-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSllider();
});

document.querySelector(".btn-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSllider();
});

function rollSllider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

function sliderAuto() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSllider();
}

setInterval(sliderAuto, 5000);

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu-body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    this.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    window.document.body.classList.toggle("_scroll-hidden");
  });
}

// slider ourwork
const imagesW = document.querySelectorAll(".our-work-line img");
const sliderLineW = document.querySelector(".our-work-line");
let countW = 0;
let widthW;

function initW() {
  widthW = document.querySelector(".our-work").offsetWidth;
  sliderLineW.style.width = widthW * imagesW.length + "px";
  imagesW.forEach((item) => {
    item.style.width = widthW + "px";
    item.style.height = "auto";
  });
  rollSlliderW();
}

window.addEventListener("resize", initW);
setTimeout(initW, 3000);

document.querySelector(".btn-next1").addEventListener("click", function () {
  countW++;
  if (countW >= imagesW.length) {
    countW = 0;
  }
  rollSlliderW();
});

document.querySelector(".btn-prev1").addEventListener("click", function () {
  countW--;
  if (countW < 0) {
    countW = imagesW.length - 1;
  }
  rollSlliderW();
});

function rollSlliderW() {
  sliderLineW.style.transform = "translate(-" + countW * widthW + "px)";
}

function sliderAutoW() {
  countW++;
  if (countW >= imagesW.length) {
    countW = 0;
  }
  rollSlliderW();
}

setInterval(sliderAutoW, 5000);

// Прокрутка при клике
const menuLinkMobile = document.querySelectorAll(".menu__link-mobile");
const menuSubLinkMobile = document.querySelectorAll(".menu__link");
const menuSubList = document.querySelector(".menu-sub__list");
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector(".header").offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

function menuMobile() {
  for (let i = 0; i < menuLinkMobile.length; i++) {
    let menuLinkMobiles = menuLinkMobile[i];
    if (i != 1 && i != 2) {
      menuLinkMobiles.addEventListener("click", function () {
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
        window.document.body.classList.remove("_scroll-hidden");
      });
    }
    if (i == 1 && i == 2) {
      menuLinkMobiles.addEventListener("click", function () {
        
      });
    }
  }
  for (let i = 0; i < menuSubLinkMobile.length; i++) {
    let menuSubLinkMobiles = menuSubLinkMobile[i];
    menuSubLinkMobiles.addEventListener("click", function () {
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
      window.document.body.classList.remove("_scroll-hidden");
    });
  }
}
menuMobile();

// кнопка наверх
const iconTop = document.querySelector(".btn-top");

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMcontetLoaded", checkScroll);

function checkScroll() {
  let scrollPos = window.scrollY;
  var screenHeight = window.screen.height;
  var scrolled;
  if (scrollPos >= 0 && scrollPos < screenHeight) {
    iconTop.classList.remove("_active");
  } else {
    iconTop.classList.add("_active");
  }
  document.querySelector(".btn-top").onclick = function () {
    scrolled = window.pageYOffset;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}
setTimeout(checkScroll, 1000);

const callBlock = document.querySelector('.call-center');
const iconCloseCall = document.querySelector('.icon-close');

function callShove () {
  callBlock.classList.add('_active');
  iconCloseCall.addEventListener("click", function() {
    callBlock.classList.remove('_active');
  })
}
setTimeout(callShove, 10000)

// отправка формы
function sendForm() {
  let formContainer = document.querySelector(".container-form");
  let btnHeder = document.querySelectorAll(".button-form");
  let iconClose = document.querySelector(".icon-close_form");

  document.addEventListener("DOMcontetLoaded", resizeScreenHeight);
  window.addEventListener("resize", resizeScreenHeight);
  function resizeScreenHeight() {
    let windowInnerHeight = document.documentElement.clientHeight;
    
    for(let i = 0; i < btnHeder.length; i++) {
      let btnHeders = btnHeder[i];
      btnHeders.addEventListener("click", function () {
        formContainer.style.height = windowInnerHeight + "px";
        formContainer.classList.add("_active");
        window.document.body.classList.add("_scroll-hidden");
      });
    }
    iconClose.addEventListener("click", function () {
      formContainer.classList.remove("_active");
      window.document.body.classList.remove("_scroll-hidden");
    });
  }
  resizeScreenHeight();
}
sendForm();

//Плавное появление картинок при скролле
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let optionsImg = {
  threshold: [0.5],
};
let observerImg = new IntersectionObserver(onEntry, optionsImg);
let elements = document.querySelectorAll(".block-img");

for (let elm of elements) {
  observerImg.observe(elm);
}