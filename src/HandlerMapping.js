import { loginController } from "./logic/controller/LoginController";
import { roleController } from "./logic/controller/RoleController";
import { mapController } from "./logic/controller/MapController";



export const handlers=new Map();
handlers.set(proto.LoginResp,loginController.logResp);
handlers.set(proto.RoleListResp,roleController.roleList); 
handlers.set(proto.RegionEnterResp,mapController.regionUpdate); 
handlers.set(proto.CreateRoleResp,roleController.createRoleResp); 
handlers.set(proto.PlayerEnterWorldResp,mapController.enterWorldResp); 