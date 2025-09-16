document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    // Abre/cierra el menú
    navMenu.classList.toggle("open");
    // Anima la hamburguesa (la convierte en X)
    hamburger.classList.toggle("active");
  });

  // Cierra el menú al hacer clic en un link
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
});
