window.onload=function() {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');
    context.save(); 
    context.fillStyle = "rgba(0,0,255,0.25)";
    context.translate(100, 100);
    context.scale(0.5, 0.5);
    context.rotate(Math.PI / 4);
    context.fillRect(0, 0, 100, 100);
    context.restore();
    context.save();
    context.fillStyle = "rgba(0,0,255,0.25)";
    context.translate(50,50);
    context.scale(1.1,1.5);
    context.rotate(Math.PI/3);
    context.fillRect(0,0,60,60);
 }

