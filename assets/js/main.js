$(".clients").owlCarousel({
    margin: 30,
    loop: 'true',
    autoplay: 'true',
    autoplayTimeout: 5000,
    center: 'true',
    items: 3,
    dots: 'true'
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

$(".blog-details").owlCarousel({
        margin: 40,
        items: 3,
        loop: 'true',
        nav: 'true',
        navText: ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>']
    });

$(".sponsor").owlCarousel({
        margin: 100,
        loop: 'true',
        autoplay: 'true',
        autoplayTimeout: 5000,
        items: 6,
    });