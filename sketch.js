
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxL,boxR,boxB;
var boxLB,boxRB,boxBB;
var paper,ground;
var dustbinImg,paperImg;
function preload()
{
 dustbinImg=loadImage("dustbingreen.png");
 	
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);

	/*boxL=createSprite(width/2-45+200, 440, 10,75);
    boxL.shapeColor="red";

	boxR=createSprite(width/2+45+200, 440, 10,75);
    boxR.shapeColor="red";
	
	boxB=createSprite(width/2+200, 475, 95,10);
    boxB.shapeColor="red";*/
	
	engine = Engine.create();
	world = engine.world;


	boxLB = Bodies.rectangle(width/2-45+200 , 440 , 10 ,75, { isStatic:true});
    World.add(world, boxLB);
 
    boxRB = Bodies.rectangle(width/2+45+200 , 440 , 10 ,75, { isStatic:true});
    World.add(world, boxRB);

    boxBB = Bodies.rectangle(width/2+200 , 475 ,95 ,10, {isStatic:true});
    World.add(world, boxBB);

    paper=new Paper(100,100,40);

    ground=new Ground(400,490,800,20);

   
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  imageMode(CENTER);
  image(dustbinImg,width/2+200 , 425 ,95 ,100) 
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:48,y:-48})
	}
}


