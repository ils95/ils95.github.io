window.addEventListener("scroll", function(){
    var stickyNav = document.querySelector("nav");
    stickyNav.classList.toggle("sticky", window.scrollY > 0);
});


const navSlide = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navIcons = document.querySelector('.icon-nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burgerMenu.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            console.log(index / 7);
        });

        //Burger animation
        burgerMenu.classList.toggle('toggle');

    });

}

navSlide();


