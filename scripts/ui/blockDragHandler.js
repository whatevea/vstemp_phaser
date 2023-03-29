import { getBlocks,storeBlocks } from "../../objects/blocksData.js";
import Blocks from "../../objects/Blocks.js";
import vars from "../datas.js";
//this determines the drag handling of the block
export default function handlesDrag(scene,block){
//get Zone
    const blocksZone = block.color === "red" ? scene.redZoneBounds : scene.greenZoneBounds;
//setInteractive
    block.block.setInteractive();
    scene.input.setDraggable(block.block);

    //enableDrag
    block.block.on('drag', function (pointer, dragX, dragY) {

        block.block.x = dragX;
        block.block.y = dragY;
    });
  



    block.block.on('dragend', function (pointer, dragX, dragY) {
        const presentBlocks = getBlocks(block.color);

        //check if num of side is greater than 5
        //check if is above other block
        //check if inside its colored box
        let isAboveOtherBlock = () => {
            let aboveOtherBlock = false;
            if (presentBlocks.length > 0) {
                presentBlocks.forEach(element => {
                    let rectA = element.getBounds();
                    let rectB = block.block.getBounds();
                    if (Phaser.Geom.Intersects.RectangleToRectangle(rectA, rectB)) {
                        console.log("above another block")
                        aboveOtherBlock = true;
                    }
                }

                );
            }
            return aboveOtherBlock;

        }


        if (presentBlocks.length < vars.maxBlocks && blocksZone.contains(block.block.getBounds()) && !isAboveOtherBlock()) {
            //store the coordinates 
            storeBlocks(block.block, block.color);
            //disableDrag of this block and change the frame
            block.disableDrag();
            block.block.setFrame(vars[block.color].tick);
            //make new block of same color in same place
            if (presentBlocks.length !== vars.maxBlocks) {
                new Blocks(scene, block.color, vars.dragBlockPos[block.color].x, vars.dragBlockPos[block.color].y).handleDrag();

            }
        }

    }, this);
}