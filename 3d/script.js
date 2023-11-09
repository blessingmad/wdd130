const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
// make a 2D object

const ctx = canvas.getContent("2d");

//color background of canvas black
ctx.fillStyle = "rgb(255, 0, 0";
ctx.fillRect(50, 50, 100, 150);


// draw another object

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect = (75, 75, 100, 100);
