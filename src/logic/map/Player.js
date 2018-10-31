import BiologyObject from "./BiologyObject";
import { runInThisContext } from "vm";
const WIDTH=55;
const HIEGHT=50;
const img ="./image/WARRIOR.png"
export class Player extends BiologyObject{

    constructor(){
        super(img, WIDTH, HIEGHT)
        this.x=canvas.width/3;
        this.y=canvas.height/2;
    }
  
    drawToCanvas(ctx) {
        if ( !this.visible )
          return
        // this.startMove(50,50);
       
        ctx.drawImage(
          this.img,
          0,0,WIDTH,HIEGHT,
          canvas.width/3,
          canvas.height/2,
          WIDTH,
          HIEGHT
        )
      }
}