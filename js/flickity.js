$('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
// disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false
  });

  (function($){

    $(document).ready(function(){
    $('.carousel').flickity();

    })


  })(jQuery)