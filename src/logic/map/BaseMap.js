import { Player } from "./Player";
import { gameContext } from "../../GameContext";


export class BaseMap{

    constructor(mapId){
     

        this.mapId=mapId;
        this.ctx= canvas.getContext('2d');
        this.player=new Player();
        this.bindLoop=this.render.bind(this);
        // 清除上一局的动画
        window.cancelAnimationFrame(this.aniId);

        this.aniId = window.requestAnimationFrame(
        this.bindLoop,
        canvas
        )
    }
    render(){

        this.player.drawToCanvas(this.ctx);
    }
}