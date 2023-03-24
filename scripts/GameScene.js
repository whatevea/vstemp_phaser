import gameManager from "./gameManager.js";
import renderGameObjs from "./objects.js";
import Toast from "../objects/Toast.js";
export default class GameScene extends Phaser.Scene{
    constructor(){
    super({"key":"GameScene"})
}

create(){
    


this.canPlaySound=true;
this.add.image(292,700,"board").setScale(1.5,2);
//enable multipointer
this.input.addPointer(2);
//get game objects
this.objs=renderGameObjs(this);
//adding sounds
this.canPlaySound=true;

this.spring1=this.sound.add("spring1");
this.spring2=this.sound.add("spring2");
this.spring3=this.sound.add("spring3");
this.sidebounce=this.sound.add("sidebounce");
this.springSounds=[this.spring1,this.spring2,this.spring3];

// gameManager(this);
let bg1=this.add.image(0,0,"toast");
let text= this.add.text(0,0,"Drag these blocks to the green area",{
    
        fontFamily: 'Offside',
        fontSize: '25px',
        color:"black" 
})
let newContainer= new Toast(this,0,0,[bg1,text]).container;
window.enableDrag(bg1);

}

update(){

}

}