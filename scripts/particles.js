export default class TailParticles {
constructor(scene,texture,lifespan,amount,followObj){
this.scene=scene;
this.texture=texture;
this.lifespan=lifespan;
this.amount=amount;
this.followObj=followObj;
//initiate partilce system
this.particles=scene.add.particles(texture);
}

blast(){
    console.log("particles should be emitted");
    this.particles.createEmitter({
        x:this.followObj.x,
        y:this.followObj.y,
        speed: 10,
        quantity:2,
        gravity:{x:40,y:40},
        lifespan: this.lifespan,
        alpha: { start: 1, end: 0 },
        scale: { start: 0.4, end: 0 },
        blendMode: 'ADD',
        // follow:this.followObj
      });
}



}