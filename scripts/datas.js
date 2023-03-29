const vars ={
     paddleOffset:75, //distance from border to paddle
     xDifficulty:4,
     yDifficulty:6,
     ballScale:0.5,
     centerHitPercent:70, //this percentage determines if it is hit in center of paddle or side
    initialBallVelocity:0,
    ballBounceRate:1.05,
    dragBlockPos:{
        "red":{x:228,y:759},
        "green":{x:523,y:589}
     },
    green:{
        normal:0,
        tick:1,
        cross:2
    },
    red:{
        tick:3,
        normal:4,
        cross:5,
    }
    }
export default vars;