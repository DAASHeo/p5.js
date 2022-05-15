var brush;
var r;
var g;
var b;
var radius;
let eraser;
let download; 
let button;

function preload(){
  eraser = loadImage('eraser4.jpg') 
  download = loadImage('save.jpg')
}


function setup() {
  createCanvas(640, 640);
  brush = 1;
  r = 0;
  g = 0;
  b = 0 ;
  createP();
  slider = createSlider(1,50,25);
  slider.position(490,95);
  reset = createButton("-  -Erase All- -");
  reset.mousePressed(changeBG);
  reset.position(229.5,10);
  
}

function changeBG() {
  background(251,251,251);
}

function draw() { 
 radius = slider.value();
  
  
  noStroke();
  fill(245,246,247)
  rect(0,0,640,160);
  textSize(32);
  fill(0, 0, 0);
  text('size', 420, 115);
  {textSize(40);
  fill(255, 0, 0);
  text('D', 10, 80);
  textSize(40);
  fill(255, 128, 0);
  text('R', 40, 80);
  textSize(40);
  fill(255, 255, 0);
  text('A', 70, 80);
  textSize(40);
  fill(0, 128, 0);
  text('W', 100, 80);
  textSize(40);
  fill(0, 128, 192);
  text('I', 142, 80);
  textSize(40);
  fill(0, 0, 128);
  text('N', 155, 80);
  textSize(40);
  fill(64, 0, 128);
  text('G', 185, 80);
  textSize(40);
  fill(0, 0, 0);
  text('BOARD', 50, 130);}
  
  
  strokeWeight(0.5);
  stroke(1);
  fill(163,73,164);
  rect(610, 10, 20,20);
  fill(63,72,204);
  rect(580, 10, 20,20);
  fill(0,162,232);
  rect(550, 10, 20,20);
  fill(34,177,76);
  rect(520, 10, 20,20);
  fill(255,242,0);
  rect(490, 10, 20,20);
  fill(255,127,39);
  rect(460, 10, 20,20);
  fill(237,28,36);
  rect(430, 10, 20,20);
  fill(136,0,21);
  rect(400, 10, 20,20);
  fill(127,127,127);
  rect(370, 10, 20,20);
  fill(0,0,0);
  rect(340, 10, 20,20);
  fill(200,191,231);
  rect(610, 40, 20,20);
  fill(112,146,190);
  rect(580, 40, 20,20);
  fill(153,217,234);
  rect(550, 40, 20,20);
  fill(181,230,29);
  rect(520, 40, 20,20);
  fill(239,228,176);
  rect(490, 40, 20,20);
  fill(255,201,14);
  rect(460, 40, 20,20);
  fill(255,174,201);
  rect(430, 40, 20,20);
  fill(185,122,87);
  rect(400, 40, 20,20);
  fill(195,195,195);
  rect(370, 40, 20,20);
  fill(255,255,255);
  rect(340, 40, 20,20);
  
  
  rect(340, 85, 50, 50);
  image(eraser, 340, 85, 50, 50);
  rect(230, 40, 95, 95); 
  image(download, 230, 40, 95, 95);

  
    if(mouseIsPressed){
      
    if(mouseX > 340 && mouseX < 360){
      if(mouseY > 10 && mouseY < 30){
        r = 0;
        g = 0;
        b = 0;
      }
    }
    
    if(mouseX > 610 && mouseX < 630 ){
      if(mouseY > 10 && mouseY < 30){
       r = 163;
        g = 73;
        b =164;
      }
    }
 
if(mouseX > 580 && mouseX < 600 ){
      if(mouseY > 10 && mouseY < 30){
       r = 63;
        g = 72;
        b = 204;
      }
    } 

if(mouseX > 550 && mouseX < 570){
      if(mouseY > 10 && mouseY < 30){
       r = 0;
        g = 162;
        b =232;
      }
    }

 if(mouseX > 520  && mouseX < 540){
      if(mouseY > 10 && mouseY < 30){
       r = 34;
        g = 177;
        b = 76;
      }
    } 

if(mouseX > 490 && mouseX < 510){
      if(mouseY > 10 && mouseY < 30){
       r = 255;
        g = 242;
        b =0;
      }
    }

 if(mouseX > 460  && mouseX < 480){
      if(mouseY > 10 && mouseY < 30){
       r = 255;
        g = 127;
        b =39;
      }
    }

if(mouseX > 430 && mouseX < 450){
      if(mouseY > 10 && mouseY < 30){
       r = 237;
        g = 28;
        b =36;
      }
    }

 if(mouseX > 400 && mouseX < 420){
      if(mouseY > 10 && mouseY < 30){
       r = 136;
        g = 0;
        b =21;
      }
    }

if(mouseX > 370 && mouseX < 390){
      if(mouseY > 10 && mouseY < 30){
       r = 127;
        g = 127;
        b =127;
      }
    }

    
   if(mouseX > 610 && mouseX < 630){
      if(mouseY > 40 && mouseY < 60){
        r = 200;
        g = 191;
        b = 231;
      }
    }

if(mouseX > 580 && mouseX < 600){
      if(mouseY > 40 && mouseY < 60){
        r = 112;
        g = 146;
        b = 190;
      }
    }

if(mouseX > 550 && mouseX < 570 ){
      if(mouseY > 40 && mouseY < 60){
        r = 153;
        g = 217;
        b = 234;
      }
    }

if(mouseX > 520 && mouseX < 540 ){
      if(mouseY > 40 && mouseY < 60){
        r = 181;
        g = 230;
        b = 29;
      }
    }

if(mouseX > 490 && mouseX < 510 ){
      if(mouseY > 40 && mouseY < 60){
        r = 239;
        g = 228;
        b = 176;
      }
    }

if(mouseX > 460 && mouseX < 480 ){
      if(mouseY > 40 && mouseY < 60){
        r = 255;
        g = 201;
        b = 14;
      }
    }
if(mouseX > 430 && mouseX < 450 ){
      if(mouseY > 40 && mouseY < 60){
        r = 255;
        g = 174;
        b = 201;
      }
    }

if(mouseX > 400 && mouseX < 420 ){
      if(mouseY > 40 && mouseY < 60){
        r = 185;
        g = 122;
        b = 87;
      }
    }

if(mouseX > 370 && mouseX < 390 ){
      if(mouseY > 40 && mouseY < 60){
        r = 195;
        g = 195;
        b = 195;
      }
    }
if(mouseX > 340 && mouseX < 360){
      if(mouseY > 40 && mouseY < 60){
        r = 255;
        g = 255;
        b = 255;
      }
    }
    
    if(mouseX > 340 && mouseX < 395){
      if(mouseY > 85 && mouseY < 140){
       r = 251;
        g = 251;
        b = 251;
      }
    }
      strokeWeight(slider.value());
      stroke(r, g, b);
      line(pmouseX, pmouseY, mouseX, mouseY);
}
    
}

function mousePressed() {
  if(mouseX > 230 && mouseX < 330){
      if(mouseY > 40 && mouseY < 150){
        var img;
        img = get(0,160,640,480);
        save(img, '내가그린그림.png');
      }
    }
}