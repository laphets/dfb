var img=new Image();
img.src='http://blog.laphets.com/favicon.ico';
window.onload=function() {
    var canvas=document.getElementById('canvas');
    var context=canvas.getContext('2d');
    context.fillStyle='rgba(0,0,255,0.3)';
    context.fillRect(0,0,256,256);
    context.beginPath();
    context.arc(123,123,100,0,Math.PI*2,true);
    context.closePath();
    context.clip();
    context.drawImage(img,0,0);
}
