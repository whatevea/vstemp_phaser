export function soundPlayer(scene,sound){
    if (scene.canPlaySound && sound==="centerBounce"){    
        scene.springSounds[Phaser.Math.Between(0,2)].play();
        
    }
    if (scene.canPlaySound && sound==="sideBounce"){    
        scene.spring3.play();
        
    }
    if (scene.canPlaySound && sound==="blast"){    
        scene.blast.play();
        
    }
    

}

export function initSounds(scene,canPlaySound){
    scene.canPlaySound=canPlaySound;
    scene.blast=scene.sound.add("blast");
    scene.spring1=scene.sound.add("spring1");
    scene.spring2=scene.sound.add("spring2");
    scene.spring3=scene.sound.add("spring3");
    scene.sidebounce=scene.sound.add("sidebounce");
    scene.springSounds=[scene.spring1,scene.spring2,scene.spring3];
}