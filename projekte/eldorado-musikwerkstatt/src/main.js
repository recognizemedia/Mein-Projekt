import "@fontsource-variable/eb-garamond";
import "@fontsource-variable/source-sans-3";
import "./style.css";

const kopf = document.querySelector(".kopf");
const menueKnopf = document.querySelector(".menue-knopf");
const navi = document.getElementById("navi");

// Kopfzeile wird beim Scrollen kompakter, die Anrufleiste erscheint
const aufScroll = () => {
  kopf.classList.toggle("kopf--kompakt", window.scrollY > 40);
  document.body.classList.toggle("anruf-sichtbar", window.scrollY > 560);
};
aufScroll();
window.addEventListener("scroll", aufScroll, { passive: true });

// Mobiles Menü
const menueSetzen = offen => {
  document.body.classList.toggle("menue-offen", offen);
  menueKnopf.setAttribute("aria-expanded", String(offen));
  menueKnopf.setAttribute("aria-label", offen ? "Menü schließen" : "Menü öffnen");
};
menueKnopf.addEventListener("click", () =>
  menueSetzen(!document.body.classList.contains("menue-offen"))
);
navi.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => menueSetzen(false))
);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") menueSetzen(false);
});

// Inhalte beim Scrollen sanft einblenden
const elemente = document.querySelectorAll(".einblenden");
if ("IntersectionObserver" in window) {
  const beobachter = new IntersectionObserver(
    eintraege => {
      eintraege.forEach(eintrag => {
        if (!eintrag.isIntersecting) return;
        eintrag.target.classList.add("sichtbar");
        beobachter.unobserve(eintrag.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  elemente.forEach(el => beobachter.observe(el));
} else {
  elemente.forEach(el => el.classList.add("sichtbar"));
}

document.querySelectorAll("[data-jahr]").forEach(el => {
  el.textContent = String(new Date().getFullYear());
});
