(function () {
  "use strict";

  function initializeLanguages() {
    // Évite d'ajouter deux fois le sélecteur.
    if (document.querySelector(".gtranslate_wrapper")) return;
    // Traduction contrôlée du lien d'accueil dans toutes les pages.
document
  .querySelectorAll('#navbar a[href]')
  .forEach(function (link) {
    const href = link.getAttribute("href");

    // Liens utilisés à la racine et dans les sous-dossiers.
    if (href !== "index.html" && href !== "../index.html") {
      return;
    }

    // Évite de recréer un élément déjà configuré.
    if (link.querySelector("[data-label-en]")) return;

    const label = document.createElement("span");

    label.className = "notranslate";
    label.setAttribute("translate", "no");

    label.setAttribute("data-label-en", "Home");
    label.setAttribute("data-label-fr", "Accueil");
    label.setAttribute("data-label-es", "Inicio");
    label.setAttribute("data-label-ar", "الرئيسية");
    label.setAttribute("data-label-zh-cn", "首页");

    label.textContent = "Home";

    // Conserve le lien et ses classes, notamment "active".
    link.replaceChildren(label);
  });

    const menu = document.querySelector("#navbar > ul");
    if (!menu) return;

    // Ajoute le sélecteur après les liens du menu.
    const item = document.createElement("li");
    item.className = "sstl-language-item";

    const container = document.createElement("div");
    container.className = "gtranslate_wrapper";

    item.appendChild(container);
    menu.appendChild(item);

    // Configuration du service.
    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "fr"],
      native_language_names: true,
      wrapper_selector: ".gtranslate_wrapper"
    };

    // Charge le sélecteur et le service de traduction.
    const script = document.createElement("script");
    script.src =
      "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.async = true;

    script.onerror = function () {
      container.textContent = "Translation unavailable";
    };
    // Affiche nos traductions pour les textes protégés.
function updateCustomLabels(language) {
  const attribute = "data-label-" + language.toLowerCase();

  document.querySelectorAll("[data-label-en]").forEach(function (element) {
    const text =
      element.getAttribute(attribute) ||
      element.getAttribute("data-label-en");

    if (element.textContent !== text) {
      element.textContent = text;
    }
  });
}

// Lit la langue sélectionnée dans GTranslate.
// Les valeurs sont de la forme "en|fr".
function getSelectedLanguage() {
  const selector = document.querySelector(
    ".gtranslate_wrapper .gt_selector"
  );

  if (!selector || !selector.value) return "en";

  return selector.value.split("|").pop();
}

// Met à jour les textes à chaque changement de langue.
document.addEventListener("change", function (event) {
  if (
    event.target instanceof HTMLSelectElement &&
    event.target.matches(".gtranslate_wrapper .gt_selector")
  ) {
    updateCustomLabels(getSelectedLanguage());
  }
});

// Applique aussi les traductions lorsque le sélecteur est chargé,
// notamment si une langue est déjà sélectionnée à l'arrivée.
script.addEventListener("load", function () {
  updateCustomLabels(getSelectedLanguage());
});
    document.body.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeLanguages
    );
  } else {
    initializeLanguages();
  }
})();
