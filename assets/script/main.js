// HEADER SCROLL

function headerScroll(){
    let header = document.querySelector('header');
    window.addEventListener('scroll', event =>{
        if (window.scrollY > 30) {
            header.classList.add('header_scroll')
        } else {
            header.classList.remove('header_scroll')
        }
    })
    
}

headerScroll();

// ACCORDION

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}