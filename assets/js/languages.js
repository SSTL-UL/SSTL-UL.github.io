(function () {
  "use strict";

  function initializeLanguages() {
    // Évite d'ajouter deux fois le sélecteur.
    if (document.querySelector(".gtranslate_wrapper")) return;

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
