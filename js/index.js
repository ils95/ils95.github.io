const nav = document.querySelector("nav");

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        //Toggle nav
        burger.classList.toggle("toggle");
        nav.classList.toggle("nav-active");
    });

    nav.addEventListener("click", () => {
      //Toggle nav
      nav.classList.toggle("nav-links");
      location.reload();
  });

}

navSlide();









