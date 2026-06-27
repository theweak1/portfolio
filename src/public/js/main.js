const yearElement = document.querySelector("[data-current-year]");
if (yearElement) {
	yearElement.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
	navToggle.addEventListener("click", () => {
		const isOpen = navLinks.classList.toggle("open");
		navToggle.setAttribute("aria-expanded", String(isOpen));
	});
}
