
const themeToggle = document.getElementById("themeToggle");
const paraElement1=document.getElementById("paraElement")
const underlineEl=document.getElementById('underline')
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark-mode");

    root.classList.toggle("dark-mode", !isDark);
    root.classList.toggle("light-mode", isDark);

    themeToggle.textContent = isDark ? "🌙" : "☀️";
    paraElement1.style.color="white"
    underlineEl.style.color="white"
    
  });
 
}
 else{
    paraElement1.style.color="black"
    underlineEl.style.color="white"
  }


const navLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");

if (navCollapse && navLinks.length) {
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navCollapse).toggle();
      }
    });
  });
}



