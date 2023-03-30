import GameStarter from "./Gamehandler.js";
import { initSounds } from "./soundPlayer.js";
export default class GameScene extends Phaser.Scene{
    constructor(){
    super({"key":"GameScene"})
}

create(){
 //enable Drag function
 this.enableDrag=(obj)=>{
  let scene=obj.scene;
     obj.setInteractive(); 
   scene.input.setDraggable(obj); 
    scene.input.on('drag', function (pointer, obj, dragX, dragY) 
   {  obj.x = dragX; obj.y = dragY;  });
    scene.input.on('dragend', function (pointer,obj) { console.log(obj.x,obj.y) });
   }   


this.canPlaySound=true;
//enable multipointer
this.input.addPointer(2);
//get game objects
//adding sounds
initSounds(this,true);

let startGame= new GameStarter(this) .initGame();

}

update(){

}

}
