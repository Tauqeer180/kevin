document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("menuToggle2");
  //   const menu = document.getElementById("menu");

  const mobileMenu = document.getElementById("mobileMenu");

  openMenu.addEventListener("click", function () {
    mobileMenu.style.display = "block";
  });
  closeMenu.addEventListener("click", function () {
    mobileMenu.style.display = "none";
  });
  //   menu.addEventListener("click", function () {
  //     if (
  //       mobileMenu.style.display === "none" ||
  //       mobileMenu.style.display === ""
  //     ) {
  //       mobileMenu.style.display = "block";
  //     } else {
  //       mobileMenu.style.display = "none";
  //     }
  //   });
});
