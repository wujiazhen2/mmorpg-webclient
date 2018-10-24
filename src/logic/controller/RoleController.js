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
                    <label for="name">
                        角色名：
                   </label>
                    <input id="name" name="name" type="input" />
                </div>
                <div>
                    <label for="sex">
                        性别：
                     </label>
                    <input  name="sex" type="radio" value="0">男</input>
                    <input  name="sex" type="radio" value="1">女</input>
                </div>
                <div>
                    <label for="role">
                        角色:
                     </label>
                    <input  name="role" type="radio" value="0">战士</input>
                    <input  name="role" type="radio" value="1">猎手</input>
                    <input  name="role" type="radio" value="2">法师</input>
                </div>
            </div>
        ))
        eles.push((
            <button onClick={roleController.creatRoleView.bind(this, channel)}>创建</button>
        ))
        ReactDOM.render(eles, gameContext.gameArea)
    }
    enterWorld(channel, playerId) {
        const roleLoginReq = protocalManager.create(proto.RoleLoginReq);
        roleLoginReq.setPlayerId(playerId);
        channel.write(roleLoginReq);
    }

}
export const roleController = new RoleController();