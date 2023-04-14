import { Building, createBuilding } from "./buildings.js";
import { enableDrag } from "./handlers.js";

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({key:"PlayScene"});
    }


    create() {
        this.isJumping=false;
        this.pointer = this.input.activePointer;
        this.jumpTime = 0;
        this.jumpMaxTime = 1500; // maximum time the jump button can be held down (in milliseconds)
        this.jumpVelocity = 300; // base jump velocity
        const {width,height}=this.scale;
         this.buildingDistance=15;
        this.baseSpeed=1;
        this.bg=this.add.tileSprite(0,0,width,height,"cityTile").setOrigin(0,0);
        const sun= this.add.image(374,131,"sun").setScale(0.7,0.8);
        this.gameStarted=true;
        this.player=this.physics.add.sprite(200,300,"player").play("run");
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
        // this.player.setImmovable(true);
this.buildingGroup=this.add.group();
createBuilding(this);
this.brickTile = this.add.tileSprite(0, 996, width, height / 4, "brickTile").setOrigin(0, 0);

}

update(time,delta){
    if(this.gameStarted){
    this.bg.tilePositionX+=1.3*this.baseSpeed;
    this.brickTile.tilePositionX+=4.4*this.baseSpeed;
           }  
    

}
}