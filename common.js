(() => {
  const supportedLanguages = ["vi", "en", "zh"];
  const storageKey = "morning-green-language";

  const getStoredLanguage = () => {
    try {
      const storedLanguage = localStorage.getItem(storageKey);
      return supportedLanguages.includes(storedLanguage) ? storedLanguage : "vi";
    } catch {
      return "vi";
    }
  };

  const storeLanguage = (language) => {
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // The language still changes when storage is unavailable.
    }
  };

  const applyLanguage = (language) => {
    const nextLanguage = supportedLanguages.includes(language) ? language : "vi";
    const languageTag = nextLanguage === "zh" ? "zh-Hans" : nextLanguage;
    const dataSuffix = { vi: "Vi", en: "En", zh: "Zh" }[nextLanguage];

    document.documentElement.lang = languageTag;
    document.querySelectorAll("[data-language]").forEach((button) => {
      const isActive = button.dataset.language === nextLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll("[data-aria-vi]").forEach((element) => {
      const label = element.dataset[`aria${dataSuffix}`];
      if (label) element.setAttribute("aria-label", label);
    });

    storeLanguage(nextLanguage);
    document.dispatchEvent(
      new CustomEvent("morninggreen:languagechange", { detail: { language: nextLanguage } }),
    );
    return nextLanguage;
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  const navigationToggle = document.querySelector(".nav-toggle");
  const navigation = navigationToggle
    ? document.getElementById(navigationToggle.getAttribute("aria-controls"))
    : null;

  navigationToggle?.addEventListener("click", () => {
    const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";
    navigationToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation?.classList.toggle("is-open", !isOpen);
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigationToggle?.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });

  window.MorningGreenCommon = {
    applyLanguage,
    getLanguage: () =>
      supportedLanguages.includes(document.documentElement.lang.split("-")[0])
        ? document.documentElement.lang.split("-")[0]
        : "vi",
  };

  applyLanguage(getStoredLanguage());
})();
