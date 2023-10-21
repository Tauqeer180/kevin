document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("menuToggle2");

  const mobileMenu = document.getElementById("mobileMenu");

  openMenu.addEventListener("click", function () {
    if (
      mobileMenu.style.display === "none" ||
      mobileMenu.style.display === ""
    ) {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "none";
    }
  });
  closeMenu.addEventListener("click", function () {
    if (
      mobileMenu.style.display === "none" ||
      mobileMenu.style.display === ""
    ) {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "none";
    }
  });
});
