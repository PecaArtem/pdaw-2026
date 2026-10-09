
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("nav-open");
});
