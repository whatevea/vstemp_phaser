import { renderBlocks } from "../objects/blocksData.js";
import Score from "../objects/Score.js";
import vars from "./datas.js";
import renderGameObjs from "./objects.js";
export default class PlayScene extends Phaser.Scene
{
constructor(){
super({"key":"PlayScene"})
}
init(data){
    this.data=data;
}

create(){
let objs=renderGameObjs(this);
this.ball=objs[0];
console.log(objs);
console.log(this.ball);
this.redScore= new Score(this,498, 1210,false,this.data.score.red);
this.greenScore= new Score(this,227,64,true,this.data.score.green);
renderBlocks(this,this.data);
setTimeout(() => {
    this.ball.setVelocity(vars.finalBallVelocity);
}, 1200);

}
update(){
if(this.ball.y<0){
    this.redScore.increase()
    this.winHandler("red")
}
else if(this.ball.y>1280){
    this.greenScore.increase()
    this.winHandler("green")
}
}

winHandler(party){
    this.data.score.red=this.redScore.scoreNum;
    this.data.score.green=this.greenScore.scoreNum;
    this.scene.pause()
    this.scene.restart(this.data);
}




}


