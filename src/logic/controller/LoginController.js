import {protocalManager} from "../../proto/ProtocalManager";
import ReactDOM from "react-dom";
import React from "react";
import { gameContext } from "../../GameContext";
class LoginController {
    logResp(channel,resp){
        if(resp.getStatus().getCode()===200){
            ReactDOM.render((<p>登录成功,正在加载角色列表.........</p>), gameContext.gameArea);
            const roleListReq=protocalManager.create(proto.RoleListReq);
            channel.write(roleListReq);
        }else{
            gameContext.appenderMsg("验证失败");
        }
    }
    view(channel) {
        // 链接成功才显示界面
        const ele = gameContext.gameArea;

        const array =new Array();

        array.push((<div>
              <div>
        <label for="account">
            用户名：
        </label> 
        <input id="account" name="account" type="input"/>
        </div>
        <div>
        <label for="pwd">
                密码：
            </label> 
        <input id="pwd" name="pwd" type="password"></input>
        </div>
        <button onClick={loginController.login.bind(this,channel)}>登录</button>
        <button onClick={loginController.reginsterView.bind(this,channel)}>注册</button>
        </div>))
           ReactDOM.render(array, gameContext.gameArea);
    }
  
    login(channel) {
        const pwd=document.getElementById("pwd").value
        const account =document.getElementById("account").value
        let req=protocalManager.create(proto.LoginReq);
        req.setAccount(account);
        req.setPwd(pwd);
        channel.write(req);
    }

    reginsterView(channel){
        const array=new Array();
        array.push((
            <div>
            <input id="account" name="account" />
            <input id="password" name="password"/>
            <button id="register" onClick={loginController.register.bind(this,channel)}>注册</button>
            </div>
        ))
        ReactDOM.render(array, gameContext.gameArea);
    }
    register(channel){
       const req= protocalManager.create(proto.RegisterAccountReq);
       req.setAccount(document.getElementById("account").value)
       req.setPwd(document.getElementById("password").value);
       channel.write(req);
       
    }
    registerResp(channel,resp){
        loginController.view(channel)
    }

}

export let loginController = new LoginController();