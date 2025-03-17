const events = [
  {
    id: 1,
    title: "Semana do Software 2025",
    date: "12/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "tech",
    description:
      "Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 2,
    title: "Workshop de IoT",
    date: "12/01",
    time: "08:00",
    location: "Laboratório CS&I",
    type: "tech",
    description:
      "Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 3,
    title: "Festa dos Alunos 2025",
    date: "18/05",
    time: "19:00",
    location: "Área Esportiva do Inatel",
    type: "cultural",
    description:
      "Venha comemorar a melhor Festa dos Alunos de todos os tempos!",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 4,
    title: "Feira de Oportunidades",
    date: "04/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "academic",
    description:
      "Venha conhecer empresas e projetos com destaque na área da engenharia.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400",
  },
];

const carouselContainer = document.getElementById("carousel");

events.forEach((event) => {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("card");

  carouselItem.innerHTML = `
    <img src="${event.image}" alt="${event.title}">
    <div class="info">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <p>
            ${event.date} às ${event.time} - ${event.location}
        </p>
    </div>
  `;

  carouselContainer.appendChild(carouselItem);
});

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
