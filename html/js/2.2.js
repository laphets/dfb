window.onload=function() {
   var canvas=document.getElementById("canvas");
   var context=canvas.getContext('2d');
   context.fillStyle='rgba(0,0,255,0.3)'; 
   context.fillRect(0,0,100,100);   
   context.fillStyle='rgb(255,255,0)';  
   context.fillRect(150,150,50,50);    
   context.strokeStyle='rgb(0,25,20)';  
   context.strokeRect(0,150,100,100);
   context.fillStyle='rgb(100,100,100)';  
   context.fillRect(125,50,100,50);
 }
