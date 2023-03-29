import vars from "./datas.js";
import soundPlayer from "./soundPlayer.js";
import TailParticles from "./particles.js";
export default function renderGameObjs(scene){
let paddleOffset=vars.paddleOffset; 
let xDifficulty=vars.xDifficulty; 
let yDifficulty=vars.yDifficulty;
let centerY=scene.cameras.main.centerY;
let centerX=scene.cameras.main.centerX;
let paddle1=scene.physics.add.sprite(360,1280-paddleOffset,"paddle");
let paddle2=scene.physics.add.sprite(360,paddleOffset,"paddle").setFlipY(true);
let ball=scene.physics.add.image(centerX,centerY,"ball").setVelocity(vars.initialBallVelocity).setBounce(vars.ballBounceRate);
ball.setScale(vars.ballScale);
ball.setCircle(ball.width/2);

ball.setCollideWorldBounds(true);
ball.body.setAngularVelocity(100); //rotate ball code
paddle1.body.immovable=true;
paddle2.body.immovable=true;
//initiate partilces 
scene.physics.world.setBoundsCollision(true, true, false, false);

let paddles=scene.add.group();
paddles.addMultiple([paddle1,paddle2]);


scene.physics.add.collider(paddles,ball,function(paddle,ball){
    let radiusDistanceVector=ball.x-paddle.x;
    let radiusDistance=Math.abs(ball.x-paddle.x);

let centerOffsetCheck=(paddle.width/2)*vars.centerHitPercent/100;
//check if collided on center part

if(radiusDistance<=centerOffsetCheck){
//colldided on center
//play animation and sound
    ball.body.setVelocityY(ball.body.velocity.y*yDifficulty);
    paddle.play("bounce");
   soundPlayer(scene,"centerBounce");
}
else{
//colldided on side part
//play diff sound
soundPlayer(scene,"sideBounce");

//set custom velocity 
ball.body.setAngularVelocity(5*radiusDistanceVector); //rotate ball code
ball.setVelocityX(radiusDistanceVector*xDifficulty); //4 is the difficulty rate

}



}


,this);
//drawing center line

const line = new Phaser.Geom.Line(0, centerY, scene.cameras.main.width, centerY);
const graphics = scene.add.graphics({ lineStyle: { width: 4, color: 0xf56b16 } });
graphics.strokeLineShape(line);
graphics.alpha=0.3;
const fillColor = 0xf56b16;
const radius=16;
const arc = scene.add.circle(centerX, centerY, radius, fillColor);
arc.alpha=0.2;



//drag paddle code
paddle1.setInteractive();
paddle2.setInteractive();
scene.input.setDraggable(paddle1);
scene.input.setDraggable(paddle2);
scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
    // Move the paddle along the x-axis only
    gameObject.x = Phaser.Math.Clamp(dragX, gameObject.width / 2, scene.physics.world.bounds.width - gameObject.width / 2);
})

return [ball,paddle1,paddle2]
}
