
//Hola buenas noches maestra, aqupi está mi código terminado, lo realicé
//como venía en las instrucciones y no me daba el resultado esperado, así que lo modifiqué un poco
//no estaba planeado eso jeje, si quiere detener al gato solo presione la tecla UP de su teclado
//(esa instruccion no la puse yo, solo me di cuenta de eso al ejecutar el código)
var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png"); 

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2);
    { 
      //Cambia la animaciòn cuando los personajes se toquen

      tom.velocityX = 0;
      tom.addAnimation("tomHappy", tomImg3);
      tom.changeAnimation("tomHappy");
      //tom.x = 300;
      tom.scale = 0.2;

      jerry.velocityX = 0;
      jerry.addAnimation("jerryHappy", jerryImg3);
      jerry.changeAnimation("jerryHappy");
      //jerry.x = 200;
      jerry.scale = 0.15;
    } 
    keyPressed();
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -15; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}