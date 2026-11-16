const mobileMenu = document.querySelector('.mobile-menu');
document.querySelector('.header-menu-button').addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
});

mobileMenu.addEventListener(('click'), (event) => {  
    if (mobileMenu.classList.contains('is-open')) {
        if (event.target.closest('a') || event.target.closest('.mobile-close-button')) {
            mobileMenu.classList.remove('is-open');
        } 
        else {
            return;
        }
    }
})

