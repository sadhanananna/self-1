var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/forestbg.png")

//balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(1600,1600)
//background image
bg = createSprite(800,800,1600,1600);
bg.addImage(bgImg);
bg.scale = 0.45

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;




}

function draw() {
  
  background("black");
        
         
        drawSprites();
        
}