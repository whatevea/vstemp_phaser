import renderGameObjs from "./objects.js";
export default class GameScene extends Phaser.Scene{
    constructor(){
    super({"key":"GameScene"})
}

create(){
this.canPlaySound=true;
    let bg=this.add.image(292,700,"board").setScale(1.5,2);
//enable multipointer
this.input.addPointer(2);
//get game objects
renderGameObjs(this);
//adding sounds
this.canPlaySound=true;

this.spring1=this.sound.add("spring1");
this.spring2=this.sound.add("spring2");
this.spring3=this.sound.add("spring3");
this.springSounds=[this.spring1,this.spring2,this.spring3];
function getClickCoordinates(pointer) {
  const worldX = pointer.worldX;
  const worldY = pointer.worldY;
  console.log(`Clicked at world coordinates: (${worldX}, ${worldY})`);
}

this.input.on('pointerdown', getClickCoordinates);
}

update(){

}

}