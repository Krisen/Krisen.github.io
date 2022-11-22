/* Спойлеры JQuery */
$(document).ready(function () {
  $(".main__title-spoiler").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

/* Бургер */
const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu__icon");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
  menu.querySelectorAll(".link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}

/* Навбар */
let lastscroll = 0;
const defaultOffset = 70;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastscroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    // scrol down
    header.classList.add("hide");
  } else if (scrollPosition() < lastscroll && containHide()) {
    // scroll up
    header.classList.remove("hide");
  }
  lastscroll = scrollPosition();
});

/* Мультиязычность меню */

// if (window.NodeList && !NodeList.prototype.forEach) {
//   NodeList.prototype.forEach = function (callback, thisArg) {
//     thisArg = thisArg || window;
//     for (var i = 0; i < this.length; i++) {
//       callback.call(thisArg, this[i], i, this);
//     }
//   };
// }

// document.querySelectorAll(".dropdown").forEach((dropDownWrapper) => {
//   const menuLangList = dropDownWrapper.querySelector(".dropdown__list");
//   const menuLangButton = dropDownWrapper.querySelector(".dropdown__button");
//   const menuLangItem = dropDownWrapper.querySelectorAll(".dropdown__item");
//   const menuLangInput = dropDownWrapper.querySelector(".input__hidden");

//   // Клик по кнопке. Открыть/Закрыть select
//   menuLangButton.addEventListener("click", function (e) {
//     menuLangList.classList.toggle("dropdown__list--visible");
//     menuLangButton.classList.toggle("active");
//   });

//   // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
//   menuLangItem.forEach(function (listItem) {
//     listItem.addEventListener("click", function (e) {
//       e.stopPropagation();
//       menuLangButton.innerText = this.innerText;
//       menuLangButton.focus();
//       menuLangInput.value = this.dataset.value;
//       menuLangList.classList.remove("dropdown__list--visible");
//     });
//   });

//   // Клик снаружи дропдауна. Закрыть дропдаун
//   document.addEventListener("click", function (e) {
//     if (e.target !== menuLangButton) {
//       menuLangList.classList.remove("dropdown__list--visible");
//     }
//   });

//   // Нажатие на Tab или Escape. Закрыть дропдаун
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Tab" || e.key === "Escape") {
//       menuLangList.classList.remove("dropdown__list--visible");
//     }
//   });
// });

// /* Мультиязычность */

// var arrLang = {
//   en: {
//     "home-li": "home",
//     "about me-li": "about me",
//     "projects-li": "projects",
//     "useful-li": "useful",
//     "support-li": "support",
//   },
//   ru: {
//     "home-li": "главная",
//     "about me-li": "обо мне",
//     "projects-li": "проекты",
//     "useful-li": "полезное",
//     "support-li": "связь",
//   },
// };
// $(function () {
//   $(".translate").click(function () {
//     var lang = $(this).attr("id");

//     $(".lang").each(function (index, item) {
//       $(this).text(arrLang[lang][$(this).attr("key")]);
//     });
//   });
// });
