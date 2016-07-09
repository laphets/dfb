function Line(context) {
    context.save();
    x1=Math.floor(Math.random()*400);
    y1=Math.floor(Math.random()*400);
    x2=Math.floor(Math.random()*400);
    y2=Math.floor(Math.random()*400);
    r=Math.floor(Math.random()*255);
    g=Math.floor(Math.random()*255);
    b=Math.floor(Math.random()*255);
    a=Math.random();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.strokeStyle='rgba('+r+','+g+','+b+','+a+')';
    context.lineWidth=Math.floor(Math.random()*6);  
    context.stroke();
    context.restore();
}
window.onload=function() {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');
    var interal=setInterval(function(){
        Line(context);
    },100);
}
