export default function soundPlayer(scene,sound){
    if (scene.canPlaySound && sound==="centerBounce"){    
        scene.springSounds[Phaser.Math.Between(0,2)].play();
        
    }
    if (scene.canPlaySound && sound==="sideBounce"){    
        play();
        
    }

}