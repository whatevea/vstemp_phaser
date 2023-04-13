//import scenes
import LoadScene from "./LoadScene.js";
import GameScene from "./GameScene.js";
import PlayScene from "./PlayScene.js";
const gameConfig = {
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
      gravity: { y: 440 },
      debug: true
    }},
  scene : [LoadScene,GameScene,PlayScene]
}
export default gameConfig;
