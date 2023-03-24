export default class MainScreen extends Phaser.Scene
{
constructor(){
super({"key":"MainScreen"})
}
preload(){

}
create(){
    
    function jiggle(gameObject,scale) {
        let scene=gameObject.scene;
        gameObject.setOrigin(0.5);
        let zoomIn = scene.tweens.add({
          targets: gameObject,
          scaleX: scale,
          scaleY: scale,
          duration: 600,
          ease: 'Power2',
          yoyo: true,
          repeat: -1
        })
    }

let textStyle={
    fontFamily: 'Offside',
    fontSize: '45px',
    color:"#000",
    stroke:"#f0f",
    strokeThickness:7
};

this.add.image(0,0,"bg").setOrigin(0,0);
let logo=this.add.image(350, 96,"logo").setOrigin(0.5).setScale(0.8);
let playbutton= this.add.text(217,1160,"PLAY",textStyle);
playbutton.setInteractive();
let optionbutton=this.add.text(473, 1127,"Option",textStyle)
jiggle(playbutton,1.1);
jiggle(logo,1.1);
//button click
playbutton.on('pointerdown', () => {
    playbutton.setScale(1, 1);
    this.scene.start("GameScene");
  });
}
}



