

export class HandlerContext {

    constructor(handler, channel) {
        this.handler = handler;
        this.channel = channel;
    }
    setNext(handlerContext) {
        this.next = handlerContext;
    }
    getNext() {
        return this.next;
    }

    
    fireMessage(evt) {
        if(this.next){
            this.next.handler.onMessage(this, evt);
        }
    }
    
    fireOpen(evt) {
        if(this.next){
        this.next.handler.onOpen(this, evt);
        }
    }
    
    fireClose(evt) {
        if(this.next){
        this.next.handler.onClose(this, evt);
        }
    }
    
    fireError(evt) {
        if(this.next){
        this.next.handler.onError(this, evt);
        }
    }
    
    fireWrite(evt) {
        if(this.next){
            this.next.handler.onWrite(this, evt);
        }else{
            this.channel.ws.send(evt);
        }
    }

}