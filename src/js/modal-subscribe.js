(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-subscribe-open]"),
    closeModalBtn: document.querySelector("[data-modal-subscribe-close]"),
    modal: document.querySelector("[data-modal-subscribe]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();