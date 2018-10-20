
export class Channel {

    constructor() {

    }
    setWs(ws){
        this.ws=ws;
    }
    sendMessage(msg) {
        if (this.ws) {
            this.ws.onwrite(msg);
        }
    }
}