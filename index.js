const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints:{
        768:{
            slidesPerView:2,
            
        },
        1024:{
            slidesPerView:3,
            
        },
    }
    
});


var swiper_2 = new Swiper('.swiper-initialize', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        768:{
            slidesPerView:2,
            
        },
        1024:{
            slidesPerView:3,
            
        },
    }
});




$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    })
});

