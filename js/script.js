const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
  if(window.scrollY > 40) {
    navbar.classList.replace('bg-transparent', 'nav-color');
    navbar.classList.replace('py-4', 'py-1');
  }else if(window.scrollY <= 0) {
    navbar.classList.replace('nav-color', 'bg-transparent');
    navbar.classList.replace('py-1', 'py-4');
  }
})