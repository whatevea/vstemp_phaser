export function soundPlayer(scene,sound){
    if (scene.canPlaySound && sound==="centerBounce"){    
        let springSounds=["spring1","spring2","spring3"]
        let key=springSounds[Phaser.Math.Between(0,2)];
        scene.sound.play(key);
        
    }
    if (scene.canPlaySound && sound==="sideBounce"){    
        scene.sound.play("spring3");
        
    }
    if (scene.canPlaySound && sound==="blast"){    
        scene.sound.play("blast")
        
    }
    

}

export function initSounds(scene,canPlaySound){
    scene.canPlaySound=canPlaySound;
}