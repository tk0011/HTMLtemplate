$('.our-portfolio').owlCarousel({
    margin: 10,
    loop:true,
    center: true,
     items: 2,
        responsiveClass:true, 
        responsive:{
        0: {
          items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1,
        },
        1200:{
            items:2,
        }
    }
})


$('.our-partners-list-collection').owlCarousel({
    margin: 10,
    loop:true,
    center: true,
    //  autoplay:true,
     items: 1,
    slideSpeed: 500,
    paginationSpeed: 500,
    autoplayTimeout:4500,
   
})


$('.meets-list-collection ').owlCarousel({
  center: true,
     loop:true,
       responsiveClass:true, 
        responsive:{
         0: {
           items: 1
         },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        1200:{
            items:3,
        }
    }
})


$(function(){
  var header = $("#header"),
      yOffset = 0,
      triggerPoint = 175;
  $(window).scroll(function(){
    yOffset = $(window).scrollTop();
    if(yOffset >= triggerPoint){
      header.addClass("minimized");
    }else{
      header.removeClass("minimized");
    }
  });
});


var btn = $('.top-cover');
$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


AOS.init();
