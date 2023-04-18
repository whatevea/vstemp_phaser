const data={
buttons:{
    home:1,
    cross:5,
    play:0,
    tick:3,
    settings:2,
    icon:6
},



textStyles:{
heading:{
    fontFamily:"Bangers",
    fontSize:"52px",
    color:"#000000"
},
subheading:{
    fontFamily:"Bangers",
    fontSize:"32px",
    color:"#ff0000"
}





},



buildingsData:{
    building1:{
        scale:0.5,  //if you set this to 1 the size of the building will match with size of its image file
        y:800,      // the  y axis of builiding placement , 0 will put the building to top of screen (unreachable)
    },
    building2:{
        scale:0.5,
        y:768
    },
    building3:{
      y:800,
        scale:0.6
    },
},
//customisable data
gravity:600,
initialScore:0,
playerJumpVelocity:300,
distanceBetweenBuildings: { min: 170, max: 240 } ,   //changing this can make game very difficult and even non playable
baseSpeed:2, // this will increase speed of , the background ,lamposts ,brickstiles etc. increasing this value can be harmful to eyes and make you dizzy , set it between  1 and 2 
buildingsVelocity: -200, //this is the speed in which buildings come from right to left . 
maxJumpTime:20 //defines how long to jump button before player falls back. Increasing this can result in fly effect
}
export default data;
