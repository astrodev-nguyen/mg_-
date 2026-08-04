(() => {
  const languageButtons = Array.from(document.querySelectorAll("[data-language]"));
  const description = document.querySelector('meta[name="description"]');
  const year = document.querySelector("#year");

  const metadata = {
    vi: {
      title: "Morning Green — Menu nước & liên hệ",
      description:
        "Xem menu sinh tố, nước ép và liên hệ Morning Green qua các kênh chính thức.",
    },
    en: {
      title: "Morning Green — Drink menu & contact",
      description:
        "Browse Morning Green smoothies and juices, then contact us through our official channels.",
    },
    zh: {
      title: "Morning Green — 饮品菜单与联系方式",
      description:
        "浏览 Morning Green 果蔬昔与鲜榨果蔬汁菜单，并通过官方渠道联系我们。",
    },
  };

  const setLanguage = (language) => {
    const nextLanguage = ["vi", "en", "zh"].includes(language) ? language : "vi";
    const languageTag = nextLanguage === "zh" ? "zh-Hans" : nextLanguage;
    const dataSuffix = { vi: "Vi", en: "En", zh: "Zh" }[nextLanguage];

    document.documentElement.lang = languageTag;
    document.title = metadata[nextLanguage].title;
    description?.setAttribute("content", metadata[nextLanguage].description);

    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === nextLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll("[data-aria-vi]").forEach((element) => {
      const label = element.dataset[`aria${dataSuffix}`];

      if (label) {
        element.setAttribute("aria-label", label);
      }
    });
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  setLanguage("vi");
})();
