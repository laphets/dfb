window.onload=function() {
   var canvas=document.getElementById("canvas");
   var context=canvas.getContext('2d');
   context.fillStyle='red';
   context.strokeStyle='black';
   context.moveTo(50,50);
   context.lineTo(100,100);
   context.lineTo(50,150);
   context.stroke();
   context.fill();
   context.moveTo(50,50);
   context.lineTo(150,50);
   context.stroke();
 }
