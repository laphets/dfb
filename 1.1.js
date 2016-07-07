function Draw() {
    var canvas=document.getElementById('canvas1.1');
    var context=canvas.getContext('2d');
    context.save();
    context.clearRect(0,0,150,150);
    context.translate(75,75);
    context.scale(0.4,0.4);
    context.rotate(-Math.PI/2);
    context.strokeStyle="black";
    context.fillStyle="white";
    context.lineWidth=8;
    context.lineCap="round";

    context.save();
    for(var i=0;i<12;i++) {
        context.beginPath();
        context.rotate(Math.PI/6);
        context.moveTo(100,0);
        context.lineTo(120,0);
        context.stroke();
    }
    context.restore();

    context.save();
    context.lineWidth=5;
    for(var i=0;i<60;i++) {
        if(i%5!=0) {
            context.beginPath();
            context.moveTo(117,0);
            context.lineTo(120,0);
            context.stroke();
        }
        context.rotate(Math.PI/30);
    }
    context.restore();

    var now=new Date();
    var s=now.getSeconds();
    var min=now.getMinutes();
    var h=now.getHours();
    if(h>=12)
        h-=12;
    context.fillStyle="black";
    //hour
    context.save();
    context.rotate((Math.PI/6)*h+(Math.PI/360)*min+(Math.PI/21600)*s);
    context.lineWidth=14;
    context.beginPath();
    context.moveTo(-20,0);
    context.lineTo(80,0);
    context.stroke();
    context.restore();
    //minute
    context.save();
    context.rotate((Math.PI/30)*min+(Math.PI/1800)*s);
    context.lineWidth=10;
    context.beginPath();
    context.moveTo(-28,0);
    context.lineTo(112,0);
    context.stroke();
    context.restore();
    //second
    context.save();
    context.rotate((Math.PI/30)*s);
    context.strokeStyle="red";
    context.fillStyle="re";
    context.lineWidth=6;
    context.beginPath();
    context.moveTo(-30,0);
    context.lineTo(83,0);
    context.stroke();
    //context.closePath();
    context.beginPath();
    context.arc(0,0,10,0,Math.PI*2,true);
    context.fill();
    //context.closePath();
    context.beginPath();
    context.arc(95,0,10,0,Math.PI*2,true);
    context.stroke();
    context.restore();

    context.beginPath();
    context.lineWidth=14;
    context.strokeStyle='rgba(0,0,255,0.65)';
    context.arc(0,0,142,0,Math.PI*2,true);
    context.stroke();

    context.restore();
    window.requestAnimationFrame(Draw);
}
window.onload=function() {
    window.requestAnimationFrame(Draw);
}

