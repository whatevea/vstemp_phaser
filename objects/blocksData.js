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
blocksCoordinates[color].push(block.x,block.y)
if(blocks.red.length===10 && blocks.green.length===10){
    startGame(blocksCoordinates);
}
}


export function getBlocks(color){
    
    return blocks[color]
}

export function clearBlocks(){
    blocks={red:[],
    green:[]
    }
}
