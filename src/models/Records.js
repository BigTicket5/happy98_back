import mongoose from "mongoose";
const schema = new mongoose.Schema(
	{
		tenant:{type:String,required:true},
		finalbilling:{type:Number,required:true}
	}
);

export default mongoose.model('Records',schema,'records');