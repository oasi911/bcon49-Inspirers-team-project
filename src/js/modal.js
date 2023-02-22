(() => {
const refs = {
openModalBtnHR: document.querySelector('[data-modal-open-hero]'),
openModalBtn: document.querySelector("[data-modal-open-store]"),
closeModalBtn: document.querySelector("[data-modal-close]"),
closeOpenModalBtn: document.querySelector('[data-modal-close-open]'),
modal: document.querySelector("[data-modal]"),
};
refs.openModalBtnHR.addEventListener('click', toggleModal);
refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.closeOpenModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    
  const scrollLockMethod = !isMenuOpen
 ? 'disableBodyScroll'
 : 'enableBodyScroll';
 bodyScrollLock[scrollLockMethod](document.body);
 }
})();