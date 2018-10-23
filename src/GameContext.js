
class GameContext{

    constructor(){
        this.gameArea=document.getElementById("game");
        
    }
    clear(){
        this.gameArea.innerHTML="";
    }
    appenderMsg(msg){
        const p=document.createElement("p");
        p.innerHTML=msg;
        this.gameArea.appendChild(p);
    }
    appenderElement(e){
        this.gameArea.appendChild(e);
    }
}
export const gameContext =new GameContext();