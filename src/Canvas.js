
//var canvas = document.querySelector('canvas');
const canvas = document.createElement('canvas');
const view = document.body;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const circleArray = [];

//fill the circleArray
for (let i = 0; i < 100; i++ ) {
    let radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius ;
    let velocityX = (Math.random() - 0.5);
    let velocityY = (Math.random() - 0.5);


    circleArray.push(new Circle(x, y, velocityX, velocityY, radius));
}
animate().then();

function Circle(x,y,velocityX,velocityY, radius) {
    this.x = x;
    this.y = y;
    this.velocityX =  velocityX;
    this.velocityY = velocityY;
    this.radius = radius;
    this.colour = getRandomColor();

    // draw circle
    this.draw = function () {
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI *2, false);
        c.strokeStyle = this.colour;
        c.stroke();
    };

    // update and move circle
    this.update = function () {

        //change velocity if circle hits wall
        if ( this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.velocityX = -this.velocityX
        }

        //change velocity if circle hits wall
        if ( this.y + this.radius > innerHeight || this.y -this.radius < 0) {
            this.velocityY = -this.velocityY;
        }
        this.x +=  this.velocityX;
        this.y +=  this.velocityY;

        this.draw();
    };
}


// loop through circleArray and update each circles and background
async function animate() {
    await requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth,innerHeight);

    for (let i = 0; i < circleArray.length; i++)  {
        circleArray[i].update();
    }

    // refresh the background
    view.style.background= "url(" + canvas.toDataURL() + ")";

}

//let creates random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


