import { ClientBootStrap } from "./socket/ClientBootStrap";
import { TestHandler } from "./handler/TestHandler";


 export class GameClient{

    constructor(url){
        this.url=url;
    }
    connect(){
        let bootstrap=new ClientBootStrap().handler(function(handlerChain){
                handlerChain.addLast(new TestHandler());
        });
       let channel= bootstrap.bind(this.url);
      
    }
}
new GameClient("ws://localhost:4010/ws").connect();