
import Toast from "../objects/Toast.js";
import { Zone } from "./helpers.js";
import renderGameObjs from "./objects.js";
export default class GameStarter

{
constructor(scene){
    this.scene=scene;
    
}


    initGame(){

    this.objs=renderGameObjs(this.scene);
     this.scene.greenZoneBounds=new Zone(this.scene,0,150,720,220,"0x00ff00",0.4);
    this.scene.redZoneBounds=new Zone(this.scene,0,1280-150-200,720,220,"0xff0000",0.4);
    this.toast1= new Toast(this.scene)
    this.toast1.show(1200,0,0);
    }


    startGame(blocksData){
        //destroy toast container and its objects
        this.toast1.hide();
        //show score
        const {redBlocks,greenBlocks}=blocksData;
        //render blocks and add physics
        
        //set ball in motion


    }



}