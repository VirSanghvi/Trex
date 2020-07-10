var trex, trex_running, trex_collided;

var ground, invisibleGround, groundImage;

var cloudsGroup,cloudImage

var obstaclesGroup,obstaclerandom1,obstaclerandom2,obstaclerandom3,obstaclerandom4,obstaclerandom5,obstaclerandom6

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  cloudImage=loadImage("cloud.png")
  
  obstaclerandom1=loadImage("obstacle1.png")
  obstaclerandom2=loadImage("obstacle2.png")
  obstaclerandom3=loadImage("obstacle3.png")
  obstaclerandom4=loadImage("obstacle4.png")
  obstaclerandom5=loadImage("obstacle5.png")
  obstaclerandom6=loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudGroup= new Group() 
  
  obstacleGroup= new Group()
  
}

function draw() {
  background(180);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
 // spawn cloud
  spawncloud();
  
  drawSprites();
}

function spawncloud () {
  if (frameCount % 60===0) {
    var cloud= createSprite(400,165,40,10);
    cloud.y= Math.round(random(80,120));
   cloud.addImage(cloudImage);
    cloud.scale=0.5;
    cloud.velocityX=-3;
    
//assign lifetime to the variable
 cloud.lifetime=134;
    
//adujst cloud depth
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
    
    cloudGroup.add(cloud);
  }
}     