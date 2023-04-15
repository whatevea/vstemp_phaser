import { Building, createBuilding } from "./buildings.js";
import { enableDrag } from "./handlers.js";
import { displayScore,updateScore } from "./score.js";

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({key:"PlayScene"});
    }


    create() {
        this.score=0;
        this.lastElem=undefined;
        this.isJumping=false;
        this.pointer = this.input.activePointer;
        this.jumpVelocity = 300; // base jump velocity
        const {width,height}=this.scale;
         this.buildingDistance={min:170, max:240}
        this.baseSpeed=1;
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


                        if( this.pointer.isDown  &&jumpTime<=20  ){
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
    if(this.gameStarted){
    this.bg.tilePositionX+=1.3*this.baseSpeed;
    this.brickTile.tilePositionX+=4.4*this.baseSpeed;
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
           if(this.player.y>1100){
            this.scoreCounter.remove();
            this.scene.pause();
            const allscore=updateScore(this.score);

           }



}

}