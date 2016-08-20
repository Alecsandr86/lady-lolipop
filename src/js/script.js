$(document).ready( function(){
    // $("head").append("<link rel='stylesheet' type='text/css' href='css/style.css' />");

    $(".js-btn-cabinet").on('click', function(){
        $(this).find(".js-list-up").slideToggle();
    });

    $(".js-menu").bind('click', function () {
        $(this).toggleClass('top-menu-mob-hover').toggleClass("top-menu-mob").next(".js-menu__up").slideToggle();
    });

    $(".menu_mobail").bind('click', function () {
        $(this).toggleClass('menu_mobail').toggleClass('menu_mobail-active').next('.menu').slideToggle();
    });
    $('.your-cart').bind('click', function () {
        $(this).next(".your-cart-down").slideToggle();
    });
    $('.btn-checkout').bind('click', function () {
        $(this).parent('.your-cart-down ').slideUp();
    });

    $(".aside-nav__link").bind('click', function () {
        $(".aside-nav__link").removeClass('active').next('.aside-nav-two');
        $(this).addClass('active').next('.aside-nav-two').slideToggle();
    });

    $(".aside-nav-two__link").bind('click', function () {
        $(".aside-nav-two__link").removeClass('active');
        $(this).addClass('active');
    });

    $("input,select").styler();

    $("#slider").slider({
        range: true,
        min: 500, // минимальное значение цены
        max: 120000, // максимальное значение цены
        step: 1500, // шаг слайдера
        values: [ 1500, 100000],  // начальные значения - позиции ползунков на шкале

        slide: function( event, ui ) {
            $( "input[name=price_s]" ).val(  ui.values[ 0 ] ); // выводим  значение от
            $( "input[name=price_f]" ).val(  ui.values[ 1 ] ); // выводим  значение до
        },
        stop: function(event, ui) { show(); } // выполняем действие  после остановки ползунка, в нашем случае функция show
    });
    $('input[name=price_s]').change(function() {
        var val = $(this).val();
        $('#slider').slider("values",0,val);
    });
    $('input[name=price_f]').change(function() {
        var val1 = $(this).val();
        $('#slider').slider("values",1,val1);
    });
    $(".js-sotr-btn").bind("click", function () {
        $(this).toggleClass("active");
    });

    $(".sort-btn__link").bind("click", function () {
        $(".sort-btn__link").removeClass("active");
        $(this).addClass("active");
    });







});
