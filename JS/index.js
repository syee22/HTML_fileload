/**
 * index.js
 */

$(function(){
    // 윈도우 스크롤 시 메인메뉴 고정
    $(window).on('scroll',function(){
        if($('#headerBox').height() >= $(document).scrollTop()){

            $('#mainMenuBox').removeClass('mainMenuFixed');
            $('#mainMenuBox').removeClass('mainMenuShadow');
        }
        else{
            $('#mainMenuBox').addClass('mainMenuFixed');
            $('#mainMenuBox').addClass('mainMenuShadow');
        };
    });

    // moveToTop 이미지 클릭시 top 으로 이동
    $('#moveToTop').on('click',function(){
        $('html,body').animate({scrollTop:0},500)
    });
})