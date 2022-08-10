/**
 * slideShow.js
 */

$(function(){
    // 현재 이미지의 index 값을 저장할 변수 생성
    var moveindex=0;


    // 초기 슬라이더 위치 랜덤하게 지정 
    var randomNumber = Math.floor(Math.random()*5);  // 0-4 사이 랜덤정수
    moveslide(randomNumber)
    //슬라이드 패널을 움직여주는 사용자 정의함수 
    function moveslide(index) {
        // 전달받은 index 값을 다른 변수에 저장
        moveindex=index;

        // 슬라이드이동거리를 계산
        var moveLeft = -(index*1280); // 왼쪽으로 이미지 넓이크기만큼 이동
        $('#slidePanel').animate({'left':moveLeft},'slow');
        
    };

    // prev 버튼을 클릭하면
    $('#prevButton').on('click',function(){
        //첫번째 이미지인지 확인
        if(moveindex!=0){
            moveindex-=1;
            moveslide(moveindex);
        }
    });
    // next 버튼 클릭하면
    $('#nextButton').on('click',function(){
        //마지막 이미지인지 확인 
        if(moveindex!=4){
            moveindex+=1;
            moveslide(moveindex);
        }
    });

    $('.controlButton').each(function(index){
        $(this).hover(
            function(){
                $(this).attr('src','image/controlButton2.png');
            },
            function(){
                $(this).attr('src','image/controlButton1.png');
            }
        );

        //클릭햇을때 현재 인덱스 값을 moveslide() 함수에 전달
        $(this).on('click',function(){
            moveslide(index);
        });
    });

    //3 초 마다 자동으로 슬라이드 이동
    setInterval(function(){
        if(moveindex!=4) {//마지막이미지가 아니라면
            moveindex +=1
        }
        else
            moveindex = 0 ;// 마지막 이미지면 첫번째 이미지로 돌아감
        moveslide(moveindex);
    },5000)  // setInterval 이 3초에 한번씩 함수호출


});