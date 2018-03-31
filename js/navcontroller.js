
const navOpen = document.getElementById('openNav');
const navClose = document.getElementById('closeNav');
const navContainer = document.getElementById('mobileNav');

function toggleNav() {
  navOpen.onclick = function(){
    navContainer.classList.add('show-nav');
  };
  navClose.onclick = function(){
    navContainer.classList.remove('show-nav');
  };
  navContainer.onclick = function(){
    this.classList.remove('show-nav')
  };
}

toggleNav();
