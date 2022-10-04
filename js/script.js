$(document).ready(function(){

    // AOS
    AOS.init();

    // 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
      });

      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
      });

      var swiper = new Swiper(".mySwiper3", {
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
      });

    // 햄버거버튼 클릭이벤트
    $('#hamburger').click(function(){

        $(this).toggleClass('active');
        $('.main-menu-m').toggleClass('active');

    })

    //서브메뉴연결
    $('.main-menu li').mouseenter(function(){
        
        const result = $(this).attr('data-alt');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');

        //서브메뉴박스 보이게 처리
        $('.sub-menu-box').addClass('active');

    });
    
    $('.sub-menu-box').mouseleave(function(){
        
        //서브메뉴박스 안보이게 처리
        $(this).removeClass('active');

    });

    // 배너 호버시 메뉴 색 변경
    // $('.banner-left .top .content').mouseenter(function(){

    //     $('.header-area .logo').addClass('active');

    // }).mouseleave(function(){

    //     $('.header-area .logo').removeClass('active');

    // });

    // $('.banner-mid .content').mouseenter(function(){

    //     $('.header-area .main-menu').addClass('active');

    // }).mouseleave(function(){

    //     $('.header-area .main-menu').removeClass('active');

    // });

    // $('.banner-right .top .content').mouseenter(function(){

    //     $('.header-area .icon-box').addClass('active');

    // }).mouseleave(function(){

    //     $('.header-area .icon-box').removeClass('active');

    // });

    // 버튼클릭 이벤트
    const btn = '.sec-4 .sub-content .btn';
    $(btn).mouseenter(function(){

        $(`${btn} span`).text('Go Insta');
        $(`${btn} img`).fadeIn();

    }).mouseleave(function(){
        $(`${btn} span`).text('Collabo');
        $(`${btn} img`).hide();
    });

    // 스크롤 색상변경
    $(window).scroll(function(){

        const sec3 = $('.sec-3 .container-100').offset().top;
        const sec4 = $('.sec-4').offset().top;
        const footer = $('.footer-bot .content').offset().top;

        const sct = $(window).scrollTop();


        if ((sct >= sec3 && sct < sec4) || sct >= footer) {

            // $('.main-menu li').css({

            //     color: '#fff'
    
            // });
            // $('.header-area').addClass('active');
            $('.header-area .logo').addClass('active');
            $('.header-area .main-menu').addClass('active');
            $('.header-area .icon-box').addClass('active');
            $('#hamburger').addClass('on');
            $('.main-menu li').mouseenter(function() {

               $(this).addClass('on');
               $('.header-area .main-menu').removeClass('active');

            });

            $('.main-menu li').mouseleave(function() {

                $(this).removeClass('on');

            });

        } else {

            // $('.main-menu li').css({

            //     color: '#222'
    
            // });
            // $('.header-area').removeClass('active');
            $('.header-area .logo').removeClass('active');
            $('.header-area .main-menu').removeClass('active');
            $('.header-area .icon-box').removeClass('active');
            $('#hamburger').removeClass('on');

        }

    });


    //상단 이동
    const btn1 = $('.footer-bot .news-letter .logo');
    const btn2 = $('.header-area .logo');
    btn1.add(btn2).on('click', function(e) {

        e.preventDefault(); // 오류를 줄이기 위한 메서드
        $('html,body').animate({
            scrollTop: 0
        },1000);

    });

    //클립보드 복사
    const copyData = document.getElementById('mail').innerText;

    function copyToClipboard(val) {

        var t = document.createElement("textarea");
        t.value = val;
        document.body.append(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);

    }

    $('#copy-btn').click(function() {

        copyToClipboard(copyData);
        toastMsg("복사성공!");

    });

    // 복사성공시 토스트메시지

    let removeToast;

    // 순수 자바스크립트 버전
    function toastMsg(string) {

        const toast = document.getElementById("toast");

        toast.classList.contains('reveal') ?
            (clearTimeout(removeToast), removeToast = setTimeout(function () {
                document.getElementById("toast").classList.remove('reveal')
            }, 1000)) :
            removeToast = setTimeout(function() {

                document.getElementById('toast').classList.remove('reveal')

            }, 1000);

        toast.classList.add('reveal'),
            toast.innerText = string;

    }


    // 제이쿼리 버전
    // function toastMsg(string) {

    //     const toast = $('#toast');

    //     if(toast.hasClass('reveal')) {

    //         (clearTimeout(removeToast), removeToast = setTimeout(function(){
    //             toast.removeClass('reveal');
    //         }, 1000));

    //     } else {

    //         removeToast = setTimeout(function(){
    //             toast.removeClass('reveal');
    //         }, 1000);
    //         toast.addClass('reveal'),
    //         toast.text(string);

    //     }

    // }


});