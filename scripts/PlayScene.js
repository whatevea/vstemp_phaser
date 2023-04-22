import renderHud from "./hud.js";
import data from "./data.js";
import processLayer from "./layerProcess.js";
import Player from "./player.js";
import { Button, Toast } from "./ui.js";
export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: "PlayScene" })
    }
create(){
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
const text=this.add.text(123,123,"Here will be text")
    renderHud(this)

this.input.on("pointerdown",pointer=>{
    if (pointer.x<this.scale.width/2){
this.emitter.emit("leftdown")
}
    else{
        this.emitter.emit("rightdown")

    }
})
this.input.on("pointerup",(pointer)=>{
if(pointer.x<this.scale.width/2){
    this.emitter.emit("leftup")

}
else{
    this.emitter.emit("rightup")

}
})

}
update()
{
    // console.log(this.player.direction)
    if (this.player.direction === "right" && this.player.body.blocked.right){
    this.player.setFlipX(true);
    this.player.direction="left";
        this.player.body.setVelocityX(-200)

    }
   else  if(this.player.direction === "left"  && this.player.body.blocked.left){
        console.log("leftblocked")

    this.player.setFlipX(false);
        this.player.direction = "right";
        this.player.body.setVelocityX(200)

    }
    // this.physics.collide(this.player, this.layer)
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
    }}
    
    )

}
}
