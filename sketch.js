
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var constrainedLog;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	constrainedLog = new Rope(230,1880,80,PI/2);

	//Create the Bodies Here.
     
	bob1 = new Bob(100,600,135);
	bob2 = new Bob(235,600,135);
	bob3 = new Bob(370,600,135);
	bob4 = new Bob(505,600,135);
	bob5 = new Bob(640,600,135);

	roof = new Roof(400,100,700,50);
	
	
	


	Engine.run(engine);
  
}
var options = {
	bodyA: bob1.body,
	bodyB : constrainedLog.body,
	stiffness: 0.04,
	length: 10
}
var chain = Constraint.create(options);
World.add(world,chain);

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 constrainedLog.display();

 strokeWeight(3);
 line(bob1.body.positon.x,bob2.position.y,constrainedLog.body.position.x,constrained.body.position.y);
 
}



