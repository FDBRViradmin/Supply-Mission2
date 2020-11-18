var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxLeft, boxBase, boxRight
var fakeBlock
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var boxLeft, boxBase, boxRight
var invisibleBase
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	rectMode(CENTER);
	
	boxLeft = new Zone(300, 625, 20, 100);

	boxBase = createSprite(width/2, height-35, width,10);
	boxBase.visible = false;

	fakeBlock = createSprite(400, 680, 800,10);
	fakeBlock.shapeColor = "white";
	boxRight = new Zone(500, 625, 20, 100);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground = createSprite(400, 665, 200, 20);
	ground.shapeColor = "red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 200, 20, {isStatic:true} );
 	World.add(world, ground);

	// boxBase = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} ); 
	// World.add(world, boxBase);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  boxLeft.display();
  boxRight.display();

  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
  drawSprites();
	
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);	
	ellipseMode(RADIUS);
	ellipse(packageBody.position.x,packageBody.position.y,10,10)
 }
}