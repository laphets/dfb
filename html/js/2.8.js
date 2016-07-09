window.onload=function() {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');
    context.shadowOffsetX=15;
    context.shadowOffsetY=15;
    context.shadowBlur=3;
    context.shadowColor="rgba(255,0,0,0.25)";
    context.fillStyle="rgba(0,0,255,0.5)"
    context.fillRect(0,0,150,100);
 }
