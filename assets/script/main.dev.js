"use strict";

// HEADER SCROLL
function headerScroll() {
  var header = document.querySelector('header');
  window.addEventListener('scroll', function (event) {
    if (window.scrollY > 30) {
      header.classList.add('header_scroll');
    } else {
      header.classList.remove('header_scroll');
    }
  });
}

headerScroll();