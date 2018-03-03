import express from "express";
import TenantInit from "../models/TenantInit";
const router =  express.Router();
router.post("/",(req,res)=>{
	var query = {'_id':req.body.tenant.id};
	var newTenant = req.body.tenant;
	//update function has some problem here need to check
	TenantInit.findOneAndUpdate(query,newTenant,function(err,newTenant){
		if(err){
			res.status(400).json({errors:{global:"update fatal error"}});
		}
		else{
			res.status(200).json({info:{global:"Save Successful"}});
		}
	});
});

export default router;