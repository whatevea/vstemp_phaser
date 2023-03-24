import vars from "./datas.js";
import soundPlayer from "./soundPlayer.js";
import TailParticles from "./particles.js";
export default function renderGameObjs(scene){
let paddleOffset=vars.paddleOffset; 
let xDifficulty=vars.xDifficulty; 
let yDifficulty=vars.yDifficulty;

let paddle1=scene.physics.add.sprite(360,1280-paddleOffset,"paddle");
let paddle2=scene.physics.add.sprite(360,paddleOffset,"paddle").setFlipY(true);
let ball=scene.physics.add.image(32,41,"ball").setVelocity(vars.initialBallVelocity,50*yDifficulty).setBounce(1).setCircle(vars.ballRadius);
ball.displayWidth =vars.ballRadius * 2;
ball.displayHeight =vars.ballRadius * 2;
console.log(paddle1.height);
ball.setCollideWorldBounds(true);
ball.body.setAngularVelocity(100); //rotate ball code
paddle1.body.immovable=true;
paddle2.body.immovable=true;
//initiate partilces 


scene.physics.world.setBoundsCollision(true, true, false, false);

let paddles=scene.add.group();
paddles.addMultiple([paddle1,paddle2]);


scene.physics.add.collider(paddles,ball,function(paddle,ball){
let radiusDistance=Math.abs(ball.x-paddle.x);
let centerOffset=(paddle.width/2)*vars.centerHitPercent/100;
//check if collided on center part

if(radiusDistance<=centerOffset){
//colldided on center
//play animation and sound
    paddle.play("bounce");
   soundPlayer(scene,"centerSounds");
}
else{
//colldided on side part
//play diff sound

//set custom velocity 
ball.body.setAngularVelocity(6*centerOffset); //rotate ball code
ball.setVelocityX(centerOffset*xDifficulty); //4 is the difficulty rate

}



}


,this);



//drag paddle code
paddle1.setInteractive();
paddle2.setInteractive();
scene.input.setDraggable(paddle1);
scene.input.setDraggable(paddle2);
scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
    // Move the paddle along the x-axis only
    gameObject.x = Phaser.Math.Clamp(dragX, gameObject.width / 2, scene.physics.world.bounds.width - gameObject.width / 2);
})
}
