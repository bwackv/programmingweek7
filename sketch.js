//create an empty array
//how does the constructor function work with preloading?  can't use 'i'?
let infCanvas = [];

function preload(){
  infCanvas[0] = loadImage('/infinite_row2-3.jpg');
  infCanvas[1] = loadImage('/infinite_row4-5.jpg');
  infCanvas[2] = loadImage('/infinite_row6-7.jpg');
}
function setup() {
  createCanvas(windowWidth,4000);
console.log('hello');
}

function draw() {
  background(150);
  for (let i = 0; i < infCanvas.length; i++){
    let x = i*300;
    let y = i * 100;
    infCanvas[i] = new infCanvas(x,y);
    image(infCanvas[i],i*300,100,300,100);
    }
}

class infCanvas {
  constructor(photo,x,y){
    this.photo = infCanvas[i];
    this.width = 300;
    this.height = 100;
  }
}



// function rows(photo,x,y){
//   this.photo =
// }

//look up schiffman 6.3 constructor function
//first homework: get these images stacked like they are
//on the infcanvas
//make a class called infCanvas that gives some properties

// class infCanvas {
//   constructor(photo,x,y){
//     this.photo = infCanvas[0];
//     this.width = 300;
//     this.height = 100;
//   }
//
// //for every new tile, stack it 100 pix above the last
//   move(){
//     this.x = this.x;
//     this.y = this.y * 100;
//   }
// }
