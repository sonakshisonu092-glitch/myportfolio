const themeToggle = document.getElementById("themeToggle");

// Dark / Light mode
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem(
    "portfolioTheme",
    isDark ? "dark" : "light"
  );
});

// Project filter buttons
const filterButtons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    projects.forEach((project) => {
      if (
        filter === "all" ||
        project.dataset.category === filter
      ) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// Contact form demo
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent =
    "Thank you! Your message has been entered successfully.";

  contactForm.reset();
});
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const extraText = button.nextElementSibling;
    const isHidden = extraText.hidden;

    extraText.hidden = !isHidden;
    button.textContent = isHidden ? "Read Less" : "Read More";
  });
});