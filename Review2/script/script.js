window.onscroll = function() {
    let navbar = document.querySelector('.nav');
    

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#1a1a1a";
        navbar.style.borderBottom = "1px solid #444";
        navbar.style.transition = "0.2s";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.borderBottom = "1px solid #888";
    }
};