import { Channel } from "./Channel";
import { HanderChain } from "./HanderChain";

export class ClientBootStrap {
  constructor() {
    this.channel=new Channel();
    this.handerChain = new HanderChain(this.channel);
    
  }
  bind(url) {
    this.ws = new WebSocket(url);
    let handerChain = this.handerChain;
    this.channel.setWs(this.ws);
    this.ws.onopen = function () {
      handerChain.fireOpen()
    };
    this.ws.onmessage = function (evt) {
      handerChain.fireMessage(evt)
    };
    this.ws.onclose = function () {
      handerChain.fireClose()
    };
    this.ws.onerror = function (error) {
      handerChain.fireError(error)
    };
    this.ws.onwrite = function (msg) {
      handerChain.fireWrite(msg)
    }
    return this.channel;
  }

  handler(func) {
    func(this.handerChain);
    return this;
  }
}