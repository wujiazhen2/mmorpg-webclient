import { HandlerContext } from "./HandlerContext";

export class HanderChain {

    constructor(channel) {
        this.channel=channel;
        this.head=new HandlerContext(null,channel);
        this.tail=this.head;
    }

    addLast(hander) { 
        this.tail.setNext(new HandlerContext(hander,this.channel));
        this.tail.next.setPrev(this.tail);
        this.tail = this.tail.next;
        return this;
    }
    fireMessage(evt){
        this.head.fireMessage(evt)
    }
    fireOpen(evt){
      
        this.head.fireOpen(evt)
    }
    fireClose(evt){
        this.head.fireClose(evt)
    }
    fireError(evt){
        this.head.fireError(evt)
    }
    fireWrite(msg){
        this.tail.handler.onWrite(this.tail,msg);
    }
}