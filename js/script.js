// Смена background
(() => {
  const images = document.querySelectorAll('.background__img');
  let currentIndex = 0;

  images[currentIndex].classList.add('active');

  setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 10000);
})();

// Кнопка меню
const burgerMenu = document.querySelector('.menu-btn__btn');
const wrapper = document.querySelector('.wrapper');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  wrapper.classList.toggle('active');
});

// Карусель
const horizontalSwiper = new Swiper('.swiper-h', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Табы по галерее
const tabLinks = document.querySelectorAll('.swiper-h__link');
const tabContents = document.querySelectorAll('.gallery__photo-wrapper');
const gallery = document.querySelector('.gallery');

tabLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Убираем активный класс со всех ссылок
    tabLinks.forEach((link) => link.classList.remove('active'));

    // Добавляем активный класс на текущую ссылку
    e.currentTarget.classList.add('active');

    // Скрываем все табы
    tabContents.forEach((content) => content.classList.remove('active'));

    // Тогглим класс для показа галереи
    gallery.classList.toggle('show-gallery');

    // Показываем нужный таб
    const tabId = e.currentTarget.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});

//Кнопка скрытия коллекции фото
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Скрываем все табы
  tabContents.forEach((content) => content.classList.remove('active'));

  // Тогглим класс для показа галереи
  gallery.classList.toggle('show-gallery');
});

// Переходы по меню
const menuLinks = document.querySelectorAll('.menu__link');
const main = document.querySelector('.main');

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Убираем активный класс со всех ссылок
    menuLinks.forEach((link) => link.classList.remove('active'));

    // Добавляем активный класс на текущую ссылку
    e.currentTarget.classList.add('active');

    // Скрываем все табы
    main.classList.remove('active');
    gallery.classList.remove('active');

    // Тогглим классы для wrapper и кнопки меню
    wrapper.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    // Показываем нужный таб
    const tabId = e.currentTarget.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});
