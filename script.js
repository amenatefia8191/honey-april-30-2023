'use strick';

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
};

const sr = scrollReveal ({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});

sr.reveal ('.home-text', {delay:300});
sr.reveal ('.home-img', {delay:400});
sr.reveal ('.container', {delay:300});

sr.reveal ('.about-img', {});
sr.reveal ('.about-img', {delay:300});

sr.reveal ('.middle-img', {});
sr.reveal ('.row-btn,.shop-content', {delay:300});

sr.reveal ('.review-content,.contact', {delay:300});