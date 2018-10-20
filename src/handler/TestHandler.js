import { BaseHandler } from "../socket/BaseHandler";

export class TestHandler extends BaseHandler{

    onOpen(){
        console.log("链接成功")
        window.alert("1111")
    }
    onClose(){
        console.log("关闭");
        window.alert("1111")
    }
    onError(error){
        console.log(error)
        window.alert("1111")
    }
}