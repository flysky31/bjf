
$(document).ready(function() {
    $('#declaration').click(function() {
        $('#modal').addClass('show');
    });
    $('#modal .close').click(function() {     
        $('#modal').removeClass('show');
    }); 


    
    $('.firstD').click(function(){
        $(this).next().slideToggle();
    });
    $('.innerFirstD').click(function(){
        var textthis = $(this).text();
        $('.firstD').text(textthis);
        $('.firstD').next().slideUp();
    })
    $('.secondD').click(function(){
        $(this).next().slideToggle();
    });


    //tab
    $("#product02 .tab_area ul li a").click(function(){
      $(this).toggleClass('active');  
      $("#product02 .tab_area ul li a").not(this).removeClass("active");   
    })




    

    
    //
    var swiper = new Swiper(".news_swiper", {
      slidesPerView:1,
      
      spaceBetween: 45,
      navigation: {
        nextEl: ".arrow .swiper-button-next",
        prevEl: ".arrow .swiper-button-prev",
      },
      loop:true,
      centeredSlides: true,
      //loopedSlides: 1,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
      speed:1000,
    //     slidesPerView: 1,
    //      spaceBetween: 0,
    //      centeredSlides: true,
    //      loop:true,
    //      loopedSlides: 1,
    //       autoplay: {
    //       delay: 2000,
    //       disableOnInteraction: false,
    //       },
    //       navigation: {
    //         nextEl: ".arrow .swiper-button-next",
    //         prevEl: ".arrow .swiper-button-prev",
    //       },
        
    //     speed:1000,
         breakpoints: {
        
             414: {
               slidesPerView: 1,  
              spaceBetween: 0,
             },
             1024: {
                 slidesPerView: 2,  
                 spaceBetween: 20,
              },
             1600: {
               slidesPerView: 3, 
               spaceBetween: 45,
             },
           },
     });



  //상세슬라이드
  var swiper1 = new Swiper(".mySwiper1", {
    //loop: true,
    //spaceBetween: 10,
    slidesPerView: 2,
    //freeMode: true,
    
    watchSlidesProgress: true,
    breakpoints: {
      540: {
            slidesPerView: 2         
            },
       768: {
         slidesPerView: 2
      
       },
      1360: {
        slidesPerView: 3          
      },
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    //loop: true,
    //spaceBetween: 10,
    navigation: {
      nextEl: ".swiper_arrow .swiper-button-next",
      prevEl: ".swiper_arrow .swiper-button-prev",
    },
    //effect:"fade",
    thumbs: {
      swiper: swiper1,
    },
  });
});





$(document).ready(function() {
      // 메인 Slider
      new Swiper('.swiper-container', {
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: "auto",
          paginationClickable: true,
          spaceBetween: 20,
          navigation: {
            nextEl: ".arrow .swiper-button-next",
            prevEl: ".arrow .swiper-button-prev",
          },
          // breakpoints: {
          //     1600: {
          //         slidesPerView: 3,
          //         spaceBetween: 30
          //     },
          //     1028: {
          //         slidesPerView: 2,
          //         spaceBetween: 30
          //     },
          //     480: {
          //         slidesPerView: 1,
          //         spaceBetween: 10
          //     }
          // }
      });


      //product slider
      new Swiper('.swiper-container2', {
        //loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        //paginationClickable: true,
        spaceBetween: 20,
        touchRatio: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         breakpoints: {
          //    1280: {
          //       touchRatio: 0,
          //    },
          //    : {
          //     touchRatio: 0,
          //  },
            //  1028: {
            //      slidesPerView: 2,
            //      spaceBetween: 30
            //  },
              414: {
                slidesPerView: "auto",
            }
         }
    });
});
  

//totop 踰꾪듉
// function toggleTotopButton() {
//     var totopButton = document.getElementById("totop");
//     if (document.documentElement.scrollTop > 300) {
//       totopButton.style.opacity = "1";
//     } else {
//       totopButton.style.opacity = "0";
//     }
//   }
  
//   // �곷떒�쇰줈 �ㅽ겕濡ㅽ븯�� �⑥닔
//   function scrollToTop() {
//     document.documentElement.scrollTop = 0;
//   }
  
//   // �ㅽ겕濡� �대깽�몃� 媛먯��섏뿬 "totop" 踰꾪듉�� �쒖떆/�④��� 泥섎━
//   window.onscroll = function() {
//     toggleTotopButton();
//   };




//totop 踰꾪듉
// function toggleTotopButton() {
//     var totopButton = document.getElementById("totop");
//     if (document.documentElement.scrollTop > 300) {
//       totopButton.style.opacity = "1";
//     } else {
//       totopButton.style.opacity = "0";
//     }
//   }

//   function scrollToTop() {
//     document.documentElement.scrollTop = 0;
//   }
  
//   window.onscroll = function() {
//     toggleTotopButton();
//   };