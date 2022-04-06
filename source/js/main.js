const headerMenu = document.querySelector('.header-menu');
const headerButton = document.querySelector('.header-menu__button');
const headerLogoMobile = document.querySelector('.header__logo-image--mobile');
const anchors = document.querySelectorAll('.header-menu__link');
const regPhone = /[0-9\-()+\s+]$/;
const phoneField = document.querySelector('input[type="tel"]');

const isEscapeKey = (evt) => evt.keyCode === 27;

// переключение мобильного меню

const showMobileMenu = () => {
  headerMenu.classList.remove('header-menu--closed');
  headerMenu.classList.add('header-menu--opened');
  headerLogoMobile.classList.remove('header__logo-image--mobile-visible');
};

const closeMobileMenu = () => {
  headerMenu.classList.remove('header-menu--opened');
  headerMenu.classList.add('header-menu--closed');
  headerLogoMobile.classList.add('header__logo-image--mobile-visible');
};

const toggleMobileMenu = () => {
  headerMenu.classList.remove('header-menu--nojs');
  headerLogoMobile.classList.add('header__logo-image--mobile-visible');

  headerButton.addEventListener('click', function () {
    if (headerMenu.classList.contains('header-menu--opened')) {
      closeMobileMenu();
    } else {
      showMobileMenu();
    }
  });

  const closeMenuEscape = (evt) => {
    if (isEscapeKey(evt)) {
      closeMobileMenu();
    }
  };

  document.addEventListener('keydown', closeMenuEscape);

  document.addEventListener('click', (evt) => {
    const withinHeaderMenu = evt.composedPath().includes(headerMenu);

    if (!withinHeaderMenu) {
      closeMobileMenu();
    }
  });
};

toggleMobileMenu();

// плавный скролл

for (let anchor of anchors) {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();

    const blockID = anchor.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
    });
  });
}

// валидация поля номера

const checkPhone = () => {
  phoneField.addEventListener('input', () => {

    if (!regPhone.test(phoneField.value)) {
      phoneField.setCustomValidity('допустимы только цифры и символы + - ( )');
    } else {
      phoneField.setCustomValidity('');
    }
    phoneField.reportValidity();
  });
};

checkPhone();
