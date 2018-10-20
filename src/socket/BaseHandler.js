
export class BaseHandler{
    onOpen(handlerContext,msg){
        handlerContext.fireOpen(msg);
    }
    onMessage(handlerContext,msg){
        handlerContext.fireMessag(msg);
    }
    onClose(handlerContext,msg){
        handlerContext.fireClose(msg);
    }
    onError(handlerContext,error){
        handlerContext.fireError(error);
    }
    onWrite(handlerContext,msg){
        handlerContext.fireWrite(msg);
    }
}