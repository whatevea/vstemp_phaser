import data from "./data.js";
import { enableDrag } from "./handlers.js";

export function displayScore(scene){
    let text=scene.add.text(348,93,"0",data.textStyles.heading);
    const timer =scene.time.addEvent({
        delay:100,
        callback:()=>{
            scene.score++;
            text.text=scene.score;
        },
        loop:true,

    })
    return timer;
}


export function updateScore(currentScore)
{
    let highscore = localStorage.highscore;
    if (highscore===undefined || +(highscore)<currentScore){
        localStorage.highscore= currentScore;
    }
return {new:currentScore,high:highscore}

}