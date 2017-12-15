import express from "express";
import RentInit from "../models/RentInit";

const router =  express.Router();

router.get("/",(req,res)=>{
	var data = [];
	RentInit.find({}).then(rentinit=>{
		for(var r in rentinit){
			data.push(rentinit[r].toRentInitJSON());
		}
		res.json({rentinit:data});
	});
});

export default router;