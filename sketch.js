function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50); 
  angleMode(DEGREES); 
}

function draw() {
  background(0);  
  fill(255); 
  noStroke(); 
  textSize(50); 
  text("TIME", 500,150);  
  textSize(35);
  text("is what we want MOST", 400,250); 
  text("but what we use WORST", 380,300);
  

  translate(200,200);
  rotate(-90); 


  let hr= hour();  
  let min=minute(); 
  let sec=second();  

  strokeWeight(8); 
  noFill();
  stroke(255,255,255);  
  let secAngle= map(sec,0,60,0,360);
  arc(0,0, 300,300, 0, secAngle);  

  stroke(10,200,200);  
  let minAngle= map(min,0,60,0,360);
  arc(0,0, 280,280, 0, minAngle); 
 
  stroke(10,200,10);  
  let hrAngle= map(hr%12, 0, 12,0,360);
  arc(0,0, 260,260, 0, hrAngle); 
 
  push(); 
  rotate(secAngle);
  stroke(255,255,255);  
  line(0,0,100,0); 
  pop();
  
  push(); 
  rotate(minAngle);
  stroke(10,200,200);  
  line(0,0,75,0); 
  pop();
  
  push(); 
  rotate(hrAngle);
  stroke(10,200,10);  
  line(0,0,50,0); 
  pop(); 

  stroke(255); 
  point(0,0);
  

  
  //drawSprites();
}