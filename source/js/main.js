const headerMenu = document.querySelector('.header-menu');
const headerButton = document.querySelector('.header-menu__button');
const headerLogoMobile = document.querySelector('.header__logo-image--mobile');

const isEscapeKey = (evt) => evt.keyCode === 27;

const showMobileMenu = () => {
  headerMenu.classList.remove('header-menu--nojs');
  headerLogoMobile.classList.add('header__logo-image--mobile-visible');

  headerButton.addEventListener('click', function () {
    if (headerMenu.classList.contains('header-menu--opened')) {
      headerMenu.classList.remove('header-menu--opened');
      headerMenu.classList.add('header-menu--closed');
      headerLogoMobile.classList.add('header__logo-image--mobile-visible');
    } else {
      headerMenu.classList.remove('header-menu--closed');
      headerMenu.classList.add('header-menu--opened');
      headerLogoMobile.classList.remove('header__logo-image--mobile-visible');
    }
  });

  const closeMenuEscape = (evt) => {
    if (isEscapeKey(evt)) {
      headerMenu.classList.remove('header-menu--opened');
      headerMenu.classList.add('header-menu--closed');
      headerLogoMobile.classList.add('header__logo-image--mobile-visible');
    }
  };

  document.addEventListener('keydown', closeMenuEscape);

  document.addEventListener('click', (evt) => {
    const withinHeaderMenu = evt.composedPath().includes(headerMenu);

    if (!withinHeaderMenu) {
      headerMenu.classList.remove('header-menu--opened');
      headerMenu.classList.add('header-menu--closed');
      headerLogoMobile.classList.add('header__logo-image--mobile-visible');
    }
  });
};

showMobileMenu();
