$(document).ready(function () {

    var splide = new Splide( '.splide', {
        type   : 'loop',
        padding: '3%',
        drag   : 'free',
        snap   : true,
        perPage: 4, 
        arrows: false,
        pagination : false,
        autoScroll: {
            speed: 1.5,
        }
      } );
      
      splide.mount(window.splide.Extensions);
});