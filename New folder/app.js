const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
menu.addEventListener('click', function() {

    menu.classList.toggle('is-active');
    menuLinks.classlist.toggle('active');
});

window.addEventListener('scroll', function() {
    var overlay = document.querySelector('.overlay');
    var top_box = document.querySelector('.top_box');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 200) { 
      overlay.style.height = '100%';
      overlay.style.opacity = '0'; 
      top_box.style.opacity = '.6';
      top_box.style.height = '10%';
    } else {
      overlay.style.height = '0';
      overlay.style.opacity = '0';
      top_box.style.opacity = '0';
      top_box.style.height = '0';

    }
  });
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const cloudLayers = document.querySelectorAll('.cloud-overlay');
    
    cloudLayers.forEach(function(layer, index) {
        const speed = (index + 1) * 0.5; 
        const yPos = -scrollPosition * speed;
        layer.style.transform = `translateY(${yPos}px)`;
    });
});

  