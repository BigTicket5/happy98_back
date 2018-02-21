import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        tenantName:{type:String,required:true},
        rentFee:{type:Number,required:false,default:0},
        roomNo:{type:String,required:true},
        gender:{type:String,required:true},
        contactNo:{type:String,required:true}
    }
);

schema.methods.toTenantJson = function toTenantJson(){
    return{
        tenantName: this.tenantName,
        rentFee: this.rentFee,
        roomNo: this.roomNo,
        gender: this.gender,
        contactNo: this.contactNo
    }
};

export default mongoose.model('TenantInit',schema,'tenantinit' );