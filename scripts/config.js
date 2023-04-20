//import scenes
import LoadScene from "./LoadScene.js";
import GameScene from "./GameScene.js";
import PlayScene from "./PlayScene.js";
import data from "./data.js";
const gameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: 'game-container',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: data.gravity },
      debug: false
    }},
  scene : [LoadScene,GameScene,PlayScene]
}
export default gameConfig;
