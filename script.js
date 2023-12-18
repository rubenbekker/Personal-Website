function toggleMenu() {
    //the two lines below, create the variables namely menu and icon. At the same time they link both html classes to the variable.
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}



