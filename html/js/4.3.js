function draw(context,s){
    context.save();
    var dx=0,dy=0;
    context.beginPath();
    context.fillStyle='rgb(255,255,255)';
    var cur=Math.PI/5*4;
    for(var i=0;i<5;i++){
        var x=Math.sin(i*cur);
        var y=Math.cos(i*cur);
        context.lineTo(dx+x*s,dy+y*s);
    }
    context.fill();
    context.closePath();
    context.restore();
}
window.onload=function() {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');
    var lingrad = context.createLinearGradient(50,50,100,300);
    lingrad.addColorStop(0,'#232256');
    lingrad.addColorStop(1,'#143778');
    context.fillStyle=lingrad;
    context.fillRect(0,0,400,300);
    for(var i=0;i<50;i++){
        context.save();
        context.translate(Math.random()*400,Math.random()*300);
        draw(context,Math.floor(Math.random()*7)+2);
        context.restore();
    }
}
