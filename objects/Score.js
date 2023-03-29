export default class Score{

    constructor(scene,x,y,flip,scoreNum){
        this.scene=scene;
        this.x=x;
        this.y=y;
        this.scoreNum=scoreNum;
        this.flip=flip;
        
        this.display();
    }

    display(){
        this.gameobj=this.scene.add.text(this.x,this.y,`Score: ${this.scoreNum}`,{
            fontFamily: 'Offside',
            fontSize: '45px',
            color:"#fff",
        })
        this.gameobj.setAlpha(0.2);
        if (this.flip){
            this.gameobj.setAngle(180)
        }

    }


    increase(){
        this.scoreNum++;
        this.gameobj.text=`Score :${this.scoreNum}`;
    }

}
