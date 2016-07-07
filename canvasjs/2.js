var canvas,context;
var circles=[];
var selectedCircle;
var hoveredCircle;
function Circle(x,y,r) {
    this.x=x;
    this.y=y;
    this.r=r;
}
function clear() {
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
}
function drawCircle(context,x,y,r) {
    context.fillStyle='rgba(255,35,55,1.0)';
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,true);
    context.closePath();
    context.fill();
}
function drawText(x0,y0,x1,y1,x2,y2,x3,y3) {
    context.font="30px 微软雅黑";
    context.fillStyle='rgb(0,0,0)';
    context.fillText("力的平行四边形演示",50,50);
    var a1=Math.sqrt((x1-x0)*(x1-x0)+(y1-y0)*(y1-y0))/20;
    var a2=Math.sqrt((x2-x0)*(x2-x0)+(y2-y0)*(y2-y0))/20;
    var a3=Math.sqrt((x3-x0)*(x3-x0)+(y3-y0)*(y3-y0))/20;
    context.fillText('分力1: '+a1.toFixed(2)+'N 分力2: '+a2.toFixed(2)+'N 合力: '+a3.toFixed(2)+'N',50,80);
}
function drawScene() {
    clear();
    circles[3].x=circles[1].x+circles[0].x-circles[2].x;
    circles[3].y=circles[1].y+circles[0].y-circles[2].y;
    drawText(circles[2].x,circles[2].y,circles[0].x,circles[0].y,circles[1].x,circles[1].y,circles[3].x,circles[3].y);
    context.beginPath();
    context.fillStyle='rgba(0,0,0,0.2)'; 
    context.moveTo(circles[2].x,circles[2].y);
    context.lineTo(circles[1].x,circles[1].y);
    context.lineTo(circles[3].x,circles[3].y);
    context.lineTo(circles[0].x,circles[0].y);
    context.lineTo(circles[2].x,circles[2].y);
    context.lineTo(circles[3].x,circles[3].y);
    context.closePath();
    context.fill();
    context.lineWidth=5;
    context.strokeStyle='blue';
    context.stroke();
    for(var i=0;i<4;i++) {
        if(hoveredCircle==i) {
            drawCircle(context,circles[i].x,circles[i].y,25);
        }
        else {
            drawCircle(context,circles[i].x,circles[i].y,15);
        }
    }
}
function main() {
    canvas=document.getElementById('canvas2');
    context=canvas.getContext('2d');
    var circleR=15;
    var width=canvas.width;
    var height=canvas.height;
    var circlesCount=2;
    circles.push(new Circle(50,150,circleR));
    circles.push(new Circle(400,400,circleR));
    circles.push(new Circle(50,400,circleR)); //begin
    circles.push(new Circle(400,150,circleR)); //end
    canvas.onmousedown=function(e) {
        var e=window.event||e;
        var rect=this.getBoundingClientRect();
        var mouseX=e.clientX-rect.left;
        var mouseY=e.clientY-rect.top;
        for(var i=0;i<circlesCount;i++) {
            var circleX=circles[i].x;
            var circleY=circles[i].y;
            var r=circles[i].r;
            if(Math.pow(mouseX-circleX,2)+Math.pow(mouseY-circleY,2)<Math.pow(r,2)){
                selectedCircle=i;
                break;
            }
        }
    }
    canvas.onmousemove=function(e) {
        var e=window.event||e;
        var rect=this.getBoundingClientRect();
        var mouseX=e.clientX-rect.left;
        var mouseY=e.clientY-rect.top;
        if(selectedCircle!=undefined) {
            var r=circles[selectedCircle].r;
            circles[selectedCircle]=new Circle(mouseX,mouseY,r);
        }
        hoveredCircle=undefined;
        for(var i=0;i<circlesCount;i++) {
            var circleX=circles[i].x;
            var circleY=circles[i].y;
            var r=circles[i].r;
            if(Math.pow(mouseX-circleX,2)+Math.pow(mouseY-circleY,2)<Math.pow(r,2)) {
                hoveredCircle=i;
                break;
            }
        }
    }
    canvas.onmouseup=function(e) {
        selectedCircle=undefined;
    }
    //clear();
    window.requestAnimationFrame(drawScene);
    //setInterval(drawScene,1000);
}

main();