import express from "express";
import RentalProperty from "../models/RentalProperty";

const router =  express.Router();

router.get("/",(req,res)=>{
	var data = [];
	RentalProperty.find({}).then(rentinit=>{
	});
});

export default router;