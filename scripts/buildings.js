import data from "./data.js";

export class Building extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, type) {
        const mydata=data.buildingsData[type];
        super(scene, x, mydata.y, type);
        this.setScale(mydata.scale);
        this.setOrigin(0,0);
        scene.physics.world.enable(this);
        this.body.immovable=true;
        this.body.allowGravity=false;
        scene.add.existing(this);
        scene.physics.add.collider(this,scene.player)
        this.body.setVelocityX(data.buildingsVelocity*data.baseSpeed);
        this.body.setFrictionX(0);
        this.setDepth(1);
        scene.buildingArray.add(this);
        scene.lastElem=this;
        
    }

}
export function createBuilding(scene){
    let tower1 = new Building(scene, 250, "building1")
    let tower2 = new Building(scene, tower1.displayWidth +tower1.x+ scene.buildingDistance.min, "building2")
    let tower3 = new Building(scene, tower2.displayWidth + tower2.x+scene.buildingDistance.min, "building3")
    // this.buildingGroup.add([tower1, tower2, tower3,])
return [tower1,tower2,tower3];
}