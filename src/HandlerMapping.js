import { loginController } from "./logic/controller/LoginController";
import { roleController } from "./logic/controller/RoleController";
import { positionController } from "./logic/controller/PositionController";



export const handlers=new Map();
handlers.set(proto.LoginResp,loginController.logResp);
handlers.set(proto.RoleListResp,roleController.roleList); 
handlers.set(proto.RegionEnterResp,positionController.regionUpdate); 