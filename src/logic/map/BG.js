import MapObject from './MapObject';

const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC   = './image/bg.jpg'


/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class BackGround extends MapObject {
  constructor(ctx) {
    super(BG_IMG_SRC, canvas.width, canvas.height)

    this.render(ctx)
    this.start=0
    this.end=0;
    this.top = 0
    this.moveX=0;
    this.moveY=0;
  }

  update() {
    
  }
  drawToCanvas(ctx) {
    if ( !this.visible )
      return;
     
      ctx.drawImage(
        this.img,
        this.start,this.end,canvas.width*4,canvas.height*4,
        this.x,
        this.y,
        canvas.width,
        canvas.height
      );
  }
  render(ctx){
   
  }
}
