
class ProtocalManager{

    constructor(){
        this.idToType=new Map();
        this.idToType.set(11111,require("./LoginReq_pb").LoginReq);
        this.idToType.set(11112,require("./LoginResp_pb").LoginResp);
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
