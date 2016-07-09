window.onload=function() {
   var canvas=document.getElementById("canvas");
   var context=canvas.getContext('2d');
   var ch=context.createRadialGradient(200,150,0,200,150,100);
   ch.addColorStop(0.1,'blue');
   ch.addColorStop(0.5,'red');
   ch.addColorStop(1,'green');
   context.fillStyle=ch;
   context.beginPath();
   context.arc(200,150,100,0,Math.PI*2,true);
   context.closePath();
   context.fill();
 }
