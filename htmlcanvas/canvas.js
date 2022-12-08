/*
    Michael Jewett
    December 7, 2022
                    */

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c.fillStyle = 'rgba(255, 0, 0, 0.3)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.4)';
// c.fillRect(250, 200, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(400, 300, 100, 100);

// Line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(350, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue";
// c.stroke();

// Arch / Circle

// c.beginPath();
// strokeStyle = "blue";
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();

// for (var i = 0; i < 5; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     const r = parseInt(Math.random() * 255);
//     const g = parseInt(Math.random() * 255);
//     const b = parseInt(Math.random() * 255);
//     const a = Math.random();
//     var col = "rgba(" + r + "," + g + "," + b + "," + a + ")";
//     c.beginPath();
//     c.strokeStyle = col;
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.stroke();
// }

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.radius = radius;

    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);
    const a = Math.random();
    var col = "rgba(" + r + "," + g + "," + b + "," + a + ")";

    this.draw = function() {
        c.beginPath();
        c.strokeStyle = col;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
    }

    this.update = function(){
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.width || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++){
    var radius = Math.random() * 30;
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var circle = new Circle(200, 200, dx, dy, radius);
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){

    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);

    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

}

animate();