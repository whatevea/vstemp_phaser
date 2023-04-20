import data from "./data.js";
import { Button, Toast } from "./ui.js";
export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "PlayScene" })
    }
create(){


    this.player=this.add.sprite(100,230,"player").setFrame(16).setScale(3);
    this.player.setInteractive()
    this.player.on("pointerdown",()=>{
console.log("playing")
        this.player.play("run")
    })


}



}
