const $ = require('jquery');

require('bootstrap');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();

    function scrollTo( target ) {
        if( target.length ) {
            $("html, body").stop().animate( { scrollTop: target.offset().top - 60 }, 1500);
        }
    }

    function scrollToTop() {
        $("html, body").animate({scrollTop : 0}, 1000);
    }

    $('#link-home').on('mouseover', function (event) {
        event.preventDefault();
        scrollToTop();
    });

    $('.link-description').on('mouseover', function (event) {
        event.preventDefault();
        scrollTo( $("#description") );
    });

    $('#link-career').on('mouseover', function (event) {
        event.preventDefault();
        scrollTo( $("#career") );
    });

    $(".progress-bar").map(function(){
        return $( this ).css('width', $( this ).attr("aria-valuenow") + "%");
    });
    console.log($(".progress-bar"));


});
