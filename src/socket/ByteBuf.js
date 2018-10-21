
export class ByteBuf{

    constructor(length){
        this.buffer = new ArrayBuffer(length);
        this.dv =new DataView(this.buffer);
        this.offset=0;
    }
    setInt64(value){
        this.dv.setInt64(this.offset,value);
        this.offset+=8;
    }
    setInt32(value){
        this.dv.setInt32(this.offset,value);
        this.offset+=4;
    }
    setInt16(value){
        this.dv.setInt16(this.offset,value);
        this.offset+=2;
    }
    setInt8(value){
        this.dv.setInt8(this.offset++,value);
    }
    setInt8Array(int8Array){
        int8Array.forEach(b => {
            this.dv.setUint8(this.offset++,b);
        });
    }

}