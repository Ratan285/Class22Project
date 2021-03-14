var starImg, fairyImg, bgImg;
var fairy , fairyVoice,fairyBody,fairyOptions;
var edges;
var star, starBody,starBodyOptions;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBodyOptions={
		restitution:0.5,
	    isStatic:true
	}

	starBody = Bodies.circle(star.position.x , star.position.y ,starBodyOptions);
	World.add(world, starBody);

   /* fairyOptions={
		isStatic=true
	}*/
	fairyBody = Bodies.rect(fairy.position.x,fairy.position.y,20,20);

	
	
	Engine.run(engine);

	

}


function draw() {
	
	Engine.update(engine);
		
	background(bgImg);

	keyPressed();

	drawSprites();

}

function keyPressed() {
	if(keyDown(LEFT_ARROW)){
		fairy.x=fairy.x-4;
	}
	if(keyDown(RIGHT_ARROW)){
	  fairy.x=fairy.x+4;
  }
   if (keyDown(DOWN_ARROW)){
	   star.velocityY = +8;
   }
	
}
