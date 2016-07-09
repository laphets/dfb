function Star(context,s,dx,dy){
    context.save();
    context.beginPath();
    context.fillStyle='rgb(255,255,255)';
    var cur=Math.PI/5*4;
    for(var i=0;i<5;i++){
        var x=Math.sin(i*cur);
        var y=Math.cos(i*cur);
        context.lineTo(dx+x*s,dy+y*s);
    }
    context.fill();
    context.closePath();
    context.restore();
}
function Move(context){
    context.clearRect(0,0,400,300);
    var lingrad = context.createLinearGradient(50,50,100,300);
    lingrad.addColorStop(0,'#232256');
    lingrad.addColorStop(1,'#143778');
    context.fillStyle=lingrad;
    context.fillRect(0,0,400,300);  
    Star(context,20,x,y);
    if(mx==0) {
        x+=ml;
        if(x>=cw-w)
            mx=1;
    }
    else {
        x-=ml;
        if(x<=0)
            mx=0;
    }
    if(my==0) {
        y+=ml;
        if(y>=ch-h)
            my=1;
    }
    else {
        y-=ml;
        if(y<=0)
            my=0;
    }
}
window.onload=function() {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext('2d');
    var interal=setInterval(function(){
        Move(context);
    },10);
}
