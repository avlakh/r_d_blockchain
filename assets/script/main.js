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