var canvas,context;
var circle;
var d;
var selectedCircle,hoveredCircle;
function Circle(x,y,r) {
    this.x=x;
    this.y=y;
    this.r=r;
}
function DrawCircle(context,x,y,r) {
    context.fillStyle='rgba(255,35,55,1.0)';
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,true);
    context.closePath();
    context.fill(); 
}
function DrawText() {
    var k=circle.x-100;
    context.font="30px 微软雅黑";
    context.fillStyle='rgb(0,0,0)';
    context.fillText('弹簧振子演示   长度x='+k+'',120,50);
}
function clear() {
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
}
function DrawLine()
{
    d=(circle.x-100)/11;
    clear();
    //clearRect(0,0,1000,1000);
    DrawText();
    context.fillStyle='red';
    context.strokeStyle='black';
    context.lineWidth=3;
    context.moveTo(100,125);
context.lineTo(100,275);

    context.moveTo(100,200);
    context.lineTo(100+d/2,150);

    context.save();
    context.translate(100+d,200);
    for(var i=0;i<10;i++) {
        if(i%2==0) {
            context.moveTo(-d/2,-50);
            context.lineTo(d/2,50);
        }
        else {
            context.moveTo(d/2,-50);
            context.lineTo(-d/2,50);
        }
        context.translate(d,0);
    }
    context.moveTo(-d/2,-50);
    context.lineTo(0,0);
    context.stroke();
    context.restore();
    //context.strokeStyle='white';
    if(hoveredCircle!=undefined) {
        DrawCircle(context,circle.x,200,24);
    }
    else 
        DrawCircle(context,circle.x,200,17);
}
window.onload=function() {
    canvas=document.getElementById("canvas");
    context=canvas.getContext('2d');
    circle=new Circle(650,200,17);
    //DrawLine(context,50);
    canvas.onmousedown=function(e) {
        var e=window.event||e;
        var rect=this.getBoundingClientRect();
        var mouseX=e.clientX-rect.left;
        var mouseY=e.clientY-rect.top;
        if(Math.pow(mouseX-circle.x,2)+Math.pow(mouseY-circle.y,2)<Math.pow(circle.r,2)) {
            selectedCircle=1;
            //DrawCircle(context,100,200,circle.r);
        }
    }
    canvas.onmousemove=function(e) {
        var e=window.event||e;
        var rect=this.getBoundingClientRect();
        var mouseX=e.clientX-rect.left;
        var mouseY=e.clientY-rect.top;
        if(selectedCircle!=undefined) {
            var r=circle.r;
            circle=new Circle(mouseX,200,r);
            hoveredCircle=1;
            //DrawCircle(context,circle.x,200,circle.r);
        }
        else
            hoveredCircle=undefined;
        if(Math.pow(mouseX-circle.x,2)+Math.pow(mouseY-circle.y,2)<Math.pow(circle.r,2)) {
            hoveredCircle=1;
        }
    }
    canvas.onmouseup=function(e) {
        selectedCircle=undefined;
    }
    //d=(circle.x-100)/11;
    setInterval(DrawLine,10);
}
