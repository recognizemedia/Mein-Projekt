import "@fontsource-variable/eb-garamond";
import "@fontsource-variable/source-sans-3";
import "./style.css";

const kopf = document.querySelector(".kopf");
const aufScroll = () => kopf.classList.toggle("kopf--kompakt", window.scrollY > 40);
aufScroll();
window.addEventListener("scroll", aufScroll, { passive: true });

document.querySelectorAll("[data-jahr]").forEach(el => {
  el.textContent = String(new Date().getFullYear());
});
