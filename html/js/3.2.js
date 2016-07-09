var img=new Image();
img.src='http://blog.laphets.com/favicon.ico';
window.onload=function() {
    var canvas=document.getElementById('canvas');
    var context=canvas.getContext('2d');
    var ch=context.createPattern(img,"repeat");
    context.rect(0,0,900,900);
    context.scale(0.4,0.4);
    context.fillStyle=ch;
	context.fill();
}
