const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, width, height);

const rect = canvas.getBoundingClientRect();
var prevx ;
var prevy ;
var x;
var y;

var pressed = false;
function draw(event){


    if(pressed === true){
        
x = event.offsetX;
y = event.offsetY;
ctx.lineWidth = document.getElementById('brush-size').value;
ctx.beginPath();
ctx.strokeStyle = document.getElementById('brush-color').value;
ctx.moveTo(prevx, prevy);
ctx.lineTo(x, y);
 ctx.lineCap = 'round';
ctx.stroke();
prevx = x;
prevy = y;
}
}
canvas.addEventListener('mousemove', draw);


canvas.addEventListener('mousedown', (event)=>{
    pressed = true;
    prevx = event.offsetX;
    prevy = event.offsetY;
     draw();


})

canvas.addEventListener('mouseup', (event)=>{
pressed = false;
prevx = null;
prevy = null;
})


function clearFunc(){
    ctx.clearRect(0, 0, width, height)
}

function downloadImage(){
    let link = canvas.toDataURL();
    let a = document.createElement('a')
    a.href = link;
    a.download = 'mydrawing.jpeg';
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a);
    console.log(a.href); // Check what URL it's trying to download
}