var obTimeOut; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨

var ObjectArray = new Array ();

ObjectArray[1] = "adv/ad1.jpg";

ObjectArray[2] = "adv/ad2.jpg";

// ObjectArray[3] = "";

// ObjectArray[4] = "";

// ObjectArray[5] = "";

// ObjectArray[6] = "";

var nObjectCnt = 0;



function ShowDefaultRotate() // 스스로 자신을 호출하는 재귀함수 (Recursive Function)
{
	nObjectCnt++;

	if( nObjectCnt < ObjectArray.length )  // 배열의 갯수 이내일때만 실행
	{
		document.getElementById("adv_img2").src = ObjectArray[nObjectCnt];
		obTimeOut = setTimeout("ShowDefaultRotate()",1000);  // 1초후에 자기자신을 호출
	}
  else
	{
		nObjectCnt = 0; // 배열의 갯수만큼 반복하여 변환시킨 후에는 Timeout 을 중지시킨다
    	obTimeOut = setTimeout("ShowDefaultRotate()",0000);  // 1초후에 자기자신을 호출
	}
}


function startAnimation()
{
      obTimeOut = window.setTimeout(ShowDefaultRotate,1000); // 윈도우 로드 후 0.1초 후에 반복함수를 호출합니다.
}


 window.onload = startAnimation; // 윈도우 로드시 이미지 변환함수 실행
