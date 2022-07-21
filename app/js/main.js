$(function () {
    $('.home__btn').on('click', function () {
        $('.modal').addClass('modal__active'),
        $("body").css({"overflow":"hidden"});
    });
    $('.modal__close').on('click', function () {
        $('.modal').removeClass('modal__active'),
        $("body").css({"overflow":"auto"});    
    });
});

$(window).on("scroll", function() {
    if ($(this).scrollTop() > 600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href*='#']").on("click", function(e){
    const anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
});
$('.menu__hamburger').on('click', function () {
    $('.menu__hamburger').toggleClass('menu__hamburger--active');
    $('.menu__list').toggleClass('menu__list--active');    
});
/* document.addEventListener("DOMContentLoaded", function(){
    const scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[data-modal="more"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#more').style.marginLeft = scrollbar;
    });
    document.querySelector('#close').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#more').style.marginLeft = '0px';
    });
  }); */