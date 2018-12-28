import { Player } from "./Player";
import BackGround from "./BG";

export class BaseMap {

    constructor(mapId) {

        this.mapId = mapId;
        this.ctx = canvas.getContext('2d');
        console.log(this.ctx);
        this.player = new Player();
        this.bg = new BackGround();
        this.start();
    }
    start() {
        this.touchHandler = this.touchEventHandler.bind(this);
        canvas.addEventListener('click', this.touchHandler)
        this.bindLoop = this.render.bind(this);
        // 清除上一局的动画
        window.cancelAnimationFrame(this.aniId);

        this.aniId = window.requestAnimationFrame(
            this.bindLoop,
            this.canvas
        )
    }
    touchEventHandler(e) {
        e.preventDefault()
        console.log(e)
        console.log(this.player)
        let x = e.clientX
        let y = e.clientY
        x = x - this.player.x;
        y = y - this.player.y;
        
            this.bg.moveX = x;
            this.bg.moveY = y;
        
    }
   
    move() {
        const i = 10;
        if (this.bg.moveX!=0) {
            if (this.bg.moveX > 0) {
                this.bg.start += i;
                if (this.bg.moveX < i) {
                    this.bg.moveX = 0;
                } else {
                    this.bg.moveX -= i;
                }
            } else {
                this.bg.start -= i;
                if(this.bg.start<0){
                    this.bg.start=0;
                }
                if (this.bg.moveX > -i) {
                    this.bg.moveX = 0;
                } else {
                    this.bg.moveX += i;
                }
            }
        }
        if (this.bg.moveY!=0) {
            if (this.bg.moveY > 0) {
                this.bg.end += i;
                if (this.bg.moveY < i) {
                    this.bg.moveY = 0;
                } else {
                    this.bg.moveY -= i;
                }
            } else {
                this.bg.end -= i;
                if(this.bg.end<0){
                    this.bg.end=0;
                }
                if (this.bg.moveY > -10) {
                    this.bg.moveY = 0;
                } else {
                    this.bg.moveY += i;
                }
            }
        }
    }
    render() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.move();
        this.bg.drawToCanvas(this.ctx);
        this.player.drawToCanvas(this.ctx);
        this.aniId = window.requestAnimationFrame(
            this.bindLoop,
            this.canvas
        )
    }
}