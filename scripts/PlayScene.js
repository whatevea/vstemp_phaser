import { Building, createBuilding } from "./buildings.js";
import data from "./data.js";
import { enableDrag } from "./handlers.js";
import { displayScore,updateScore } from "./score.js";
import { Toast,Button } from "./ui.js";

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({key:"PlayScene"});
    }


    create() {
        this.score=data.initialScore;
        this.lastElem=undefined;
        this.isJumping=false;
        this.pointer = this.input.activePointer;
        this.jumpVelocity = data.playerJumpVelocity;
        const {width,height}=this.scale;
        this.buildingDistance = { min: data.distanceBetweenBuildings.min, max: data.distanceBetweenBuildings.max}
        this.baseSpeed=data.baseSpeed;
        this.bg=this.add.tileSprite(0,0,width,height,"cityTile").setOrigin(0,0);
        const sun= this.add.image(374,131,"sun").setScale(0.7,0.8);
        this.gameStarted=true;
        this.player=this.physics.add.sprite(200,700,"player").play("run");
        this.scoreCounter=displayScore(this);
        this.input.on("pointerdown",()=>{
            if(!this.isJumping && this.player.body.onFloor())

            {
            this.isJumping=true;
            let  jumpTime=0
            this.player.body.setVelocityY(-300)
            this.jumpTimer=this.time.addEvent({
                delay:20,
                callback:()=>{


                        if( this.pointer.isDown  &&jumpTime<=data.maxJumpTime  ){
                            this.player.setVelocityY(-300);

                        }
                        jumpTime++;
                },
                loop:true
            })
            
            }
        },this)
        this.input.on("pointerup",()=>{
            this.jumpTimer.remove();
            this.isJumping=false;
        })        
        this.buildingArray=this.add.group();
        createBuilding(this);
this.brickTile = this.add.tileSprite(0, 996, width, height / 4, "brickTile").setOrigin(0, 0).setDepth(2);

}

update(time,delta){

if(!this.gameStarted){
this.buildingArray.getChildren().forEach(child=>child.setVelocity(0))
this.scoreCounter.remove();

}
    if(this.gameStarted){
    this.bg.tilePositionX+=1*this.baseSpeed;
    this.brickTile.tilePositionX+=4*this.baseSpeed;
           }  
           this.buildingArray.getChildren().forEach((child)=>{

        if (child.x<(-child.displayWidth)){
            child.destroy();
            this.buildingArray.remove(child);
            let newX=this.lastElem.x+this.lastElem.displayWidth+Phaser.Math.Between(this.buildingDistance.min,this.buildingDistance.max);
             new Building(this, newX, ["building1","building2","building3"][Phaser.Math.Between(0,2)])
        }

           })
           //game over scene
           if(this.player.y>1100 && this.gameStarted){
            this.gameStarted=false;
            const allscore=updateScore(this.score);
            // show game over box
            const box= new Toast(this,450,300);
            const text1= this.add.text(102,4,"GameOver",data.textStyles.heading);
               const text2 = this.add.text(110, 97, "Your Score "+allscore.new,data.textStyles.subheading);
               const text3 = this.add.text(113, 143, "High Score " + allscore.high,data.textStyles.subheading);
            const crossBtn = new Button(this, 65, 242, data.buttons.cross);
               const tickBtn = new Button(this, 342, 238, data.buttons.tick);

            box.add([text1,text2,text3,tickBtn,crossBtn])
            // enableDrag(text1)
            //    enableDrag(text2)
            //    enableDrag(text3)
            //    enableDrag(tickBtn)
            //    enableDrag(crossBtn)
box.show();
// box.slideAnim.on("complete",()=>{this.scene.pause()})
               crossBtn.on("pointerup", () => {
                   this.scene.start("GameScene")
               })
               tickBtn.on("pointerup", () => {
                   this.scene.restart()
               })



        }



}

}