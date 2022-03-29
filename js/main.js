/* ----------------- navbar toggle ------------------- */
let navMenu = document.querySelector('.nav-menu');
let showMenuIcon = document.querySelector('.show-menu-icon')
let closeMenuIcon = document.querySelector('.close-menu-icon')

showMenuIcon.addEventListener('click', () => {
    if (navMenu) {
        navMenu.style.bottom = 0;
    }
})

closeMenuIcon.addEventListener('click', () => {
    navMenu.style.bottom = "-999%";
})

