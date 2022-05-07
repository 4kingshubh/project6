var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["61bce74d-255b-45c9-9037-fae68ca8a010","3c376797-bd84-4d9d-8450-e581dd8f50df"],"propsByKey":{"61bce74d-255b-45c9-9037-fae68ca8a010":{"name":"rpgcharacter_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1/category_fantasy/rpgcharacter_10.png","frameSize":{"x":264,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1/category_fantasy/rpgcharacter_10.png"},"3c376797-bd84-4d9d-8450-e581dd8f50df":{"name":"alienBlue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yoXBG2L287khtgsZxziHgV12eUhQwZRS/category_fantasy/alienBlue.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"yoXBG2L287khtgsZxziHgV12eUhQwZRS","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yoXBG2L287khtgsZxziHgV12eUhQwZRS/category_fantasy/alienBlue.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating platforms
var platform1= createSprite(50,200,100,200);
platform1.shapeColor="lightgreen";

var platform2=createSprite(350,200,100,200);
platform2.shapeColor="yellow";

//creating borders
var border1 =createSprite(200,100,400,10);

var border2 =createSprite(200,300,400,10);

//creating player
var sam =createSprite(50,200,20,20);
sam.shapeColor="green";
sam.setAnimation("rpgcharacter_10_1");
sam.scale=0.1;

//creating cars

var car1 = createSprite(125,125,20,20);
car1.shapeColor="red"

var car2 = createSprite(175,275,20,20);
car2.shapeColor="red"

var car3 = createSprite(225,125,20,20);
car3.shapeColor="red"

var car4 = createSprite(275,275,20,20);
car4.shapeColor="red"

car1.setAnimation("alienBlue_1");
car1.scale=0.5;

car2.setAnimation("alienBlue_1");
car2.scale=0.5;

car3.setAnimation("alienBlue_1");
car3.scale=0.5;

car4.setAnimation("alienBlue_1");
car4.scale=0.5;

//apllying velocity
car1.velocityY=8;
car2.velocityY=-8;
car3.velocityY=8;
car4.velocityY=-8

var score=0;

function draw() {
  background("white");
  textSize(20)
  fill("red")
 text("accidents-"+score,250,50)
  
createEdgeSprites(border1);

//making the cars bounce off
car1.bounceOff(border1);
car1.bounceOff(border2);

car2.bounceOff(border1);
car2.bounceOff(border2); 

car3.bounceOff(border1);
car3.bounceOff(border2); 

car4.bounceOff(border1);
car4.bounceOff(border2);

//making player to move  with left arrow and right arrow
if (keyDown("LEFT_ARROW")) {
  sam.x=sam.x-3;
}

if (keyDown("RIGHT_ARROW")) {
  sam.x=sam.x+3;
}

//bring back sam to original position while touching car
if (sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4))

{
  sam.x=50;
sam.y=200;
score=score+1;
}

if (sam.isTouching(platform2)) {
  textSize(50);
  fill("red");
  text("you win",200,200);
}

  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
