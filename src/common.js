// ASIDE
(function () {
  const aside = document.querySelector(".aside");
  const asideOpenButtons = document.querySelectorAll('[data-aside="open"]');
  const asideCloseButtons = document.querySelectorAll('[data-aside="close"]');

  asideOpenButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      openAside();
    });
  });

  asideCloseButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      closeAside();
    });
  });

  const openAside = () => {
    aside.classList.add("aside--open");
  };

  const closeAside = () => {
    aside.classList.remove("aside--open");
  };

  aside.addEventListener("click", (evt) => {
    const target = evt.target;

    if (target === aside) {
      closeAside();
    }
  });
})();
