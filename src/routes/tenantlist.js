import express from "express";
import TenantInit from "../models/TenantInit";

const router =  express.Router();

router.get("/",(req,res)=>{
    var data = [];
	TenantInit.find({}).then(tenantinit=>{
		for(var r in tenantinit){
			data.push(tenantinit[r].toTenantJson());
		}
		res.json({tenantinit:data});
	});
});

export default router;