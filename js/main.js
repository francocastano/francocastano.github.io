//  Seleccionando DOM items (menus)
const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const menuBtn = document.querySelectorAll('.burger-menu-icon__line');
const menu = document.querySelector('.navigation')
const menuNav = document.querySelector('.pages-selector')
const menuBranding = document.querySelector('.navigation__branding')
// Seleccionando DOM items (items) 
const navItems = document.querySelectorAll('.pages-selector__page')

// 
let showMenu = false;

burgerMenuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.forEach(item => item.classList.add('burger-menu-icon__line--close'));
        menu.classList.add('navigation--show');
        menuNav.classList.add('pages-selector--show');
        menuBranding.classList.add('navigation__branding--show');
        navItems.forEach(item => item.classList.add('pages-selector__page--show'));

        // set menu state
        showMenu = true;
    } else {
        menuBtn.forEach(item => item.classList.remove('burger-menu-icon__line--close'));
        menu.classList.remove('navigation--show');
        menuNav.classList.remove('pages-selector--show');
        menuBranding.classList.remove('navigation__branding--show');
        navItems.forEach(item => item.classList.remove('pages-selector__page--show'));
        
        showMenu = false;
    }
}