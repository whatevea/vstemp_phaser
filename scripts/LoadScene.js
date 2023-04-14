export default class LoadScene extends Phaser.Scene{
constructor(){
    super(sceneConfig);
}
preload(){
    this.plugins.get('rexwebfontloaderplugin').addToScene(this);

    var config = {
        google: {
            families: ['Bangers']
        }
    };
    this.load.rexWebFont(config);
this.load.image("lamp","../assets/lamplights.png");
    this.load.image("sun", "../assets/sun.png");
    this.load.image("brickTile", "../assets/brickTile.png");

    this.load.image("dialogbubble", "../assets/dialogbubble.png");
    this.load.image("building1", "../assets/texture-1.png");
    this.load.image("building3", "../assets/texture-3.png");
this.load.image("building2", "../assets/texture-2.png");
this.load.image("cityTile", "../assets/tile3.png");
this.load.spritesheet("ui","../assets/ui.png",{
    frameWidth:36,
    frameHeight:37.5
})
this.load.spritesheet("player","../assets/player_tilesheet.png",{
    frameWidth:80,
    frameHeight:110
})
}


create(){

    //phaser animation simple code
    this.anims.create({

        key:"run",

        frames:this.anims.generateFrameNumbers('player',{frames:[0,9,10,9]}),

        frameRate:11,

        repeat:-1



    });
    this.anims.create({

        key: "jump",

        frames: this.anims.generateFrameNumbers('player', { frames: [1, 2, 4, 5] }),

        frameRate: 11,

        repeat: 0



    });

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
