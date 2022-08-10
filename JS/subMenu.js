/**
 * subMenu.js
 */

//[전체보기] 메뉴  클릭햇을때 모든 메뉴 항목이 보이게
$(function(){
    //전체보기메뉴클릭햇을때
    $('#showAllMenu').on('click',function(){
        if($(this).text()=='전체보기 ▼'){
            // 보이게
            $('#subMenuBox').css('visibility','visible');
            $(this).text('메뉴닫기▲').css('color','yellow');
        }
        else{
            // 안보이게
            $('#subMenuBox').css('visibility','hidden');
            $(this).text('전체보기 ▼').css('color','black');
        }
    }); 
    

});// (document).ready 생략가능