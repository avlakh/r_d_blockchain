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

headerScroll(); // ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}