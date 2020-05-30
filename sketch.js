let r, g, b,rrr = 0

let angle = -30, angleChange = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r, g, b);
  fill(225 - r, 255 - g, 255 - b);
  push(); // левое ухо
    translate(width/2,height/2); // для уха центр будет правее и выше, чем у головы, на 30
    rotate(radians(angle)); // поворачиваем вокруг 0,0 на 30 градусов, смотри в конце draw
 
    ellipse(10,0,500,20);
    rotate(radians(angle+1));
  ellipse(10,0,500,20);
   rotate(radians(angle+2));
  ellipse(10,0,500,20);
   rotate(radians(angle+3));
  ellipse(10,0,500,20);
   rotate(radians(angle+4));
  ellipse(10,0,500,20);
   rotate(radians(angle+5));
  ellipse(10,0,500,20);
   ellipse(10,0,500,20);
    rotate(radians(angle+6));
  ellipse(10,0,500,20);
   rotate(radians(angle+7));
  ellipse(10,0,500,20);
   rotate(radians(angle+8));
  ellipse(10,0,500,20);
   rotate(radians(angle+9));
  ellipse(10,0,500,20);
   rotate(radians(angle+10));
  ellipse(10,0,500,20);

  
  angle = angle + angleChange; // увеличиваем или уменьшаем 


  
}

function make() {
  r = etovVodr.value
  g = etovVodg.value
  b =etovVodb.value
  
  spee()
  
}
function randomi() {
 etovVodr.value = round(random(0,255))
  etovVodg.value = round (random(0,255))
  etovVodb.value = round (random(0,255))
  make ();
}
  function rr() {
 etovVodr.value = 255
   etovVodg.value = 0
    etovVodb.value = 0
  make ();
  }
  function gg() {
 etovVodr.value = 0
  etovVodg.value = 255
  etovVodb.value = 0
  make ();
  }
  function bb() {
 etovVodr.value = 0
   etovVodg.value = 0
  etovVodb.value = 255
  make ();
  
  
}
function spee() {
 angleChange =  +etovVodspeed.value/10
  
  
  
}




























































