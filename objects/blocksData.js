import vars from "../scripts/datas.js";
import Blocks from "./Blocks.js";

var blocks={
    red:[],
    green:[]
                        };

    var blocksCoordinates={
    red:[],
    green:[]
                        };
                                            
export function storeBlocks(block,color){
blocks[color].push(block);
blocksCoordinates[color].push({x:block.x,y:block.y});

if(blocks.red.length===vars.maxBlocks && blocks.green.length===vars.maxBlocks){
    startGame(blocksCoordinates);
}
}
function startGame(a){
    blocksCoordinates.score={red:0,green:0}
    let scene=blocks.red[0].scene;
    scene.toastElem.container.destroy();
    let startText=scene.add.text(300,500,"Starting",{ fontFamily: 'Offside',
    fontSize: '45px',})

    setTimeout(() => {
        scene.cameras.main.fadeOut(1000);
        scene.cameras.main.once('camerafadeoutcomplete', () => {
            scene.scene.start("PlayScene",blocksCoordinates);
        });
      }, 1200);


    
}


export function getBlocks(color){
    
    return blocks[color]
}

export function clearBlocks(){
    blocks={red:[],
    green:[]
    }
}

export function renderBlocks(scene,data){
//render Red and enablePhysics
data.red.forEach((item)=>{

new Blocks(scene,"red",item.x,item.y).enableCollison()

})
data.green.forEach((item)=>{

    new Blocks(scene,"green",item.x,item.y).enableCollison()
    
    })
//render Green and do same
}