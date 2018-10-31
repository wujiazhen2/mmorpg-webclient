import { BaseMap } from "../map/BaseMap";
import { gameContext } from "../../GameContext";

class MapController{

    enterWorldResp(channel,resp){
        gameContext.createCanvas();
        new BaseMap(resp.getSceneId());
    }
    regionUpdate(channel,resp){
        console.log(resp);
    }
}
export let mapController = new MapController();