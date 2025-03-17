// Toggle theme dropdown
function toggleThemeDropdown() {
  const dropdown = document.getElementById("themeDropdown");
  dropdown.classList.toggle("show");

  // Close dropdown when clicking outside
  if (dropdown.classList.contains("show")) {
    document.addEventListener("click", closeDropdownOnClickOutside);
  }
}

// Close dropdown when clicking outside
function closeDropdownOnClickOutside(event) {
  const dropdown = document.getElementById("themeDropdown");
  const themeIcon = document.querySelector(".theme-icon");

  if (!dropdown.contains(event.target) && event.target !== themeIcon) {
    dropdown.classList.remove("show");
    document.removeEventListener("click", closeDropdownOnClickOutside);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Mark the saved theme as active
    document.querySelectorAll(".theme-option").forEach((option) => {
      option.classList.remove("active");
    });
    document
      .querySelector(`.theme-option[onclick="setTheme('${savedTheme}')"]`)
      .classList.add("active");
  }
});

// Set theme
function setTheme(theme) {
  // Update active class
  document.querySelectorAll(".theme-option").forEach((option) => {
    option.classList.remove("active");
  });

  // Mark selected theme as active
  document
    .querySelector(`.theme-option[onclick="setTheme('${theme}')"]`)
    .classList.add("active");

  // Apply theme

  document.documentElement.setAttribute("data-theme", theme);

  // Close dropdown
  document.getElementById("themeDropdown").classList.remove("show");

  // Save theme
  localStorage.setItem("theme", theme);
}
