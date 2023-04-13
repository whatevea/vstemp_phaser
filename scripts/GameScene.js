import data from "./data.js";
import enableDrag from "./handlers.js";
import { Button, Toast } from "./ui.js";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" })
    }

    create() {

        const bg=this.add.image(0,0,"cityTile").setOrigin(0,0);
        bg.setDisplaySize(this.game.config.width, this.game.config.height);
        const box= new Toast(this,400,400)
        const playBtn=new Button(this,200,220,data.buttons.play);
        const settingBtn = new Button(this, 57,337, data.buttons.settings);
        const aboutBtn = new Button(this, 347, 336, data.buttons.icon);
        const titleText=this.add.text(17,19,"Late To Work Clone",data.textStyles.heading)
        box.add([playBtn,settingBtn,aboutBtn,titleText])
        box.show()
        playBtn.on("pointerup",()=>{
            this.scene.start("PlayScene")
        })
    }


}
