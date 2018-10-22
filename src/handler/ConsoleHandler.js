import { BaseHandler } from "../socket/BaseHandler";

export class ConsoleHandler extends BaseHandler{

    onOpen(handerChannel){
        this.context=document.getElementById("context");
        let p=document.createElement("p");
        p.innerText="建立链接"
        this.context.appendChild(p);
        super.onOpen(handerChannel);
    }
    onMessage(handerChannel,msg){
        let p=document.createElement("p");
        let str="协议号:"+msg.messageId+"<br/>";
        msg.array.forEach(element => {
            str+=element+",";
        });
        p.innerHTML=str;
        this.context.appendChild(p);
        super.onMessage(handerChannel,msg);
    }
}