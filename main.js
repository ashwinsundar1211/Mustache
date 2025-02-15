noseX = 0;
noseY = 0

function preload()
{
  mustache = loadImage('https://i.postimg.cc/RhDxPXq5/Mustache.png');
}

function setup()
{
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(mustache, noseX - 15, noseY, 30, 30)
}

function take_snapshot()
{
  save('mustache.png');
}

function modelLoaded()
{
  console.log('posenet is initialized')
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
  }
}