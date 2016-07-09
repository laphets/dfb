var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var running=false;
var cnt=0,a=0.01;
var ball= {
  x:10,y:50,r:15,color:'red',
  vx:5,vy:2,
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fillStyle=this.color;
    ctx.fill();
  }
};
var ball2= {
  x:600,y:213,r:15,color:'blue',
  vx:5,vy:2,
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fillStyle=this.color;
    ctx.fill();
  }
};
var sense= {
  x:175,y:50,r:175,color:'black',linewide:3,long:50,
  draw: function() {
    ctx.beginPath();
    ctx.strokeStyle=this.color;
    ctx.lineWidth=3;
    ctx.arc(this.x,this.y,this.r,Math.PI,Math.PI/2,true);
    //ctx.lineTo(0,0);
    ctx.lineTo(this.x+this.long,this.y+this.r);
    ctx.stroke();
    ctx.closePath();
    
  }
};
var line= {
  y:100,from:100,to:600,
  draw: function() {
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([5]);
    ctx.moveTo(this.from,this.y+ball.r);
    ctx.lineTo(this.to,this.y+ball.r);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  },
  // text: function() {
  //   ctx.fillStyle='rgb(0,0,0)';
  //   ctx.filltext(ball.vy,this.from,this.y);
  // }
}
function clear() {
  ctx.fillStyle='rgba(255,255,255,0.5)';
  ctx.clearRect(0,0,canvas.width,canvas.height);
}
function draw() {
  clear();
  sense.draw();
  ball.draw();
  ball2.draw();
  if(ball.x<175)
  {
    //ball.vx=5;
    ball.x+=1;
    //ball.y+=1;
    ball.y=Math.sqrt(Math.pow(sense.r,2)-Math.pow((ball.x-sense.x-10),2))+sense.y-12;
  }
  else if(ball.x<225)
  {
    ball.x+=1;
  }
  else
  {
    if(ball.y+ball.r<canvas.height)
    {
      ball.x+=1;
      //ball2.x+=1;
      cnt+=a;
      ball.y+=cnt;
      ball2.y+=cnt; 
      line.y=ball.y;
      line.from=ball.x-30;
      line.to=ball2.x+30;
      line.draw();
    }

  }
  window.requestAnimationFrame(draw);
}
// canvas.addEventListener('mousemove',function(e){
//   if(!running) {
//     clear();
//     ball.x=e.clientX;
//     ball.y=e.clientY;
//     ball.draw();    
//     sense.draw();
//   }
// });
canvas.addEventListener('click',function(e){
  if(!running) {
    running=true;
    sense.draw();
    window.requestAnimationFrame(draw);
  }
});
//setInterval(draw(),10);
//window.requestAnimationFrame(draw)
sense.draw();
ball.draw();
ball2.draw();