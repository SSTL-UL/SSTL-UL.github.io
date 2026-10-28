(function () {
  "use strict";

  function initializeLanguages() {
    if (document.getElementById("sstl-language-switcher")) return;

    // Prépare automatiquement la traduction du lien Home.
    document.querySelectorAll("#navbar a[href]").forEach(function (link) {
      const href = link.getAttribute("href");

      if (href !== "index.html" && href !== "../index.html") return;
      if (link.querySelector("[data-label-en]")) return;

      const label = document.createElement("span");
      label.className = "notranslate";
      label.setAttribute("translate", "no");
      label.setAttribute("data-label-en", "Home");
      label.setAttribute("data-label-fr", "Accueil");
      label.textContent = "Home";

      link.replaceChildren(label);
    });

    // Sélecteur visible EN | FR.
    const switcher = document.createElement("div");
    switcher.id = "sstl-language-switcher";
    switcher.className = "notranslate";
    switcher.setAttribute("translate", "no");
    switcher.setAttribute("role", "group");
    switcher.setAttribute("aria-label", "Language / Langue");

    switcher.innerHTML = `
      <button type="button" data-language="en"
              lang="en" aria-label="English"
              aria-pressed="true" disabled>EN</button>
      <span aria-hidden="true">|</span>
      <button type="button" data-language="fr"
              lang="fr" aria-label="Français"
              aria-pressed="false" disabled>FR</button>
    `;

    document.body.appendChild(switcher);

    // Le widget technique reste masqué.
    const container = document.createElement("div");
    container.className = "gtranslate_wrapper";
    container.hidden = true;
    document.body.appendChild(container);

    function updateLabels(language) {
      document.querySelectorAll("[data-label-en]").forEach(function (element) {
        const text =
          element.getAttribute("data-label-" + language) ||
          element.getAttribute("data-label-en");

        if (element.textContent !== text) {
          element.textContent = text;
        }
      });

      switcher.querySelectorAll("button").forEach(function (button) {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.language === language)
        );
      });
    }

    let selector = null;

    function connectSelector() {
      const found = container.querySelector(".gt_selector");
      if (!found || found === selector) return;

      selector = found;

      function syncLanguage() {
        const language = selector.value.split("|").pop();
        updateLabels(language === "fr" ? "fr" : "en");
      }

      selector.addEventListener("change", syncLanguage);
      syncLanguage();

      switcher.querySelectorAll("button").forEach(function (button) {
        button.disabled = false;
      });
    }

    switcher.addEventListener("click", function (event) {
      const button = event.target.closest("button[data-language]");
      if (!button || !selector) return;

      selector.value = "en|" + button.dataset.language;

      // Déclenche le changement via le widget GTranslate.
      selector.dispatchEvent(new Event("change", { bubbles: true }));
    });

    const observer = new MutationObserver(connectSelector);
    observer.observe(container, { childList: true, subtree: true });

    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "fr"],
      native_language_names: true,
      wrapper_selector: ".gtranslate_wrapper"
    };

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.async = true;
    script.addEventListener("load", connectSelector);

    script.addEventListener("error", function () {
      switcher.title =
        "Translation unavailable / Traduction indisponible";
    });

    document.body.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLanguages);
  } else {
    initializeLanguages();
  }
})();
