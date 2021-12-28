// scroll header
const header = document.querySelector('header');
// scroll logo
const img = document.querySelector('.scroll2');
const myScdClickLogo = document.createElement('a');
myScdClickLogo.href = '#logo';
const myScdLogo = document.createElement('img');
myScdLogo.src='../images/logo.webp';
myScdClickLogo.appendChild(myScdLogo);
window.addEventListener("scroll", function() {
    scrollHeader();
    removeHeader();
});
function scrollHeader() {
    if (window.pageYOffset >= 90) {
        header.classList.add('scroll');
        img.appendChild(myScdLogo).classList.add('logo');
    } 
}
function removeHeader() {
    if (window.pageYOffset == 0) {
        header.classList.remove('scroll');
        img.removeChild(myScdLogo).classList.remove('logo');
    } 
}
// scroll nav
// const nav = document.querySelector('nav');
const navScroll = document.querySelector('.scroll3');
window.addEventListener("scroll", function() {
    
    scrollNav();
    removeNav();
});
function scrollNav() {
    if (window.pageYOffset >= 90) {
        for (let i = 0; i < navScroll.children.length; i++) {
            navScroll.children[i].classList.add('scroll3');
            
        }
    } 
}
function removeNav() {
    if (window.pageYOffset == 0) {
        for (let i = 0; i < navScroll.children.length; i++) {
            navScroll.children[i].classList.remove('scroll3');
            
        }
    } 
}
// scroll button 
let scrollToTop = document.querySelector(".ScrollToTop");
function scrollFunction() {
    if (window.pageYOffset >= 723) {
    scrollToTop.style.display = 'block';
    } else {
    scrollToTop.style.display = 'none';
    }
}
window.addEventListener("scroll", function() {
    scrollFunction();
    
});
scrollToTop.addEventListener('click', function() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
})
    
