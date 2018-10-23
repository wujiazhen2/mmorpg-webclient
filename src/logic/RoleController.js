import { gameContext } from "../GameContext";
import {React} from "react";


class RoleController extends React{
    roleList(channel,resp){
        gameContext.clear();
        resp.getPlayerInfos().forEach(element => {      
            gameContext.appenderElement((
                <div id={element.getPlayerId()}>{element.getName()}</div>
            ))
        });
    }
}
export const roleController=new RoleController();