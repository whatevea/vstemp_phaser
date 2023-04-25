import renderHud from "./hud.js";
import data from "./data.js";
import processLayer from "./layerProcess.js";
import Player from "./player.js";
import { Button, Toast } from "./ui.js";
import { GameOverHandler,enableDrag,PauseHandler } from "./extras.js";
export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: "PlayScene" })
    }
create(){
    this.updownplatforms=[];
    this.leftrightplatforms=[];
    this.gameOver=false;
    this.input.addPointer(1);
    this.emitter = new Phaser.Events.EventEmitter();
    this.setEmitter();
this.map=this.make.tilemap({key:"map",tileWidth:32,tileHeight:32});
this.tileset=this.map.addTilesetImage("gridtiles","tiles");
this.layer=this.map.createLayer("Tile Layer 1",this.tileset,150);
this.map.setCollision([6,19,33,47])
this.player=new Player(this,330,442);
    this.physics.add.collider(this.player, this.layer);

processLayer(this,this.layer);
this.left=false;
this.right=false;
this.pausebtn=this.add.image(1199,47,"pausebtn").setScale(0.3);
this.pausebtn.setInteractive();
this.pausebtn.on("pointerdown",()=>{
PauseHandler(this)

})
renderHud(this)

this.input.on("pointerdown",pointer=>{
    if (!this.gameOver) {

    if (pointer.x<this.scale.width/2  ){
this.emitter.emit("leftdown")
}
    else{
        this.emitter.emit("rightdown")

    }
}
}

)
this.input.on("pointerup",(pointer)=>{

    if (pointer.x < this.scale.width / 2  ){
    this.emitter.emit("leftup")

}
else{
    this.emitter.emit("rightup")

}



}

)

}
update()
{
    // console.log(this.player.direction)
    if (this.player.direction === "right" && this.player.body.blocked.right &&this.player.isMoving){
    this.player.setFlipX(true);
    this.player.direction="left";
        this.player.body.setVelocityX(-200)

    }
   else  if(this.player.direction === "left"  && this.player.body.blocked.left && this.player.isMoving){
        console.log("leftblocked")

    this.player.setFlipX(false);
        this.player.direction = "right";
        this.player.body.setVelocityX(200)

    }

    if(this.updownplatforms){
        this.updownplatforms.forEach((item)=>{
            if (item.direction === "up" && item.body.blocked.up) {
                item.direction = "down";
                item.body.setVelocityY(100)

            }
            else if (item.direction === "down" && item.body.blocked.down) {
                item.direction = "up";
                item.body.setVelocityY(-100)

            }
        })
    }
    if (this.leftrightplatforms){
    this.leftrightplatforms.forEach((item) => {
        if (item.direction === "left" && item.body.blocked.left) {
            item.direction = "right";
            item.body.setVelocityX(100)

        }
        else if (item.direction === "right" && item.body.blocked.right) {
            item.direction = "left";
            item.body.setVelocityX(-100)

        }
    })

}


}

setEmitter(){
    console.log("calling Game over")
    this.emitter.on("GameOver", (message) => {

        if(!this.gameOver){
            this.gameOver=true;
        const emitter = this.add.particles(this.player.x,this.player.y, "ppink", {
            emitting: false,
            lifespan: 1000,
            speed: { min: 100, max: 400 },
            scale: { start: 0.4, end: 0 },
            blendMode: "ADD",
            gravityY: 150,
        })
        emitter.explode(74);
        this.player.setVisible(false);
        this.player.setActive(false);
            GameOverHandler(this);

    }

}
    
    )

}
}
