$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    spacing:"3px",
    multiColor: {
        "startColor": "#FF0000", //RED
        "endColor"  : "#ffc000"  //GREEN
      }
    });

    $(".product__case-slider").slick({
      arrows:true,
      prevArrow:
         '<button type="button" class="slick-prev lnr-chevron-left"></button>',
       nextArrow:
         '<button type="button" class="slick-next lnr-chevron-right"></button>',
    });

    $(".foll-feeds__slider").slick({
      arrows:true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:
         '<button type="button" class="slick-prev lnr-chevron-left"></button>',
       nextArrow:
         '<button type="button" class="slick-next lnr-chevron-right"></button>',
    });

    $(".testimonial__slider").slick({
      arrows:true,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite:true,
      prevArrow:
         '<button type="button" class="slick-prev lnr-chevron-left"></button>',
       nextArrow:
         '<button type="button" class="slick-next lnr-chevron-right"></button>',
    });


  });

  var mixer = mixitup('.products__types');



    

