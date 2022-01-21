var mouseEvent="empty"
canvas=document.getElementById("myCanvas")
context=canvas.getContext("2d")
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color = document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_the_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    current_position_of_mouse_x =e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y =e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        //console.log("Current position of x and y coordinates = ");
        //console.log("x = "+current_position_of_mouse_x+"y = "+ current_position_of_mouse_y)
        
        
        context.beginPath();
        context.moveTo(100,100)
        context.lineTo(100,300)
        context.lineTo(100,100)
        context.closePath()

        context.linewidth=10
        context.strokeStyle= "#666666"
        context.stroke()
 
        context.fillStyle="#FFCC00"
        context.fill()
    }
    
}