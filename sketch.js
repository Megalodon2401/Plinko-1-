const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var division = [];
var plinko = [];
var divisionHeight = 200;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (width/2,height,width,20);

  //for creating elements in the division array
  for(var i=0; i<=width; i=i+80){
    division.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  for(var i=75; i<=width; i=i+50){

    plinko.push(new Plinko(i,75));
    console.log(i);
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  ground.display();


  for(var i=0; i <=plinko.length; i = i+1 ){
      plinko[i].display();
  }
  console.log("Plinko is fine");
  //for displaying arry elements
  for(var k=0; k<=division.length; k =k+1){
    division[k].display();
  }

  console.log("Division is fine");

}