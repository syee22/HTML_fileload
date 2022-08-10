/**
 * tabMenu.js
 */

$(function(){
    // 해당 객체에 css() 적용 예정이므로 jQuery 변수에 저장해야 함
    var $tabContent = $('#tabContent div');//tabMenu 클릭 시 노출되는 이미지

    // 첫번째 메뉴 항목 선택되어 있게
    $('#tab li:first-child').addClass('selectedItem'); 
    // tabMenu.css 에 임의로 생성한 css를 동적 적용

    // 탭메뉴 항목 클릭 시 each 안쓰고 접근
    $('#tab li').on('click',function(){
        var index = $(this).index(); // 현재 index로 li 의 index를 반환

        // 선택된 인덱스 메뉴의 이미지를 파랑배경부분이 보이게 변경
        // 모든 탭메뉴 항목에 선택시 적용됬던 css 효과제거
        $('#tab li').removeClass('selectedItem');
        
        // 클릭한 항목에만 적용
        $(this).addClass('selectedItem');

        // 컨텐츠 이미지 변경
        // $tabContent 의 모든 div 숨기고 모든 content 이미지 숨기기
        $tabContent.css('display','none');
        // 클릭한 탭메뉴 항목의 index에 해당하는 div 만 보이게 설정
        $tabContent.eq(index).css('display','block');


    });



})//ready 되면 