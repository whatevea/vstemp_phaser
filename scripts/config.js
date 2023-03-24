//import scenes
import  LoadScene  from "./LoadScene.js";
import MainScreen from "./MainScreen.js";
import GameScene from "./GameScene.js";
const config = {
    customData:{
        canPlaySound:true
    },
  type: Phaser.AUTO,
  width: 720,
  height: 1280,
  parent: 'game-container',
  scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
      default: 'arcade',
      arcade: {
          debug: true
      }
  },
scene:[LoadScene,MainScreen,GameScene]
}

export default config;
