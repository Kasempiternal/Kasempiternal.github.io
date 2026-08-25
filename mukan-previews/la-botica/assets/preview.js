(function () {
  var btn = document.getElementById("menu-btn");
  var menu = document.getElementById("menu-movil");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden", open);
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      btn.textContent = open ? "Menú" : "Cerrar";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Menú";
      });
    });
  }
  var form = document.getElementById("nota-form");
  var ok = document.getElementById("nota-ok");
  var reset = document.getElementById("nota-reset");
  if (form && ok) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.classList.add("hidden");
      ok.classList.remove("hidden");
    });
  }
  if (reset && form && ok) {
    reset.addEventListener("click", function () {
      form.reset();
      ok.classList.add("hidden");
      form.classList.remove("hidden");
    });
  }
})();
