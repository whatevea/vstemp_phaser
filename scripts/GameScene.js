import GameStarter from "./Gamehandler.js";
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
this.add.image(292,700,"board").setScale(1.5,2);
//enable multipointer
this.input.addPointer(2);
//get game objects
//adding sounds
this.canPlaySound=true;

this.spring1=this.sound.add("spring1");
this.spring2=this.sound.add("spring2");
this.spring3=this.sound.add("spring3");
this.sidebounce=this.sound.add("sidebounce");
this.springSounds=[this.spring1,this.spring2,this.spring3];

let startGame= new GameStarter(this) .initGame();

}

update(){

}

}
