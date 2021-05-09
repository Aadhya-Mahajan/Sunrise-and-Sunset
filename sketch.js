const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;
var score = 0;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
  
}

function setup(){
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)


    Engine.update(engine);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour >= 04 && hour <= 06){
    bg = "sunrise1.png"
    }else if(hour >= 06 && hour <= 08){
    bg = "sunrise2.png"
    }else if(hour >= 23 && hour === 0){
    bg = "sunset10.png"
    }else if(hour === 0 && hour <= 03){
    bg = "sunset11.png"
    }else{
    bg = "sunset12.png"
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg)
}
