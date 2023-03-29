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

export default class LoadScene extends Phaser.Scene{
constructor(){
    super(sceneConfig);
}
preload(){
//loading fonts
this.plugins.get('rexwebfontloaderplugin').addToScene(this);

var config = {
    google: {
        families: ['Offside']
    }
};

this.load.rexWebFont(config);
this.load.spritesheet("explode","assets/explode.png",{frameWidth:148,frameHeight:148})
this.load.image("block","assets/block.png");
this.load.image("logo","assets/logo.png");
this.load.image("blue","assets/blue.png");
this.load.image("toast","assets/toast.png");
this.load.image("ball","assets/pong.png");
this.load.image("board","assets/board.png");
this.load.image("bg","assets/bg.png")
this.load.spritesheet("blocks","assets/6blocks.png",{
    frameHeight:50,
    frameWidth:69.5
})
this.load.spritesheet("paddle","/assets/g3837.png",{
    frameWidth:200,
    frameHeight:73
})
//loading audio
this.load.audio("spring1",'assets/spring1.mp3');
this.load.audio("spring2",'assets/spring2.mp3');
this.load.audio("spring3",'assets/spring3.mp3');
this.load.audio("sidebounce",'assets/sidebounce.mp3');

}
create(){

let loadingtext= this.add.text(203, 625, 'Loading ... ', {
        fontSize: '64px'
    });       

    //phaser animation simple code
    this.anims.create({

        key:"bounce",

        frames:this.anims.generateFrameNumbers('paddle',{frames:[0,1,2,1,0]}),

        frameRate:11,

        repeat:0

    });

    this.anims.create({
        key:"redBoom",
        frames:this.anims.generateFrameNumbers('explode',{frames:[0,1,2,3,4,5,6,7]},),
  
              frameRate:27,
  
              
      })
      this.anims.create({
        key:"greenBoom",
        frames:this.anims.generateFrameNumbers('explode',{frames:[42,43,44,45,46,47,48]},),
  
              frameRate:27,
  
              
      })

    this.scene.start("MainScreen");

}
update(){

}


}



