const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 1200, height, 200);
  ground = new Ground(600, 600, 1200, 20);


  carton1 = new Carton(900, 100, 70, 70);
  carton2 = new Carton(900, 100, 70, 70);
  carton3 = new Carton(900, 100, 70, 70);
  carton4 = new Carton(900, 100, 70, 70);
  carton5 = new Carton(900, 100, 70, 70);
  carton6 = new Carton(900, 100, 70, 70);
  carton7 = new Carton(800, 100, 70, 70);
  carton8 = new Carton(800, 100, 70, 70);
  carton9 = new Carton(800, 100, 70, 70);
  carton10 = new Carton(800, 100, 70, 70);
  carton11 = new Carton(800, 100, 70, 70);
  carton12 = new Carton(800, 100, 70, 70);
  carton13 = new Carton(700, 100, 70, 70);
  carton14 = new Carton(700, 100, 70, 70);
  carton15 = new Carton(700, 100, 70, 70);
  carton16 = new Carton(700, 100, 70, 70);
  carton17 = new Carton(700, 100, 70, 70);
  carton18 = new Carton(700, 100, 70, 70);
  carton19 = new Carton(700, 100, 70, 70);
  carton20 = new Carton(700, 100, 70, 70);

  ball = new Ball(200, 200, 80);

  slingshot = new Slingshot(ball.body, { x: 500, y: 50 });


}

function draw() {
  background(255, 255, 255);

  Engine.update(engine);
  ground.display();
  carton1.display();
  carton2.display();
  carton3.display();
  carton4.display();
  carton5.display();
  carton6.display();
  carton7.display();
  carton8.display();
  carton9.display();
  carton10.display();
  carton11.display();
  carton12.display();
  carton13.display();
  carton14.display();
  carton15.display();
  carton16.display();
  carton17.display();
  carton18.display();
  carton19.display();
  carton20.display();

  ball.display();
  slingshot.display();


  drawSprites();
}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}