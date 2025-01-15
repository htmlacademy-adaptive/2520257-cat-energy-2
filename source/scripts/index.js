/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const mapIframe = document.querySelector('.map__iframe');

navMain.classList.remove('main-nav--nojs');
mapIframe.classList.remove('map__iframe--nojs');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('main-nav--closed');
});
