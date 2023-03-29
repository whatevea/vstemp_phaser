import vars from "../scripts/datas.js";
import handlesDrag from "../scripts/ui/blockDragHandler.js";

export default class Blocks {

    constructor(scene, color, x, y) {
        this.scene = scene;
        this.color = color;
        this.x = x;
        this.y = y;
        this.createBlock();
    }

    handleDrag() {
        handlesDrag(this.scene, this);
    }
    disableDrag() {
        this.block.disableInteractive();
    }
    createBlock() {
        this.block = this.scene.add.sprite(this.x, this.y, "blocks").setFrame(vars[this.color].normal);

    }
    blast(){
        let explosion=this.scene.add.sprite(this.x,this.y,"explode").setScale(0.5).play(`${this.color}Boom`);
        explosion.on("animationcomplete",function(){
            console.log(this)
            this.destroy()})
    }
    enableCollison() {

        let ball = this.scene.ball;

        this.scene.physics.add.existing(this.block);

        this.block.body.immovable=true;
        this.scene.physics.add.collider(ball, this.block,  ()=> {
            this.blast();
            this.block.destroy();
        })
    }





}