const swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
    },
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: false,
});


var swiper_2 = new Swiper('.swiper-initialize', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});