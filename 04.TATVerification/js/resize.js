$(document).ready(function () {
    updateContainer();
});
$(window).resize(function () {
    updateContainer();
});

function updateContainer() {
    var $windowWidth = $(window).width();
    if ($windowWidth < 1110) {
        $('.canvas').css({'marginLeft': '10%'});
        $('#canvas-3').css({'marginLeft': '8%'});
    }

    if ($windowWidth > 1110) {
        $('.canvas').css({'marginLeft': '20%'});
        $('#canvas-3').css({'marginLeft': '15%'});
    }
};