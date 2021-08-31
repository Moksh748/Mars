canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
image_canvas=["nasa2.jpg","nasa3.jpg","mars.jpg"];
rover_image="rover.png";
random_number=Math.floor(Math.random()*3);
console.log(random_number);
console.log(image_canvas[random_number]);
function add(){
     image= new Image();
    image.src=image_canvas[random_number];
    image.onload=uploadimage;
     rover=new Image();
    rover.src=rover_image;
    rover.onload= uploadrover;
}
function uploadimage(){
    ctx.drawImage(image,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    ascii=e.keyCode
    console.log(ascii);
if (ascii == 40){
    down()
    console.log("down key pressed");
}
if (ascii == 39){
    right()
    console.log("right key pressed");
}
if ( ascii == 37){
    left()
    console.log("left key pressed");
}
if ( ascii == 38){
    up()
    console.log("up key pressed");
}
}
function up(){
    if (rover_y>=0){
        rover_y = rover_y-10;
        console.log("Up arrow pressed" + "X|" + rover_x + "Y|" +rover_y);
        uploadimage();
        uploadrover();
    }
}
function down(){
    if (rover_y<=(canvas.height-rover_height)){
        rover_y=rover_y+10
        console.log("Down arrow pressed" + "X|" + rover_x +"Y|"+rover_y);
        uploadimage();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x = rover_x-10;
        console.log("Left key pressed"+ "X|" + rover_x +"Y|" + rover_y);
        uploadimage();
        uploadrover();
    }
}
function right(){
    if(rover_x<=(canvas.width-rover_width)){
        rover_x = rover_x+10;
        console.log("Right key pressed"+ "X| " + rover_x +"Y| " + rover_y);
        uploadimage();
        uploadrover();
    }
}