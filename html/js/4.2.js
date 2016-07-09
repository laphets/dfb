function createPath(context) {
    var dx=0,dy=0,s=50;
    context.beginPath();
    context.fillStyle='rgba(255,0,0,0.5)';
    var cur=Math.PI/5*4;
    for(var i=0;i<5;i++) {
        var x=Math.sin(i*cur);
        var y=Math.cos(i*cur);
        context.lineTo(dx+x*s,dy+y*s);
    }
    context.closePath();
}
window.onload=function() {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');
    context.translate(70,70);
    for(var i=1;i<=3;i++) {
        context.translate(60,60);
        createPath(context);
        context.fill();
    }
}

