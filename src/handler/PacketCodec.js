import { BaseHandler } from "../socket/BaseHandler";

export class PacketCodec extends BaseHandler {
    onOpen(handlerContext, msg) {
        handlerContext.channel.write("wwww");
        super.onOpen(handlerContext, msg);
    }
    onMessage(handlerContext, msg) {
        super.onMessage(handlerContext, msg);
    }
    onWrite(handlerContext, msg) {
        console.log(msg)
        let buffer;
        let root= protobuf.loadSync("../proto/LoginReq.proto")
        super.onWrite(handlerContext, buffer);

    }

}