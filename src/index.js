import { ClientBootStrap } from "./socket/ClientBootStrap";
import { PacketCodec } from "./handler/PacketCodec";


export class GameClient {

    constructor(url) {
        this.url = url;
    }
    connect() {
        let bootstrap = new ClientBootStrap().handler(function (handlerChain) {
            handlerChain.addLast(new PacketCodec());
        });
        return bootstrap.bind(this.url);

    }
}
let channel =new GameClient("ws://localhost:4010/ws").connect();
