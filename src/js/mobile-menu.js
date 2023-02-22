(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const anemoneMenuBtn = document.querySelector('.js-anemone-menu-btn');
    const aboutMenuBtn = document.querySelector('.js-about-menu-btn');
    const storeMenuBtn = document.querySelector('.js-store-menu-btn');
    const deliveryMenuBtn = document.querySelector('.js-delivery-menu-btn');
    const blogMenuBtn = document.querySelector('.js-blog-menu-btn');

    const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    anemoneMenuBtn.addEventListener('click', toggleMenu);
    aboutMenuBtn.addEventListener('click', toggleMenu);
    storeMenuBtn.addEventListener('click', toggleMenu);
    deliveryMenuBtn.addEventListener('click', toggleMenu);
    blogMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    });
})();