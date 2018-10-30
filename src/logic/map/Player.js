import BiologyObject from "./BiologyObject";

const img =new Image();
img.src="../image/WARRIOR.png"
export class Player extends BiologyObject{

    constructor(){
        super(img, 0, 0)
    }

    drawToCanvas(ctx) {
        if ( !this.visible )
          return
    
        ctx.drawImage(
          this.img,
          0,0,50,50,
          this.x,
          this.y,
          this.width,
          this.height
        )
      }
}