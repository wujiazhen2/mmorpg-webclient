

class ListenerManager{
     constructor(){
         this.protocalHandlers=new Map();
     }
     register(type,handler){
         this.protocalHandlers.set(type,handler);
     }
     getHandler(type){
         return this.protocalHandlers.get(type);
     }
    
}
export let listenerManager = new ListenerManager();


