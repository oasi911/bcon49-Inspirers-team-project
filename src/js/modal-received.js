(() => {
  const refs = {
    openModalBtnRec: document.querySelector('[data-modal-open-received]'),
    closeModalBtnRec: document.querySelector('[data-modal-close-received]'),
    closeOpenModalBtnRec: document.querySelector('[data-modal-close-open-received]'),
    modalRec: document.querySelector('[data-modal-received]'),
  };

  refs.openModalBtnRec.addEventListener('click', toggleModalRec);
  refs.closeModalBtnRec.addEventListener('click', toggleModalRec);
  refs.closeOpenModalBtnRec.addEventListener('click', toggleModalRec);

  function toggleModalRec(event) {
    event.preventDefault();
        refs.modalRec.classList.toggle('is-hidden');
    
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();