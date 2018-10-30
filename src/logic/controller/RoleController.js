import { gameContext } from "../../GameContext";
import ReactDOM from "react-dom";
import React from "react";
import { protocalManager } from "../../proto/ProtocalManager";



class RoleController {
    roleList(channel, resp) {
        gameContext.clear();
        const roles = new Map();
        roles.set(0, "战士");
        roles.set(1, "猎手");
        roles.set(2, "法师");
        const eles = new Array();
        resp.getPlayerInfosList().forEach(element => {
            eles.push((
                <div id={element.getPlayerId()}
                    onClick={roleController.enterWorld.bind(this, channel, element.getPlayerId())}
                    style={{ cursor: "pointer", border: "1px solid black" }}
                >
                    <div>角色:{element.getName()}</div>
                    <div>等级:{element.getLevel()}</div>
                    <div>职业:{roles.get(element.getRole())}</div>
                    <div>性别:{element.getSex() == 1 ? "女" : "男"}</div>
                </div>
            ))
        });
        eles.push((
            <button onClick={roleController.creatRoleView.bind(this, channel)}>创建角色</button>
        ))
        ReactDOM.render(eles, gameContext.gameArea)
    }
    creatRoleView(channel) {
        const eles = new Array();
        eles.push((
            <div>
                <div>
                    <label for={"name"}>
                        角色名：
                   </label>
                    <input id={"name"} name={"name"} type={"input"} />
                </div>
                <div>
                    <label for={"sex"}>
                        性别：
                     </label>
                    <input  name={"sex"} type={"radio"} value={"0"}/>男
                    <input  name={"sex"} type={"radio"} value={"1"}/>女
                </div>
                <div>
                    <label for={"role"}>
                        角色:
                     </label>
                    <input  name={"role"} type={"radio"} value={"0"}/>战士
                    <input  name={"role"} type={"radio"} value={"1"}/>猎手
                    <input  name={"role"} type={"radio"} value={"2"}/>法师
                </div>
            </div>
        ))
        eles.push((
            <button onClick={roleController.createRole.bind(this, channel)}>创建</button>
        ))
        ReactDOM.render(eles, gameContext.gameArea)
    }
    createRole(channel){
        const name=document.getElementById("name").value;
        const sexs=document.getElementsByName("sex");
        let sex=0;
        for(x in sexs){
            if(x.checked){
                sex=x.value;
            }
        }
        const roles=document.getElementsByName("role");
        let role =0;
        for(x in roles){
            if(x.checked){
                role=x.value;
            }
        }
        const createRoleReq=protocalManager.create(proto.CreateRoleReq)
        createRoleReq.setRole(role);
        createRoleReq.setSex(sex);
        createRoleReq.setPlayerName(name);
        channel.write(createRoleReq)
    }
    enterWorld(channel, playerId) {
        const roleLoginReq = protocalManager.create(proto.RoleLoginReq);
        roleLoginReq.setPlayerId(playerId);
        channel.write(roleLoginReq);
    }

}
export const roleController = new RoleController();