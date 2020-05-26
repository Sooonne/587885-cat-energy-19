var pageHeader = document.querySelector(".page-header");
var buttonOpen = pageHeader.querySelector(".page-header__toggle--open");
var buttonClose = pageHeader.querySelector(".page-header__toggle--close");
var menu = pageHeader.querySelector(".site-list");
var CLASS_HIDDEN = "visually-hidden";
var CLASS_HIDDEN_MENU = "visually-hidden-menu";

buttonClose.addEventListener("click", function() {
  buttonOpen.classList.remove(CLASS_HIDDEN);
  menu.classList.add(CLASS_HIDDEN_MENU);
  buttonClose.classList.add(CLASS_HIDDEN);
});

buttonOpen.addEventListener("click", function() {
  buttonOpen.classList.add(CLASS_HIDDEN);
  menu.classList.remove(CLASS_HIDDEN_MENU);
  buttonClose.classList.remove(CLASS_HIDDEN);
});
