import express from "express";
import Records from "../models/Records";
const router =  express.Router();

router.post("/",(req,res)=>{
	var newRecords = req.body.records;
	Records.create(newRecords,function(err,newRecords){
		if(err){
			res.status(400).json({errors:{global:"Invalid credentials"}});
		}
		else{
			res.status(200).json({info:{global:"Save Successful"}});
		}
	});
});

export default router;