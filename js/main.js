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

let navLink = document.querySelectorAll('.nav-link');

function activeLink() {
    navMenu.style.bottom = "-999%";
}

navLink.forEach(function(ele) {
    ele.addEventListener('click', activeLink)
})


/* ----------------- scroll ------------------- */
let sections = document.querySelectorAll('section');

function activeLinkForWide() {
    let scrollY = window.scrollY;
    
    sections.forEach((currentSection) => {
        let sectionHeight = currentSection.offsetHeight;
        let sectionTop = currentSection.offsetTop - 50;
        let sectionId = currentSection.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + '] ').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + '] ').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', activeLinkForWide);

/* ----------------- scroll up ------------------- */
let scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 550) {
        scrollUp.style.bottom = '6rem';
    } else {
        scrollUp.style.bottom = '-100%';
    }
})
