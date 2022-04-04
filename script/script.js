document.addEventListener("DOMContentLoaded", () => {
    $('.slider__inner').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 300,
        adaptiveHeight: true
    });

    document.addEventListener('click', (event) => {
        
        const modal = document.querySelector('.modal');
        const modalEmail = document.querySelector('.modal__email');
        const target = event.target;

        if (target.matches('.btn')) {
            modal.classList.toggle('modal__active');
        } else if (target.matches('.modal__overflow') ||
            target.closest('.modal__btn-close') ||
            target.matches('modal-btn')) {
            modal.classList.toggle('modal__active');
        } else if (target.matches('.header__email')) {
            modalEmail.classList.toggle('modal__active');
        } else if (target.matches('.modal__overflow-email') ||
            target.closest('.modal__btn-close--email') ||
            target.matches('.modal__email-btn')) {
            modalEmail.classList.toggle('modal__active');
        }   
    });
   
});

