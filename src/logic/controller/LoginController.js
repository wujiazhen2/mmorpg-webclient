import {protocalManager} from "../../proto/ProtocalManager";
import { gameContext } from "../../GameContext";
class LoginController {
    logResp(channel,resp){
        if(resp.getStatus().getCode()===200){
            gameContext.clear();
            gameContext.appenderMsg("登录成功,正在加载角色列表.........");
            const roleListReq=protocalManager.create(proto.RoleListReq);
            channel.write(roleListReq);
        }else{
            gameContext.appenderMsg("验证失败");
        }
    }
    view(handlerContext) {
        // 链接成功才显示界面
        const ele = gameContext.gameArea;
        console.log(gameContext);
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
        let req=protocalManager.create(proto.LoginReq);
        req.setAccount(account);
        req.setPwd(pwd);
        handlerContext.channel.write(req);
    }

}

export let loginController = new LoginController();