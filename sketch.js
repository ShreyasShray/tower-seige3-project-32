const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var stand1, stand2;

var box1, box2, box3, box4, box5, box6, box7; //for level 0
var box8, box9, box10, box11, box12;  //for level 1
var box13, box14, box15;
var box16;

var rect1, rect2, rect3, rect4, rect5;
var rect6, rect7, rect8;
var rect9;
var slingshot;
var polygon;
var score = 0;

function preload(){

}


function setup(){
    createCanvas(1200, 500);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Stand(400 + 200, 490, 250, 10);
    stand2 = new Stand(700 + 200, 300, 200, 10);
    box1 = new Box(400 + 200, 375 + 90, 30, 40);
    box2 = new Box(370 + 200, 375 + 90, 30, 40);
    box3 = new Box(430 + 200, 375 + 90, 30, 40);
    box4 = new Box(340 + 200, 375 + 90, 30, 40);
    box5 = new Box(460 + 200, 375 + 90, 30, 40);
    box6 = new Box(310 + 200, 375 + 90, 30, 40);
    box7 = new Box(490 + 200, 375 + 90, 30, 40);
    box8 = new Box(400 + 200, 335 + 90, 30, 40);
    box9 = new Box(370 + 200, 335 + 90, 30, 40);
    box10 = new Box(430 + 200, 335 + 90, 30, 40);
    box11 = new Box(340 + 200, 335 + 90, 30, 40);
    box12 = new Box(460 + 200, 335 + 90, 30, 40);
    box13 = new Box(400 + 200, 295 + 90, 30, 40);
    box14 = new Box(370 + 200, 295 + 90, 30, 40);
    box15 = new Box(430 + 200, 295 + 90, 30, 40);
    box16 = new Box(400 + 200, 255 + 90, 30, 40);
    rect1 = new Box(700 + 200, 275, 30, 40);
    rect2 = new Box(670 + 200, 275, 30, 40);
    rect3 = new Box(730 + 200, 275, 30, 40);
    rect4 = new Box(640 + 200, 275, 30, 40);
    rect5 = new Box(760 + 200, 275, 30, 40);
    rect6 = new Box(700 + 200, 235, 30, 40);
    rect7 = new Box(670 + 200, 235, 30, 40);
    rect8 = new Box(730 + 200, 235, 30, 40);
    rect9 = new Box(700 + 200, 195, 30, 40);
    polygon = new Polygon(100 + 200, 380, 18);
    slingshot = new SlingShot(polygon.body, {x: 100 + 200, y: 360});
    Engine.run(engine);

}


function draw(){
    background("#382c2c");
    push();
    noStroke();
    fill("white");
    textSize(20);
    text("Drag the hexagonal stone, and release it towards the blocks", 10, 20);
    text("To try again press 'space'", 100, 50);
    text("Score" + score, 750, 40);
    pop();

    stand1.display();
    stand2.display();

    box1.display("#87CEEA");
    box2.display("#87CEEA");
    box3.display("#87CEEA");
    box4.display("#87CEEA");
    box5.display("#87CEEA");
    box6.display("#87CEEA");
    box7.display("#87CEEA");
    box8.display("#FFC0CB");
    box9.display("#FFC0CB");
    box10.display("#FFC0CB");
    box11.display("#FFC0CB");
    box12.display("#FFC0CB");
    box13.display("#3FE0D0");
    box14.display("#3FE0D0");
    box15.display("#3FE0D0");
    box16.display("#808080");
    rect1.display("#87CEEA");
    rect2.display("#87CEEA");
    rect3.display("#87CEEA");
    rect4.display("#87CEEA");
    rect5.display("#87CEEA");
    rect6.display("#3FE0D0");
    rect7.display("#3FE0D0");
    rect8.display("#3FE0D0");
    rect9.display("#FFC0CB");
    slingshot.display();
    polygon.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 300, y:380});
        slingshot.attach(polygon.body);
    }
}