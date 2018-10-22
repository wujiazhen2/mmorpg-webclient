import { BaseHandler } from "../socket/BaseHandler";
import { ByteBuf } from "../socket/ByteBuf";
import {protocalManager} from "../proto/ProtocalManager";

export class PacketCodec extends BaseHandler {
    onOpen(handlerContext, msg) {
  
        super.onOpen(handlerContext, msg);
    }
    //解码
    onMessage(handlerContext, msg) {
      
        let dv=new DataView(msg);
        let length =dv.getInt32(0)
        if(length>msg.byteLength){
            //TODO 处理拆包
        }
        let protocalId=dv.getInt16(4);
        let type=protocalManager.get(protocalId);
        msg=type.deserializeBinary(msg.slice(6,msg.byteLength))
        msg.messageId=protocalId;
        super.onMessage(handlerContext, msg);
    }
    //编码
    onWrite(handlerContext, msg) {
        if(msg.serializeBinary){
            let req =msg.serializeBinary();
            let byteBuf=new ByteBuf(req.byteLength+6);
            byteBuf.setInt32(req.byteLength+6);
            byteBuf.setInt16(msg.messageId);
            byteBuf.setInt8Array(req);
            super.onWrite(handlerContext, byteBuf.buffer);
        }else{
            super.onWrite(handlerContext,msg);
        }
    }

}