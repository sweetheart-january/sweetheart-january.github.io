/*
当鼠标光标进入图片范围时的就切换背景图片,3个方法分别对应不同的背景图片切换
*/

function mouseEnter1(){
	var obj = document.getElementById("imgobj");
	obj.className = "bg-style1";
}

function mouseEnter2(){
	var obj = document.getElementById("imgobj");
	obj.className = "bg-style2";
}

function mouseEnter3(){
	var obj = document.getElementById("imgobj");
	obj.className = "bg-style3";
}