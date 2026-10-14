
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("nav-open");

    const isOpen = navigation.classList.contains("nav-open");

    menuButton.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);

    const menuIcon = menuButton.querySelector(".material-symbols-outlined");
    menuIcon.textContent = isOpen ? "close" : "menu";
});
