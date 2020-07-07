
var ball;

var database, position;

function setup(){
    createCanvas(500,500)

    ball=createSprite(200,200,10,10);
ball.shapeColor="red";

//we're storing the database from the firebase database into a variable
    database=firebase.database();
//ON --> to read data from the database
//ref is to refer the location of the child in the databse, f
var posnode = database.ref("ball/position")
//from this pos i want to continously listen to the position of the child
posnode.on("value",readOp,showerr)


}

function draw(){
    background("white")
    if(keyDown(LEFT_ARROW)){
       writePosition(-1,0)
    }
    if(keyDown(RIGHT_ARROW)){
        writePosition(1,0)
     }
     if(keyDown(DOWN_ARROW)){
        writePosition(0,1)
     }
     if(keyDown(UP_ARROW)){
        writePosition(0,-1)
     }
drawSprites();
}

function writePosition(x,y){
    //again to write data nto the database , 
    //we have to refer to the position of node in databse
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    }) // at the location i want to SET multiple values
 
}

function readOp(data){
    // Now to read data from database, 
    //create a variable to store data im reading from the databse into our system
//data is the data im getting from database
    position = data.val();
    ball.x=position.x;//whatever x value im reading from the datbase which is stored in position variable
    ball.y = position.y
}

function showerr(){

console.log("err")
}