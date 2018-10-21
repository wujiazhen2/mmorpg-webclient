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
        let reader=new FileReader();
        reader.readAsArrayBuffer(evt.data)
        let head=this.head;
        reader.onload=(e)=>{  
            head.fireMessage(reader.result)
        }
        
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