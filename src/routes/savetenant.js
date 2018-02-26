import express from "express";
import TenantInit from "../models/TenantInit";
const router =  express.Router();
router.post("/",(req,res)=>{
    var newTenant = req.body.tenant;
	TenantInit.create(newTenant,function(err,newTenant){
		if(err){
			res.status(400).json({errors:{global:"Invalid credentials"}});
		}
		else{
			res.status(200).json({info:{global:"Save Successful"}});
		}
	});
});

export default router;