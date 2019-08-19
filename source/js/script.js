var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var link = document.querySelectorAll('.button__order');
var popup = document.querySelector('.modal');
var overlayClose = document.querySelector('.overlay');
var escapeButton = 27;

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function (evt)  {
    evt.preventDefault();
    popup.classList.add('modal--show');
  });
}

overlayClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal--show');
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode == escapeButton) {
    if (popup.classList.contains('modal--show')) {
      evt.preventDefault();
      popup.classList.remove('modal--show');
    }
  }
})
