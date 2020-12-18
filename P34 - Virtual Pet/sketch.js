//Create variables here
var dog, happyDog, database, foodS, foodStock,
dogImg, happyDogImg;

 function preload()
 {
  //load images here
  happyDogImg = loadImage("images/dog2.png")
  dogImg = loadImage("images/Dog1.png");
  }

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
 }


function draw() { 
  background(46, 139, 87);
  dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogImg) 

   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(happyDogImg)
   }
   
  drawSprites();
  textSize(20);
  fill("white");
  text("Press the up arrow key to feed Cooper milk!🐶🥛", 35, 20);
  textSize(15)
  fill("white")
  text("food remaining: " + foodS, 50, 40);
  
  //add styles here

  }

  function readStock(data){
    foodS = data.val();
  }

  function writeStock(x){

    if(x <= 0){
      x = 0
    }
    else{
      x = x - 1;
    }
    database.ref("/").update({
      Food:x
    })
  }
