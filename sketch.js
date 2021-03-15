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

	starBody = Bodies.circle(650 , 30, 5, starBodyOptions);
	World.add(world, starBody);

     var fairyOptions={
		isStatic : true
	}
	fairyBody = Bodies.rectangle(fairy.position.x,fairy.position.y,20,20,fairyOptions);
    World.add(world,fairyBody);
	
	
	Engine.run(engine);

	

}


function draw() {
	
    background(bgImg);

	star.x = starBody.position.x;
	star.y = starBody.position.y;

	console.log(star.y)

	if(star.y >470 && starBody.position.y>470){
		Matter.Body.setStatic(starBody, true)
	}

    Engine.update(engine);

	drawSprites();

}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
		fairy.x=fairy.x-40;
	}
	if(keyCode==RIGHT_ARROW){
	  fairy.x=fairy.x+40;
  }
   if (keyCode==DOWN_ARROW){
	   Matter.Body.setStatic(starBody, false);
   }
	
}
