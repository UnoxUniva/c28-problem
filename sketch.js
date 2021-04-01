
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var sling
var mango1,mango2,mango3,mango4
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(1100,200,30);
	mango4=new mango(1000,250,30);
	stoneObj=new stone(200,430,10,width/2)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	sling=new Sling(stoneObj.body,{x:200 , y:340})
	Engine.run(engine);
	
	

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

detectCollision(stoneObj,mango1)
 detectCollision(stoneObj,mango2)
 detectCollision(stoneObj,mango3)
 detectCollision(stoneObj,mango4)

  	treeObj.display();
  	mango1.display();
	mango2.display();
    mango3.display();
    mango4.display();
  	groundObject.display();
	sling.display()
	stoneObj.display()


}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

 function detectCollision(stoneObject,mango){
 	mangoBodyPosition = mango.body.position
 	StoneBodyPosition = stoneObject.body.position

 	var distance = dist(StoneBodyPosition.x,StoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 	if(distance<=mango.r+stoneObject.r){
 		Matter.Body.sterStatic(mango.body,false)
 	}
	 console.log()

 }
 function keyPressed(){
 	if (keyCode === 32){
 		Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
 		sling.attach(stoneObj.body)
 	}
 }