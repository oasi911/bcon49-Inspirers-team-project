(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const r={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};r.openModalBtn.addEventListener("click",o),r.closeModalBtn.addEventListener("click",o);function o(){r.modal.classList.toggle("is-hidden")}})();new Swiper(".swiper",{effect:"coverflow",loop:!0,slidesPerView:3,spaceBetween:8,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},coverflowEffect:{rotate:0,stretch:0,depth:50,modifier:1,scale:.9,slideShadows:!1}});
