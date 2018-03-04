import mongoose from "mongoose";
const schema = new mongoose.Schema(
	{
        propertyId:{type:Number,required:true,index:true},
        owner:{
            oName:{type:String,required:true},
            oContact:{type:String,required:true},
            oIdentity:{type:String,required:true}
        },
		address:{type:String,required:true},
        rentalfee:{type:Number,required:true},
        htype:{type:String,required:false},
        roomNo:{type:Array,required:true}
	}
);

export default mongoose.model('RentalProperty',schema,'rentalproperty' );