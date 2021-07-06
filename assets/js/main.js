$(".clients").owlCarousel({
    margin: 30,
    loop: 'false',
    autoplay: 'false',
    autoplayTimeout: 5000,
    center: 'true',
    items: 3
});
// init Isotope
    var $grid = $('.table-details').isotope({
    // options
    });
// filter items on button click
    $('.list-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });
