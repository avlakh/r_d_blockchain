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
renderer.setSize(1000, 300);
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

animate();