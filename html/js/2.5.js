window.onload=function() {
   var canvas=document.getElementById("canvas");
   var context=canvas.getContext('2d');
   var ch=context.createLinearGradient(50,50,100,300);
   ch.addColorStop(0,'blue');
   ch.addColorStop(0.5,'red');
   ch.addColorStop(1,'green');
   context.fillStyle=ch;
   context.fillRect(0,0,300,300);
 }
