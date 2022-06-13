img="";
object_status="";

function preload() {
   img=loadImage ('dog_cat.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    doocument.getElementById("status").innerHTML="status : detecting objects";

}

function draw() {
  image(img,0,0,640,420);
  fill('orchid');  
  text("dog",45,75);
  noFill();
  stroke('orchid')
  rect(30,60,450,350);

  fill('orchid');
  text("cat",320,75);
  noFill();
  stroke('orchid');
  rect(300,60,440,340)
}

function modelLoaded() {
  console.log('model Loaded');
  object_status="true";
  objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
  if (error) {
    console.error(error);
  }
  else{
    console.log(results);
  }
}