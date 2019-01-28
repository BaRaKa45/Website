const $ = require('jquery');

require('bootstrap');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();

    function scrollTo( target ) {
        if( target.length ) {
            $("html, body").stop().animate( { scrollTop: target.offset().top }, 1500);
        }
    }


    $('#link-description').on('click', function (event) {
        event.preventDefault();
        scrollTo( $("#description") );
    });

});
