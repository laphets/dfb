var img=new Image();
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
img.src='yizhong.jpg';
img.onload=function() {
	ctx.drawImage(img,0,0);
}
function pick(e) {
	var x=e.layerX;
	var y=e.layerY;
	var imgData=ctx.getImageData(x,y,1,1);
	var data=imgData.data;
	var rgba='rgba('+data[0]+','+data[1]+','+data[2]+','+data[3]+')';
	//alert(rgba);
	var w=document.getElementById("pa");
	w.innerHTML=rgba;
}
canvas.addEventListener('mousemove',pick);