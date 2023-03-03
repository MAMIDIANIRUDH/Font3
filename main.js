noseX=0;
noseY=0;
difference = 0;
rightWristX= 0;
leftWristX= 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(700, 700);
    
    canvas = createCanvas(1000, 700);
    canvas.position(800,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    }
    
    function modelLoaded(){
        console.log('PoseNet Is Initialized!');
    }
    
    
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = " + noseX +" noseY = " + noseY);
     
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
     
            console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
        }
    }

    function draw() {
        background('black');
        fill ('white');
        stroke('lightgreen');
        textSize(difference);
        text("Anirudh",50,400);
    }