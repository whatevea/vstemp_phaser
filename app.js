import gameConfig from "./scripts/config.js";
const game = new Phaser.Game(gameConfig);


//global 
 window.enableDrag=(obj)=>{
    let scene=obj.scene;
      obj.setInteractive(); 
    scene.input.setDraggable(obj); 
     scene.input.on('drag', function (pointer, obj, dragX, dragY) 
    {  obj.x = dragX;
      //  obj.y = dragY;
      obj.body.position.x = dragX;
      // obj.body.position.y = dragY;
      obj.body.updateFromGameObject();
    });
     scene.input.on('dragend', function (pointer,obj) { console.log(obj.x,obj.y) });
    }

//default style
window.textStyle= {
    fontFamily: 'Offside',
    fontSize: '64px'
};
