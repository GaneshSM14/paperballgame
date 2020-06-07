
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world;
var ground1;
var dustbin1;
var dustbin2;
var dustbin3;
var paper1;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground1=new ground(400,690,800,50);
dustbin1= new dustbin(400,640,100,50);
dustbin2 = new dustbin(350,620,50,100);
dustbin3 = new dustbin(450,620,50,100);
paper1 = new paper(100,100,20);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  drawSprites();
 
}
function keypressed(){
	if(keycode === up_arrow){
		Matter.body.applyForce(paperObject.body,paperobject.body.position,{x:85,y:85});
	}
}



