// Mobile navigation toggle.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  function isMobile() {
    return window.matchMedia("(max-width: 760px)").matches;
  }

  function setOpen(open) {
    links.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  }

  // Start collapsed on mobile, always visible on desktop.
  function sync() {
    if (isMobile()) {
      setOpen(false);
    } else {
      links.hidden = false;
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  toggle.addEventListener("click", function () {
    setOpen(links.hidden);
  });

  links.addEventListener("click", function (e) {
    if (isMobile() && e.target.tagName === "A") setOpen(false);
  });

  window.addEventListener("resize", sync);
  sync();
})();
