var scrollPos = window.scrollY;
var header = document.getElementById("headerContainer");
var nav = document.getElementById("navContainer");

function addClassOnScroll() {
  header.classList.add("header-scrolled");
  nav.classList.add("nav-scrolled");
}

function removeClassOnScroll() {
  header.classList.remove("header-scrolled");
  nav.classList.remove("nav-scrolled");
}

window.addEventListener('scroll', function(){
  scrollPos = window.scrollY;

  if(scrollPos > 10){
      addClassOnScroll();
  }
  else {
      removeClassOnScroll();
  }
  console.log(scrollPos);
});
