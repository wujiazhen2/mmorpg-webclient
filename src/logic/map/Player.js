import BiologyObject from "./BiologyObject";
import { runInThisContext } from "vm";
const WIDTH=55;
const HIEGHT=50;
const img ="./image/WARRIOR.png"
export class Player extends BiologyObject{

    constructor(){
        super(img, WIDTH, HIEGHT)
        this.x=50;
        this.y=50;
    }
    startMove(x,y){
      this.x+=5;
      this.y+=5;
    }
    drawToCanvas(ctx) {
        if ( !this.visible )
          return
        // this.startMove(50,50);
       
        ctx.drawImage(
          this.img,
          0,0,WIDTH,HIEGHT,
          this.x,
          this.y,
          WIDTH,
          HIEGHT
        )
      }
}