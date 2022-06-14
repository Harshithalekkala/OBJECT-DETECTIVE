img="";
object_status="";
objects = [];

function preload() {
   img=loadImage ('dog_cat.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status : detecting objects";



}

function draw() {
  image(img,0,0,640,420);
  if (object_status!="") {
    for (var i=0;i<objects.length;i++) {
      fill('orchid');
      percentage=floor(objects[i].confidence*100);  
  text(objects[i].label+" "+percentage+"%",objects[i].x+15,objects[i].y+15);
  noFill();
  stroke('orchid')
  rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

      
    }
  }
  
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
    objects=results;
  }

}