theme.footerSection = (function () {
  function footer() {
    // Mobile navigation bar
    const mobileNavigateBar = document.querySelector(
      ".mobile__navigation--bar"
    );
    if (mobileNavigateBar) {
      document.documentElement.style.setProperty(
        "--mobile-navigation-bar-height",
        `${mobileNavigateBar.clientHeight}px`
      );

      window.addEventListener("resize", function () {
        document.documentElement.style.setProperty(
          "--mobile-navigation-bar-height",
          `${mobileNavigateBar.clientHeight}px`
        );
      });
    }
    // Footer widget column collapsible
    let accordion = true;
    const footerWidgetAccordion = function () {
      accordion = false;
      document
        .querySelectorAll(".footer__widget_toggle")
        .forEach(function (item) {
          item.addEventListener("click", function () {
            const footerWidget = this.closest(".footer__widget"),
              footerWidgetInner = footerWidget.querySelector(
                ".footer__widget_inner"
              );
            if (footerWidget.classList.contains("active")) {
              footerWidget.classList.remove("active");
              slideUp(footerWidgetInner);
            } else {
              footerWidget.classList.add("active");
              slideDown(footerWidgetInner);
              getSiblings(footerWidget.parentElement).forEach(function (item) {
                const footerWidget = item.querySelector(".footer__widget"),
                  footerWidgetInner = item.querySelector(
                    ".footer__widget_inner"
                  );
                footerWidget.classList.remove("active");
                slideUp(footerWidgetInner);
              });
            }
          });
        });
    };
    if (accordion) {
      footerWidgetAccordion();
    }
    window.addEventListener("resize", function () {
      document.querySelectorAll(".footer__widget").forEach(function (item) {
        if (window.outerWidth >= 750) {
          item.classList.remove("active");
          item.querySelector(".footer__widget_inner").style.display = "";
        }
      });
      if (accordion) {
        footerWidgetAccordion();
      }
    });
  }
  return footer;
})();
