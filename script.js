(() => {
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

  const updatePageMetadata = (language) => {
    const nextLanguage = metadata[language] ? language : "vi";
    document.title = metadata[nextLanguage].title;
    description?.setAttribute("content", metadata[nextLanguage].description);
  };

  document.addEventListener("morninggreen:languagechange", (event) => {
    updatePageMetadata(event.detail.language);
  });

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  updatePageMetadata(window.MorningGreenCommon?.getLanguage() ?? "vi");
})();
