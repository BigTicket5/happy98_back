import mongoose from "mongoose";
import bcrypt  from "bcrypt";
import jwt from 'jsonwebtoken';

const schema = new mongoose.Schema(
	{
		email:{type:String,required:true,lowercase:true},
		passwordHash:{type:String,required:true},
		role:{
			roleId:{type:Number,required:true},
			roleName:{type:String,required:true}
		}
	},
	{
		timestamps:true
	}
);

schema.methods.generateJWT = function generateJWT(){
	return jwt.sign({
		email:this.email
	}, process.env.JWT_SECRET)
};

schema.methods.isValidPassword = function isValidPassword(password){
	//return bcrypt.compareSync(password,this.passwordHash);
	return password===this.passwordHash;
};

schema.methods.toAuthJSON = function toAuthJSON(){
	return {
		email: this.email,
		token: this.generateJWT(),
		role:  this.role
	}
};

export default mongoose.model('User',schema);