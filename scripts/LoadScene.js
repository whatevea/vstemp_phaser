export default class LoadScene extends Phaser.Scene{
constructor(){
    super(sceneConfig);
}
preload(){
    this.load.image("timeholder","/assets/timeholder.png")
    this.load.image("time", "/assets/time.png")
    this.load.image("pblue", "/assets/blueparticle.png")
    this.load.image("ppink", "/assets/pinkparticle.png")
this.load.image("sideblock","/assets/sideblock.png")
    this.load.image("updownblock", "/assets/downblock.png")
    this.load.spritesheet("spring","/assets/spring.png",
    {frameWidth:117,
    frameHeight:51})
this.load.spritesheet("key","/assets/key-white.png",{
    frameWidth:32,
    frameHeight:32
})
    this.load.image("pausebtn", "/assets/pausebtn.png")
    this.load.spritesheet("uis","/assets/56x59gui.png",
    {frameWidth:56,
    frameHeight:59})
    this.load.image("redclock","/assets/redclock.png")
    this.load.image("blueclock", "/assets/blueclock.png")
    this.load.image("spinner","/assets/spinner.png")
    this.add.text(322,213," LOADING>>>>>>>>>>");
    this.plugins.get('rexwebfontloaderplugin').addToScene(this);
this.load.spritesheet("spikes","/assets/spikes.png",{
    frameWidth:114,
    frameHeight:87
})
    var config = {
        google: {
            families: ['Bangers']
        }
    };
    this.load.rexWebFont(config);
    this.load.image("billboard","/assets/billboard.png");
    this.load.image("bgTile","/assets/bgTile.png")
    this.load.spritesheet("ui","/assets/ui.png",
    {
        frameWidth:36,
        frameHeight:37.5
    })
    this.load.spritesheet("player","/assets/character/dj idle run.png",
    {
        frameWidth:32,
        frameHeight:32
    })
this.load.image('tiles',"/assets/gridtiles.png");
this.load.tilemapTiledJSON("level1","/assets/level1.json")
    this.load.tilemapTiledJSON("level2", "/assets/level2.json")
    this.load.tilemapTiledJSON("level3", "/assets/level3.json")
    this.load.tilemapTiledJSON("level4", "/assets/level4.json")
    this.load.tilemapTiledJSON("level5", "/assets/level5.json")
    this.load.tilemapTiledJSON("level6", "/assets/level6.json")
    this.load.tilemapTiledJSON("level7", "/assets/level7.json")
    this.load.tilemapTiledJSON("level8", "/assets/level8.json")
    this.load.tilemapTiledJSON("level9", "/assets/level9.json")
    this.load.tilemapTiledJSON("level10", "/assets/level10.json")
    this.load.tilemapTiledJSON("level11", "/assets/level11.json")
    this.load.tilemapTiledJSON("level12", "/assets/level12.json")
    this.load.tilemapTiledJSON("level13", "/assets/level13.json")
    this.load.tilemapTiledJSON("level14", "/assets/level14.json")
    this.load.tilemapTiledJSON("level15", "/assets/level15.json")
this.load.spritesheet("door","/assets/door.png",{
    frameWidth:16,
    frameHeight:32
})
}

create(){
    this.anims.create({
        key: "boing",
        frames: this.anims.generateFrameNumbers("spring", { frames: [0, 1, 2, 3] }),
        frameRate: 5,
        repeat: -1
    })

    //phaser animation simple code
this.anims.create({
    key:"dooropen",
    frames:this.anims.generateFrameNumbers("door",{frames:[0,1,2,3,4]}),
    frameRate:5,
    repeat:0
})
    this.anims.create({
        key: "spin",
        frames: this.anims.generateFrameNumbers("key", { frames: [0, 1, 2, 3, 4,5,6,7,8,9,10,11] }),
        frameRate: 5,
        repeat: -1
    })



this.anims.create({

key:"updown",
frames:this.anims.generateFrameNumbers("spikes",{frames:[0,1]}),
frameRate:5,
repeat:-1

})
this.anims.create({

    key:"jump",
    frames:this.anims.generateFrameNumbers("player",{frames:[0,1,2,3,4,5,6]}),
    frameRate:11,
    repeat:0

})
this.anims.create({

    key:"idle",
    frames: this.anims.generateFrameNumbers("player",{
        frames:[6,7,8,9,10,11,12,13,14,15,16]
    }),
    repeat:-1
})
    this.anims.create({

        key: "run",
        frames: this.anims.generateFrameNumbers("player", {
            frames: [17,18,19,20,21,22,23,24,25,26,27,28]
        }),
        repeat: -1
    })

 //code here
this.scene.start("GameScene");


}


}
var sceneConfig = {
    key: 'LoadScene',
    pack: {
        files: [{
            type: 'plugin',
            key: 'rexwebfontloaderplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexwebfontloaderplugin.min.js',
            start: true
        }]
    }
};
