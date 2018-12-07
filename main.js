function setup() {
    createCanvas(640,480);
}

function draw() {
    background('#FFFAED');
    var x = width/2;
    var y = height/2;
   
    //head
    noStroke();
    fill('orange');
    push();
    translate(x, y);
    rotate(Math.PI / 4);
    ellipse(0 ,0, 130, 250);
    pop(); 
    
    //eyeRight
    fill('#FFFFFF');
    ellipse(x+42, y-26, 40, 40);
    
    //eyeLeft
    fill('#FFFFFF');
    ellipse(x, y-26, 40, 40);
    
    //pupilRight
    fill('#7FC35E');
    ellipse(x+42, y-26, 20 , 20);
    
    //pupilLeft
    fill('#7FC35E');
    ellipse(x, y-26, 20 ,20);
    
    //tongue
    fill('#EE3E36');
    arc(x+ -60, y+60, 40, 70, 0, PI+QUARTER_PI, CHORD);
    
    //earLeft
    fill('#ffcc00');
    push();
    translate(x+50, y-90);
    rotate(Math.PI / 10);
    ellipse(0 ,0, 30, 70);
    pop(); 
    
    //earLeft
    fill('#ffcc00');
    push();
    translate(x+80, y-90);
    rotate(Math.PI / 10);
    ellipse(0 ,0, 30, 70);
    pop(); 
    
    //spot1
    fill('brown');
    ellipse(x, y-65, 20 , 20);
    
    //spot2
    fill('brown');
    ellipse(x+15, y+20, 20 , 20);
    
    //spot3
    fill('brown');
    ellipse(x-20, y+30, 20 , 20);
    
    //spot4
    fill('brown');
    ellipse(x+30, y, 20 , 20);
    
    //spot5
    fill('brown');
    ellipse(x-50, y-24, 20 , 20);
    
    //spot6
    fill('brown');
    ellipse(x+72, y-35, 20 , 20);
}