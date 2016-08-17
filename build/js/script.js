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

    console.log('jQuery работает');


    $(".js-btn-cabinet").on('click', function(){
        $(this).find(".js-list-up").slideToggle();
    })

});
