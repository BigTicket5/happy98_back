import mongoose from "mongoose";

const schema = new mongoose.Schema(
	{
		tenant:{type:String,required:true},
		rentfee:{type:Number,required:true}
	}
);

schema.methods.toRentInitJSON = function toRentInitJSON(){
	return {
		tenant: this.tenant,
		rentfee: this.rentfee
	}
};

export default mongoose.model('RentInit',schema,'rentinit');