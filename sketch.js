var road1,road2,road3,road4
var car1;
var collider1;

function setup(){
    canvas =createCanvas(displayWidth,displayHeight);
    road1 = createSprite(displayWidth/2,displayHeight-100,1000,1000)
    road2 = createSprite(displayWidth+480,displayHeight-800,3000,500)
    road3 = createSprite(displayWidth+800,displayHeight-480,500,3000)
    road4 = createSprite(displayWidth-700,displayHeight-2100,500,3000)
    road5 = createSprite(displayWidth-1500,displayHeight-2000,2000,400)
    road6 = createSprite(displayWidth+50,displayHeight-3000,2000,400)
    road7 = createSprite(displayWidth-1,displayHeight-2500,500,1000)
    road8 = createSprite(displayWidth+800,displayHeight-3500,500,1000)

    collider1 = createSprite(30,displayHeight-325,30,1450)
    collider2 = createSprite(60,displayHeight-1055,85,30)
    collider3 = createSprite(90,displayHeight-1435,30,730)
    collider4 = createSprite(-688,displayHeight-1785,1530,30)
    collider5 = createSprite(-675,displayHeight-2210,1550,30)
    collider6 = createSprite(-1450,displayHeight-1997,30,455)
    collider7 = createSprite(90,displayHeight-2910,30,1380)
    collider8 = createSprite(90,displayHeight-2910,30,1380)
    collider9 = createSprite(340,displayHeight-3600,530,30)
    collider10 = createSprite(600,displayHeight-3410,30,420)
    collider11 = createSprite(600,displayHeight-1925,30,1750)
    collider12 = createSprite(1110,displayHeight-1060,990,30)
    collider13 = createSprite(1600,displayHeight-1520,30,930)
    collider14 = createSprite(1100,displayHeight-3203,1000,30)
    collider15 = createSprite(90,displayHeight-2910,30,1380)
    collider16 = createSprite(700,displayHeight-2800,200,30)
    collider17 = createSprite(800,displayHeight-2400,30,800)
    collider18 = createSprite(1050,displayHeight-2000,500,30)
    collider19 = createSprite(1300,displayHeight-2400,30,800)
    collider20 = createSprite(1700,displayHeight-2800,800,30)
    collider21 = createSprite(2100,displayHeight-3390,30,1210)
    collider22 = createSprite(1850,displayHeight-4000,500,30)
    collider23 = createSprite(1600,displayHeight-3600,30,800)
    collider24 = createSprite(1020,displayHeight-75,30,950)
    collider25 = createSprite(1320,displayHeight-550,560,30)
    collider26 = createSprite(1600,displayHeight+240,30,1550)
    collider27 = createSprite(525,displayHeight+400,1000,30)
    collider28 = createSprite(1850,displayHeight+1010,500,30)
    collider29 = createSprite(2100,displayHeight+240,30,1550)
    collider30 = createSprite(2560,displayHeight-550,950,30)
    collider31 = createSprite(2100,displayHeight+240,30,1550)

   collider1.shapeColor = "white" 
   collider2.shapeColor = "white"
   collider3.shapeColor = "white"
   collider4.shapeColor = "white"
   collider5.shapeColor = "white"
   collider6.shapeColor = "white"
   collider7.shapeColor = "white"
   collider8.shapeColor = "white"
   collider9.shapeColor = "white"
   collider10.shapeColor = "white"
   collider11.shapeColor = "white"
   collider12.shapeColor = "white"
   collider13.shapeColor = "white"
   collider14.shapeColor = "white"
   collider15.shapeColor = "white"
   collider16.shapeColor = "white"
   collider17.shapeColor = "white"
   collider17.shapeColor = "white"
   collider18.shapeColor = "white"
   collider19.shapeColor = "white"
   collider20.shapeColor = "white"
   collider21.shapeColor = "white"
   collider22.shapeColor = "white"
   collider23.shapeColor = "white"
   collider24.shapeColor = "white"
   collider25.shapeColor = "white"
   collider26.shapeColor = "white"
   collider27.shapeColor = "white"
   collider28.shapeColor = "white"
   collider29.shapeColor = "white"
   collider30.shapeColor = "white"
   collider31.shapeColor = "green"

   road2.shapeColor = "yellow"
   road3.shapeColor = "yellow"
   road4.shapeColor = "yellow"
   road5.shapeColor = "yellow"  
   road6.shapeColor = "yellow"
   road7.shapeColor = "yellow"
   road8.shapeColor = "yellow"

    car1 = createSprite(displayWidth/2,displayHeight-300,50,50)
    car1.shapeColor = "red"
}

function draw(){
//     var rand = Math.round(random(1,10));
//    switch(rand){
//     case 1:background("white");
//     break;
//     case 2:background("black");
//     break;
//     case 3:background("brown");
//     break;
//     case 4:background("pink");
//     break;
//     case 5:background("orange");
//     break;
//     case 6:background("blue");
//     break;
//     case 7:background("turquoise");
//     break;
//     case 8:background("green");
//     break;
//     case 9:background("magenta");
//     break;
//     case 10:background("purple");
//     break;
//     default:break;
//     }
    
    background(0);
    camera.position.x=car1.x
    camera.position.y=car1.y
    if(keyDown("Up_Arrow")){
        car1.y-=50
    }
        if(keyDown("Down_Arrow")){
            car1.y+=50
    }
    if(keyDown("left_Arrow")){
        car1.x-=30
    }
        if(keyDown("right_Arrow")){
            car1.x+=30
    }
car1.collide(collider1);
fill("white")
    text(mouseX+ "," +mouseY,mouseX,mouseY)
    drawSprites()
    
}