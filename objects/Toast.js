import Blocks from "./Blocks.js";
import vars from "../scripts/datas.js";
export default class Toast{

constructor(scene){
    this.scene=scene;
    let bg1=this.scene.add.image(384,682,"toast");
    let text= this.scene.add.text(230,649,"Drag these blocks to your \narea",{
    fontFamily: 'Offside',
    fontSize: '25px',
    color:"black" 
        })
    this.redBlock= new Blocks(scene,"red",vars.dragBlockPos.red.x,vars.dragBlockPos.red.y);
    this.greenBlock= new Blocks(scene,"green",vars.dragBlockPos.green.x,vars.dragBlockPos.green.y);    
    this.container=scene.add.container(0,scene.game.config.width,[bg1,text,this.redBlock.block,this.greenBlock.block]);
    this.container.alpha=0;
    this.redBlock.handleDrag();
    this.greenBlock.handleDrag();


  }

    hide(){
       this.container.destroy();
    }

    show(time,x,y){

       this.scene.tweens.add({
            targets: this.container,
            alpha:1,
            y:y,
            duration: time,
            ease: 'Power2',

            onComplete:function(){

            //enabledrag here
            }
          });
    }
}