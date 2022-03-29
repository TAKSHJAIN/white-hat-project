var denny,Dennyimg,shootingdennyimg
var sky,Ground,skyimg,groundimg


function preload(){
 groundimg=loadImage("ground.png")
}

function setup() {
 createCanvas(600,600);
 Ground=createSprite(300,300,100,100)
 Ground.addImage( "Ground",groundimg)
 Ground.scale=0.3


}

function draw() {

 
 
 drawSprite();
}