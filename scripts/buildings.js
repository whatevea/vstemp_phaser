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
        this.body.setVelocityX(-200);
        this.body.setFrictionX(0);
    }

}
export function createBuilding(scene){
    let tower1 = new Building(scene, 100, "building3")
    let tower2 = new Building(scene, tower1.width +tower1.x+ scene.buildingDistance, "building1")
    let tower3 = new Building(scene, tower2.width + tower2.x+scene.buildingDistance, "building2")
    // this.buildingGroup.add([tower1, tower2, tower3,])
    scene.buildingGroup.addMultiple([tower1, tower2, tower3]);

}