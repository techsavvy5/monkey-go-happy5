
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstaclesGroup,fruits,obstacles;
  var score=0;
  var survivalTime=0;
  var fruits;

  function preload(){


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");
    
  }



  function setup() {
    createCanvas(600,400);

    monkey=createSprite(70,325,20,20);
    monkey.addAnimation("running", monkey_running);
    monkey.scale=0.1;

    FoodGroup=new Group();
    obstaclesGroup=new Group();

    

    ground=createSprite(400,350,900,10);
  }


  function draw() {
    background("white");
monkey.velocityY = monkey.velocityY + 2;

    if (ground.x < 300) {
      ground.x = ground.x = 400;
    }
    ground.velocityX = -4;
   
    if (keyDown("space") && monkey.y > 200) {
      monkey.velocityY = -12;
    }
    
    if(FoodGroup.isTouching(monkey)){
      score=score+1;
      FoodGroup.destroyEach();
    }
    
    if(obstaclesGroup.isTouching(monkey)){
       monkey.velocityY=0;
      obstaclesGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
      FoodGroup.setLifetimeEach(-1);
      obstaclesGroup.setLifetimeEach(-1);
      score=0;
      survivalTime=0;
}

   
   
    
  spawnfruits();
  spawnobstacles();
      
    monkey.collide(ground);

   drawSprites();
     stroke("red");
    textSize(20);
    fill("red");
    text("Score=" +score,500,50);

    stroke("black");
    textSize(20);
    fill("black");
    survivalTime = Math.ceil(frameCount/frameRate());
    text("SurvivalTime:"+survivalTime,100,50);

  }
function spawnfruits(){
if(frameCount%100===0){
  fruits=createSprite(800,200,10,10);
  fruits.addImage(bananaImage);
  fruits.scale=0.07;
  fruits.velocityX=-5;
  FoodGroup.add(fruits);
}
}

function spawnobstacles(){
if(frameCount%140===0){
  obstacles=createSprite(800,325,10,10);
  obstacles.addImage(obstacleImage);
  obstacles.scale=0.2;
  obstacles.velocityX=-7;
  obstaclesGroup.add(obstacles);
}
}
