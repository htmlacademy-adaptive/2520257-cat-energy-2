/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('main-nav--closed');
});

//вариант с дополнительным классом
// navToggle.addEventListener('click', () => {

//   if (navMain.classList.contains('.main-nav--closed')) {
//     navToggle.classList.toggle('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--opened');
//     navMain.classList.remove('main-nav--closed');
//   }
// });
