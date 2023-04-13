import enableDrag from "./handlers.js";

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({key:"PlayScene"});
    }


    create() {
 const {width,height}=this.scale;
 this.baseSpeed=1;
this.bg=this.add.tileSprite(0,0,width,height,"cityTile").setOrigin(0,0);
const sun= this.add.image(374,131,"sun").setScale(0.7,0.8);
this.gameStarted=true;
this.player=this.physics.add.sprite(200,300,"player").play("run");
this.platforms=
console.log(this.platforms.getChildren())
this.physics.add.collider(this.player,this.platforms)


        this.brickTile = this.add.tileSprite(0, 996, width, height / 4, "brickTile").setOrigin(0, 0);

}

update(){
    if(this.gameStarted){
    this.bg.tilePositionX+=1.3*this.baseSpeed;
    this.brickTile.tilePositionX+=4.4*this.baseSpeed;
    this.platforms.getChildren().forEach((platform)=>{
        platform.x-=this.baseSpeed*3.7
        if(platform.body.x<=-400){
            platform.x=800
        }
    })



    }
}

}
