window.onload=function() {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');
    context.fillStyle='rgba(255,0,0,0.75)';
    context.beginPath();
    context.scale(1.5,1.5);
    context.moveTo(75,60);
    context.bezierCurveTo(125,20,125,100,75,115);
    context.bezierCurveTo(25,100,25,20,75,60);
    context.closePath();
    context.fill();
 }
