import Toast from "./ui/Toast.js";
import  DragZone  from "./ui/DragZone.js";
import renderGameObjs from "./objects.js";
export default class GameStarter

{
constructor(scene){
    this.scene=scene;
    
}


    initGame(){
    this.objs=renderGameObjs(this.scene);
     this.scene.greenZoneBounds=new DragZone(this.scene,0,150,720,220,"0x00ff00",0.4);
    this.scene.redZoneBounds=new DragZone(this.scene,0,1280-150-200,720,220,"0xff0000",0.4);
    this.toast1= new Toast(this.scene);
    this.scene.toastElem=this.toast1;
    this.toast1.show(1200,0,0);
    }




}