
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5, roofObject, 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1= new bob(100,300,40);
	bob2= new bob(150,300,40);
	bob3= new bob(200,300,40);
	bob4= new bob(250,300,40);
	bob5= new bob(300,300,40)

	roofObject= new roof(400,700,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



