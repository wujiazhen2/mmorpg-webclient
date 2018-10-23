import { loginController } from "./logic/LoginController";
import { roleController } from "./logic/RoleController";



export const handlers=new Map();
handlers.set(proto.LoginResp,loginController.logResp);
handlers.set(proto.RoleListResp,roleController.roleList); 