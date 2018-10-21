

export class HandlerContext {

    constructor(handler, channel) {
        this.handler = handler;
        this.channel = channel;
    }
    setNext(handlerContext) {
        this.next = handlerContext;
    }
    setPrev(handlerContext) {
        this.prev = handlerContext;
    }


    
    fireMessage(evt) {
        if(this.next){
            this.next.handler.onMessage(this.next, evt);
        }
    }
    
    fireOpen(evt) {
        if(this.next){
        this.next.handler.onOpen(this.next, evt);
        }
    }
    
    fireClose(evt) {
        if(this.next){
        this.next.handler.onClose(this.next, evt);
        }
    }
    
    fireError(evt) {
        if(this.next){
        this.next.handler.onError(this.next, evt);
        }
    }
    
    fireWrite(msg) {
        if(this.prev && this.prev.handler){
           
            this.prev.handler.onWrite(trhis.prev, msg);
        }else{
            console.log(1111);
            this.channel.ws.send(msg);
        }
    }

}