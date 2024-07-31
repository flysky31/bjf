
$(document).ready(function() {



    var playButton = document.getElementById('play');
    var playTxt = document.getElementById('play_txt');
    var pausedButton = document.getElementById('paused');

    var video = document.getElementById("video");
    var playPauseBtn = document.getElementById("playPauseBtn");
    //var volumeControl = document.getElementById("volumeControl");
    var progressControl = document.getElementById("progressControl");
    var currentTimeSpan = document.getElementById("currentTime");
    var durationSpan = document.getElementById("duration");

    // 비디오의 기본 컨트롤러를 비활성화
    video.controls = false;

    // 재생/일시 중지 버튼 클릭 이벤트
    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "Pause"; 
            playButton.style.display = 'none';
            playPauseBtn.classList.add("on");
            playTxt.style.display = 'none';
        } else {
            video.pause();
            playPauseBtn.textContent = "Play";
            playPauseBtn.classList.remove("on");
            playTxt.style.display = 'block';
            playButton.style.display = 'block';
        }
    });

    // play 버튼을 클릭할 때 비디오를 재생하고 버튼을 숨깁니다.
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
            playTxt.style.display = 'none';
            playPauseBtn.classList.add("on");
        } else {
            video.pause();
            playButton.style.display = 'block';
            playTxt.style.display = 'block';
            playPauseBtn.classList.remove("on");

        }
        
    });
    video.addEventListener("ended", function() {
        playPauseBtn.textContent = "Play"; 
        playPauseBtn.classList.remove("on");
    });

    // // 볼륨 조절 이벤트
    // volumeControl.addEventListener("input", function() {
    //     video.volume = volumeControl.value;
    // });

    // 비디오의 현재 시간 및 전체 시간 업데이트
    video.addEventListener("timeupdate", function() {
        var currentTime = video.currentTime;
        var duration = video.duration;

        // 현재 시간을 분:초 형식으로 변환
        var currentMinutes = Math.floor(currentTime / 60);
        var currentSeconds = Math.floor(currentTime % 60);
        currentTimeSpan.textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;

        // 전체 시간을 분:초 형식으로 변환
        var durationMinutes = Math.floor(duration / 60);
        var durationSeconds = Math.floor(duration % 60);
        durationSpan.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;

        // 진행 상황 업데이트
        progressControl.querySelector("input").value = (currentTime / duration) * 100;
    });

    // 비디오의 진행 상황 조절
    progressControl.querySelector("input").addEventListener("input", function() {
        var seekTime = (progressControl.querySelector("input").value / 100) * video.duration;
        video.currentTime = seekTime;
    });

    // 마우스 이벤트에 상관없이 항상 컨트롤러를 표시
    video.addEventListener("mouseover", function() {
        document.getElementById("custom-controls").style.opacity = 1;
    });

    video.addEventListener("mouseout", function() {
        document.getElementById("custom-controls").style.opacity = 1;
    });

    // 모바일 디바이스에서는 항상 노출
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById("custom-controls").style.display = "block";
    }


    // $('#movie-btn').click(function(){
    //     var video = $('#video').get(0);
    //     // var image = $('.movie img');
    //     // var movieTxt = $('.movie-txt');
    //     // var before = $('.before');
    //     // var after = $('.after');
    //     var play = $('#movie-btn .play');
    //     var paused = $('#movie-btn .paused');

    //     if (video.paused) {
    //         video.play();
    //         // image.addClass('on');
    //         // movieTxt.addClass('hide');
    //         // before.addClass('none');
    //         // after.removeClass('none');
    //         play.addClass('none');
    //         paused.removeClass('none');

    //     } else {
    //         video.pause();
    //         // image.removeClass('on');
    //         // movieTxt.removeClass('hide');
    //         // before.removeClass('none');
    //         // after.addClass('none');
    //         play.removeClass('none');
    //         paused.addClass('none');
    //     }
    // });



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






// 비디오를 클릭하면 중지합니다.
// pausedButton.addEventListener('click', function() {
//     if (!video.paused) {
//         video.pause();
        
//     }
// });

// 비디오가 시작될 때 play 버튼을 숨깁니다.
video.addEventListener('play', function() {
    playButton.style.display = 'none';
});
video.addEventListener('pause', function() {
    pausedButton.style.display = 'none';
    playButton.style.display = 'block';
});


    
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



// 페이지 로드 시 초기 탭 활성화
function openTab(tabId) {
    // 모든 탭 내용 숨김
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => {
      content.style.display = 'none';
    });
  
    // 모든 탭 버튼에서 'active' 클래스 제거
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
      button.classList.remove('active');
    });
  
    // 선택한 탭 내용 보이기
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
  
    // 선택한 탭 버튼에 'active' 클래스 추가
    const selectedButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    selectedButton.classList.add('active');
  }
  

  
