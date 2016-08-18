window.log = function(param){
    console.log(param);
};

$(document).ready(function(){

    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };


    $(".js-btn-cabinet").on('click', function(){
        $(this).find(".js-list-up").slideToggle();
    });

    $(".js-menu").bind('click', function () {
        $(this).toggleClass('top-menu-mob-hover').toggleClass("top-menu-mob").next(".js-menu__up").slideToggle();
    });

    $(".menu_mobail").bind('click', function () {
        $(this).toggleClass('menu_mobail').toggleClass('menu_mobail-active').next('.menu').slideToggle();
    })



});
