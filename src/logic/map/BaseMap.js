import { Player } from "./Player";
import { gameContext } from "../../GameContext";


export class BaseMap{

    constructor(mapId){
      
        this.mapId=mapId;
        this.ctx= canvas.getContext('2d');
        console.log(this.ctx);
        this.player=new Player();
        this.start();
    }
    start(){
        this.bindLoop=this.render.bind(this);
        // 清除上一局的动画
        window.cancelAnimationFrame(this.aniId);

        this.aniId = window.requestAnimationFrame(
        this.bindLoop,
        this.canvas
        )
    }
    render(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.player.drawToCanvas(this.ctx);
        this.aniId = window.requestAnimationFrame(
            this.bindLoop,
            this.canvas
        )
    }
}