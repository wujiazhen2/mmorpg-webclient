import {protocalManager} from "../proto/ProtocalManager";
class LoginController {

    view(handlerContext) {
        // 链接成功才显示界面
        const ele = document.getElementById("game");
        ele.style.display="";
        const button = document.createElement("button");
        button.innerText="登录";
        button.onclick = function(){
            this.login(handlerContext);
        }.bind(this);
        ele.appendChild(button);
    }
    login(handlerContext) {
        const pwd=document.getElementById("pwd").value
        const account =document.getElementById("account").value
        let req=protocalManager.create(require("../proto/LoginReq_pb").LoginReq);
        req.setAccount(account);
        req.setPwd(pwd);
        handlerContext.channel.write(req);
    }

}

export let loginController = new LoginController();