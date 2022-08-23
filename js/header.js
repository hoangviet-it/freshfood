const backgroundBlack = document.querySelector('.container');
const search = document.querySelector(".header-search");
const iconSearch = document.querySelector(".icon-search");
const iconClose = document.querySelector(".icon-close");

const menu = document.querySelector(".element-menu-rps");
const btnMenu = document.querySelector(".btn-menu-mobile .fa-bars");
const btnCloseMenu = document.querySelector(".btn-menu-mobile .fa-times");

// handle for animate scroll header
window.addEventListener("scroll", scrollHeader);
const header = document.querySelector('header');
function scrollHeader() { 
    header.classList.toggle('show1', window.scrollY > 80);  
    setTimeout(() => {
        header.classList.toggle('show', window.scrollY > 80);
    }, 800);    
}
// handle show element search
const showSearch = ()=> {
    search.style = "display: block";
    search.style.animation = "showSearch 0.2s linear";
    setTimeout(() => {
        iconSearch.style = "display: none";
        iconClose.style = "display: block";
    }, 200);
    backgroundBlack.classList.add('background-search');
}
// handle hidden element search
const hiddenSearch = ()=> {
    search.style.animation = "hiddenSearch 0.2s linear";
    setTimeout(() => {
        search.style = "display: none";
        iconClose.style = "display: none";
        iconSearch.style = "display: block";
        backgroundBlack.classList.remove('background-search');
    }, 199);
}
// handle show menu responsive
const showMenu = ()=> {
    menu.style.display = "block";
    menu.style.animation = "showSearch .2s ease-in-out";
    btnMenu.style.display = "none";
    setTimeout(() => {
        btnCloseMenu.style.display = "block";
    }, 200);
    backgroundBlack.classList.add('background');
}
// handle hidden menu responsive
const closeMenu = ()=> {
    menu.style.animation = "hiddenSearch .2s ease-in-out";
    setTimeout(() => {
        menu.style.display = "none";
        btnMenu.style.display = "block";
        btnCloseMenu.style.display = "none";
        backgroundBlack.classList.remove('background');
    }, 199);
}