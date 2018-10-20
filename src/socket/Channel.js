
export class Channel {

 
    setWs(ws){
       
        this.ws=ws;
    }
    write(msg) {;
        if (this.ws) {
            this.ws.onwrite(msg);
        }
    }
}