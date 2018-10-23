global.proto=require("./proto_pb");
class ProtocalManager{

    constructor(){
        this.idToType=new Map();
        this.idToType.set(11111,proto.LoginReq);
        this.idToType.set(11112,proto.LoginResp);
        this.nameToType=new Map();
        let nameToType=this.nameToType;
        this.idToType.forEach(function(v,k,map){
            // nameToType.put
            nameToType.set(v,k);
        })
    }
    get(id){
       return  this.idToType.get(id);
    }
    getId(type){
        return this.nameToType.get(type);
    }
    create(type){
        let o=new type()
        o.messageId=this.getId(type);
        return o;
    }
}
export let protocalManager = new ProtocalManager();
