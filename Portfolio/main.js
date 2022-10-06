let menuBtn = document.querySelector(".menu-btn");
let cxlBtn = document.querySelector(".cxl-btn");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
}
cxlBtn.onclick = function() {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
}

// Sticky Nav //
let nav = document.querySelector("nav");
let val;

window.onscroll = function() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        // Scroll to top function //
        scrollBtn.style.display = "block";
    }
    else {
        nav.classList.remove("sticky");
        // Scroll to top function //
        scrollBtn.style.display = "none";
    }
}

// Scroll at Section //
let navBarHeight = document.querySelector("nav").offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navBarHeight + "px");


// Scroll to top function //
let scrollBtn = document.querySelector(".scroll-top");

scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})
