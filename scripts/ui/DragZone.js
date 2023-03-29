
export default class DragZone {

   constructor(scene, x, y, width, height, color, alpha) {
      this.scene = scene;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.alpha = alpha;
      this.graphics = this.scene.add.graphics();
      this.graphics.fillStyle(color, alpha);
      this.graphics.fillRect(x, y, width, height);
      this.rect = new Phaser.Geom.Rectangle(x, y, width, height);

   }

   destroy() {
      this.graphics.destroy()
   }


   contains(rect) {
      return Phaser.Geom.Rectangle.ContainsRect(this.rect, rect);

   }
   validateBlock(){
      //checks if block can be placed
   }

}


