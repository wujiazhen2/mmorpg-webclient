import { BaseHandler } from "../socket/BaseHandler";
import { protocalManager } from "../proto/ProtocalManager";
import { handlers } from "../HandlerMapping";
export class DispatchHandler extends BaseHandler{

    onMessage(handlerContext,msg){
        console.log(msg)
        console.log(handlers)
        const func=handlers.get(protocalManager.get(msg.messageId));
        if(func){
        func(handlerContext.channel,msg);
        }else{
            throw Error("协议"+msg.messageId+"没有处理方法");
        }
        super.onMessage(handlerContext,msg);
    }

}