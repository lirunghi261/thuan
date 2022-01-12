
$(document).ready(function() {
  $('.banner .banner-slider').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: true,
      autoplayTimeout: 2000,
    })
});

$(document).ready(function() {
  $('.new-products .box-container .wrap-products-brand .wrap-brand .wrap-brand-slider').owlCarousel({
      items: 5,
      loop: true,
      dots: false,
      nav: false,  
      margin: 20,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: true,
      // autoplayTimeout: 5000,
      responsive: {
        0: {
          items:1,
          nav:false
        },
        576:{
          items:2,
          nav:false
        },
        768:{
            items:3,
            nav:false
        },
        992: {
          items:4,
          nav:false
        },
        1200:{
            items:5,
            nav:false,
            loop:true
        },
      
      }
    })
});

$(document).ready(function() {
  $('.new-products .box-container .wrap-products-brand .wrap-new-products .new-product-slider').owlCarousel({
      items: 4,
      loop: false,
      dots: false,
      nav: true,  
      margin: 10,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: false,
      // autoplayTimeout: 5000,
      responsive: {
        0: {
          items:1,
          nav:true
        },
        576:{
          items:1,
          nav:true
        },
        768:{
            items:2,
            nav:true
        },
        992: {
          items:3,
          nav:true,
        },
        1200:{
            items:4,
            nav:true,
        },
        1500: {
          items:4,
          nav:true,
        }
      }
    })
});

$(document).ready(function() {
  $('.new-products .box-container .wrap-products-brand .wrap-popular-products .popular-product-slider').owlCarousel({
      items: 1,
      loop: false,
      dots: false,
      nav: true,  
      margin: 10,
      navText: ['<i class="fas fa-chevron-left prev"></i>', '<i class="fas fa-chevron-right next"></i>'],
      autoplay: false,
      // autoplayTimeout: 5000,
      // responsive: {
      //   0: {
      //     items:1,
      //     nav:true
      //   },
      //   576:{
      //     items:1,
      //     nav:true
      //   },
      //   768:{
      //       items:1,
      //       nav:true
      //   },
      //   992: {
      //     items:1,
      //     nav:true,
      //   },
      //   1200:{
      //       items:1,
      //       nav:true,
      //       loop:false
      //   },
      // }
    })
});