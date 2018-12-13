var puppy;
var feed = []; // an empty array
var numFood = 10;
var b = 130;
var c = 250;
var d = 0;

var a = [1, 2, 3];

function setup() {
    rectMode(CENTER);
    createCanvas(1024, 768);
    puppy = new Puppy();

    // initializing 10 pieces of food
    for (var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0, 255, 0);
    puppy.display();

    // display all the food
    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    puppy.eat();
    b *= 1.1;
    c *= 1.1;
    d += 1;
}

function Food(x, y) {
    // keyword this
    // makes variables public on the object
    // public instance variables
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;

    this.display = function () {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Puppy() {
    // private instance variables
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;

    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };

    this.eat = function () {
        for (var i = feed.length - 1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
                
            }
        }
    };
    
    
     this.display = function() {

        x = mouseX;
        y = mouseY;
         if(d > 9) {
            b = 130;
            c = 250;
            d = 0; 
         }


        //head
        noStroke();
        fill('orange');
        push();
        translate(x, y);
        rotate(Math.PI / 4);
        ellipse(0 ,0, b, c);
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
    };
}
     