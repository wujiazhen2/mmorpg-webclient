import { BaseHandler } from "../socket/BaseHandler";
import { ByteBuf } from "../socket/ByteBuf";
let proto = require("../proto/LoginReq_pb");

export class PacketCodec extends BaseHandler {
    onOpen(handlerContext, msg) {
        handlerContext.channel.write({account:"wujiazhen",pwd:"wujiazhen"});
        super.onOpen(handlerContext, msg);
    }
    onMessage(handlerContext, msg) {
        super.onMessage(handlerContext, msg);
    }
    onWrite(handlerContext, msg) {
        let loginReq = new proto.LoginReq();
        loginReq.setAccount("1111")
        loginReq.setPwd("1111");
        let req =loginReq.serializeBinary();
        let byteBuf=new ByteBuf(req.byteLength+6);
        byteBuf.setInt32(req.byteLength+6);
        byteBuf.setInt16(11111);
        byteBuf.setInt8Array(req);
        super.onWrite(handlerContext, byteBuf.buffer);
    }

}