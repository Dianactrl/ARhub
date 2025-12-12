
AOS.init();

const modal = document.getElementById('modal-form');
const modalOpenBtns = document.querySelectorAll('.cta-button, .callback-button, .service-button');
const closeBtn = document.querySelector('.close-button');


function openModal() {
    modal.style.display = 'flex';
    document.body.classList.add('no-scroll'); 
}


function closeModal() {
    modal.style.display = 'none';
    
    if (!nav.classList.contains('open')) {
        document.body.classList.remove('no-scroll');
    }
}


modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        openModal();
    });
});


closeBtn.addEventListener('click', closeModal);


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});





const burgerButton = document.querySelector('.burger-menu'); 
const nav = document.querySelector('.main-nav');
const closeMenuButton = document.querySelector('.close-menu-btn'); 


const openMobileMenu = () => {
    nav.classList.add('open');
    document.body.classList.add('no-scroll'); 
    
    
    if (burgerButton) {
        burgerButton.style.display = 'none'; 
    }
};


const closeMobileMenu = () => {
    nav.classList.remove('open');
    
    
    if (burgerButton) {
        
        burgerButton.style.display = 'flex'; 
    }

    
    if (modal.style.display !== 'flex') {
        document.body.classList.remove('no-scroll');
    }
};

if (burgerButton && nav) {
    
    burgerButton.addEventListener('click', openMobileMenu); 

    
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }

    
    nav.querySelectorAll('ul a[href^="#"]').forEach(link => { 
        link.addEventListener('click', closeMobileMenu);
    });
}





document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        
        if (modal.style.display === 'flex') {
            closeModal();
        } 
        
        else if (nav.classList.contains('open')) {
            closeMobileMenu();
        }
    }
});