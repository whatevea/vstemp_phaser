const blueItems=[];

export default function processLayer(scene,layer){

layer.forEachTile((tile) => {

    if (tile.properties.type === "spike") {
        const spike = scene.physics.add.sprite(tile.getCenterX(), tile.getCenterY(), "spikes").setScale(0.8,0.48);
        spike.body.setAllowGravity(false);
        scene.physics.add.overlap(scene.player,spike,()=>{
            if(spike.frame.name === 1){
                
                scene.emitter.emit("GameOver")



            } 
        })
        scene.emitter.on("rightdown",()=>{
            spike.play("updown")
        })
        scene.emitter.on("rightup", () => {
            spike.stop()
        })
    }


    if (tile.properties.type == "home") {

        scene.home=scene.physics.add.sprite(tile.getCenterX(),tile.getCenterY(),"door").setScale(3);
        
        
        layer.removeTileAt(tile.x,tile.y)

    }





}





)
}