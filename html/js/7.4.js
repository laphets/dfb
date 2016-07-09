var canvas,context;
var A,M,N,B;
function clear() {
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
}
function DrawAxis() {
    context.beginPath();
    for(var i=0.5;i<1000;i+=10) {
    context.moveTo(i,0);
    context.lineTo(i,700);
    }
    for(var i=0.5;i<700;i+=10) {
        context.moveTo(0,i);
        context.lineTo(1000,i);
    }
    context.strokeStyle='rgba(0,0,0,0.2)';
    context.stroke();
    context.closePath();
    context.font="30px 微软雅黑";
    context.fillStyle='rgb(0,0,0)';
    context.fillText("sin函数演示:",130,50);    
    context.fillText('f(x)='+A+'sin('+M+'x+'+N+')+'+B+'',300,50);
}
function DrawSin() {
    context.beginPath();
    context.moveTo(0,0);
    for(var x=0;x<700.5;x++) {
        //context.lineTo(x,A*Math.sin(M*x+N)+B);
        context.lineTo(x,A*Math.sin((M*x+N)*Math.PI/180)+B);
    }
    context.strokeStyle='blue';
    context.lineWidth=1;
    context.stroke();
    context.closePath();
}
function Draw() {
    clear();

    context.save();
    DrawAxis();

    context.translate(120.5,300.5);
    context.beginPath();
    //x
    context.moveTo(0,-300.5);
    context.lineTo(0,300.5);
    //y
    context.moveTo(-120.5,0);
    context.lineTo(700.5,0);

    context.strokeStyle='black';
    context.lineWidth=2;
    context.stroke();
    context.closePath();

    DrawSin();
    context.restore();
}

window.onload=function() {
    canvas=document.getElementById('canvas');
    context=canvas.getContext('2d');
    A=120,M=1,N=30,B=30;
    Draw();
    document.getElementById('startBtn').onclick=function(){
        A=0,M=0,N=0,B=0;
        A=document.getElementById('name1').value;
        M=document.getElementById('name2').value;
        N=document.getElementById('name3').value;
        B=document.getElementById('name4').value;
        //context.save();
        Draw();
        //context.restore();
    }
    //setInterval(Draw,30);
}
