(() => {
  const refs = {
    openModalBtnHR: document.querySelector('[data-modal-open-hero]'),
    openModalBtn: document.querySelector('[data-modal-open-store]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    submitModalBtn: document.querySelector('[data-modal-submit]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtnHR.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.submitModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();
