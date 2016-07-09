window.onload=function() {
   var canvas=document.getElementById("canvas");
   var context=canvas.getContext('2d');
   context.beginPath();
   context.arc(100,100,100,0,Math.PI*1.35,false);
   context.closePath();
   context.fillStyle='rgba(100,100,100,0.5)';
   context.fill();
 }
