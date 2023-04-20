export default class LoadScene extends Phaser.Scene{
constructor(){
    super(sceneConfig);
}
preload(){
    this.add.text(322,213," LOADING>>>>>>>>>>")
    this.plugins.get('rexwebfontloaderplugin').addToScene(this);

    var config = {
        google: {
            families: ['Bangers']
        }
    };
    this.load.rexWebFont(config);
    this.load.image("billboard","../assets/billboard.png");
    this.load.image("bgTile","../assets/bgTile.png")
    this.load.spritesheet("ui","../assets/ui.png",
    {
        frameWidth:36,
        frameHeight:37.5
    })
    this.load.spritesheet("player","../assets/character/dj idle run.png",
    {
        frameWidth:32,
        frameHeight:32
    })
}

create(){

    //phaser animation simple code

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
