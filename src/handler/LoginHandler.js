import { BaseHandler } from "../socket/BaseHandler";
import {loginController} from "../logic/controller/LoginController";

export class LoginHandler extends BaseHandler{

    onOpen(handlerContext,msg){
      loginController.view(handlerContext.channel);
      super.onOpen(handlerContext);
    }
    
}