import vars from "../scripts/datas.js";
import { getBlocks, storeBlocks } from "./blocksData.js";

export default class Blocks{

    constructor(scene,color,x,y){
     this.scene=scene;
     this.color=color;
    this.x=x;
    this.y=y;
    this.createBlock();
}

    handleDrag(){
        //handle and check drag
        this.block.setInteractive(); 
        this.scene.input.setDraggable(this.block); 
         this.block.on('drag', function (pointer, dragX, dragY) 
        { 
            
            this.block.x = dragX;
             this.block.y = dragY;  
        },this);
         this.block.on('dragend', function (pointer,dragX,dragY) 
         { 
            //check if num of side is greater than 5
            //check if is above other block
            //check if inside its colored box
            let myZone= this.color==="red" ? this.scene.redZoneBounds :this.scene.greenZoneBounds;
            let presentBlocks=getBlocks(this.color);
            let isAboveOtherBlock= ()=>{
                let aboveOtherBlock = false;
                if(presentBlocks.length>0){
                    presentBlocks.forEach(element => {
                        let rectA=element.getBounds();
                        let rectB=this.block.getBounds();
                        if(Phaser.Geom.Intersects.RectangleToRectangle(rectA,rectB)){
                            console.log("above another block")
                            aboveOtherBlock=true;
                        }
                    }

                    );
                }
                return aboveOtherBlock;

            }
            console.log(isAboveOtherBlock())
            if(presentBlocks.length<=10 && myZone.contains(this.block.getBounds()) && !isAboveOtherBlock())
            {
                //store the coordinates 
                storeBlocks(this.block,this.color);
                //disableDrag of this block and change the frame
                this.disableDrag();
                this.block.setFrame(vars[this.color].tick);
                //make new block of same color in same place
                if(presentBlocks.length!==10){
                 new Blocks(this.scene,this.color,vars.dragBlockPos[this.color].x,vars.dragBlockPos[this.color].y).handleDrag();

                }
            }
        
        },this);
    }
    disableDrag(){
        this.block.disableInteractive();
    }
    createBlock(){
        this.block=this.scene.add.sprite(this.x,this.y,"blocks").setFrame(vars[this.color].normal);  
        
    }
    enableCollison(ball){
        this.scene.physics.add.existing(this.block);
        this.block.body.immovable=true;
        this.scene.physics.add.collider(ball,this.block,function(){
            this.block.destroy();

        })
    }





}