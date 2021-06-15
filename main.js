var mouseevent="empty";
var last_position_x,last_position_y;
canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
 color="black";
 width_line= 1;
 canvas.addEventListener("mousedown",my_mousedown);

 function my_mousedown(e){
     color= document.getElementById("color").value;
     width_line=document.getElementById("number_width").value;
     mouseevent="mousedown"
 }

 canvas.addEventListener("mousemove",my_mousemove);

 function my_mousemove(e){
     currentposition_x= e.clientX-canvas.offsetLeft;
     currentposition_y= e.clientY-canvas.offsetTop;

if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= width_line;
    console.log("last position of x and y");
    console.log("x = "+last_position_x+" y = "+last_position_y);
    ctx.moveTo(last_position_x,last_position_y);
    console.log("current position of x and y");
    console.log("x = "+currentposition_x+" y = "+currentposition_y);
    ctx.lineTo(currentposition_x,currentposition_y);
    ctx.stroke();
}

last_position_x=currentposition_x;
last_position_y=currentposition_y;

 }
 
 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
     mouseevent="mouseup";
 }

 canvas.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
     mouseevent="mouseleave";
 }

 function cleararea(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
 }