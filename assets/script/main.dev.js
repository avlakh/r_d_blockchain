"use strict";

// HEADER SCROLL
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');

  if (window.scrollY > 30) {
    header.classList.add('header_scroll');
  } else {
    header.classList.remove('header_scroll');
  }
}); // ACCORDION

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
} // THREE JS - ANIMATION
// HOME SECTION ANIMATION
// creating scene


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 17;
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
}); // creating element

var elem = document.querySelector('.home_anim');
var sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};
window.addEventListener('resize', function () {
  sizes.width = window.innerWidth / 2;
  sizes.height = window.innerHeight / 2;
  renderer.setSize(sizes.width, sizes.height);
});
elem.appendChild(renderer.domElement); // creating colors

var colorYellow = new THREE.Color('hsl(40, 100%, 60%)');
var colorGreen = new THREE.Color('hsl(120, 100%, 50%)');
var colorLight = new THREE.Color('hsl(40, 100%, 95%)');
var colorBlue = new THREE.Color('hsl(189, 96%, 71%)'); // creating model of cube

var cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: colorBlue,
  shininess: 30
});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // creating model of capsule

var capsuleGeometry = new THREE.CapsuleGeometry(1, 4, 20, 40);
var capsuleMaterial = new THREE.MeshPhongMaterial({
  color: colorYellow,
  shininess: 30
});
var capsule = new THREE.Mesh(capsuleGeometry, capsuleMaterial); // creating model of cone

var coneGeometry = new THREE.ConeGeometry(1, 3, 8);
var coneMaterial = new THREE.MeshPhongMaterial({
  color: colorGreen,
  shininess: 30
});
var cone = new THREE.Mesh(coneGeometry, coneMaterial); // positioning cube

cube.rotation.x = 20;
cube.rotation.z = -20;
cube.position.x = -5; // positioning capsule 

capsule.rotation.x = 20;
capsule.rotation.z = -20; // positioning cone

cone.rotation.x = 20;
cone.rotation.z = -20;
cone.position.x = 5; // creating lights

var light = new THREE.PointLight(colorLight, 2);
var light2 = new THREE.PointLight(colorLight, .5);
light.position.set(-40, -20, 20);
light2.position.set(40, 20, 10); // constructing a scene

scene.add(light);
scene.add(light2);
scene.add(cube);
scene.add(capsule);
scene.add(cone); // animating a scene

var animate = function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.02;
  cube.rotation.z += 0.02;
  capsule.rotation.x += 0.02;
  capsule.rotation.z += 0.02;
  cone.rotation.x += 0.02;
  cone.rotation.z += 0.02;
  renderer.render(scene, camera);
};

animate(); // FINE ANIMATION TO THE ANCHOR 

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); // MOBILE MENU HANDLER

function toggleMenu() {
  document.querySelector('.hamburger').classList.toggle('is-active');
  document.querySelector('#side_block').classList.toggle('open');
  document.querySelector('#page_overlay').classList.toggle('open');
  document.querySelector('body').classList.toggle('lock');
}

document.querySelectorAll('.hamburger').forEach(function (item) {
  item.addEventListener('click', function () {
    toggleMenu();
  });
});
document.querySelector('#page_overlay').addEventListener('click', function () {
  toggleMenu();
});