import express from 'express';
import path from "path";
import mongoose from "mongoose";
import auth from "./routes/auth";
import initrent from "./routes/getinit";
import saverecords from "./routes/saverecords";
import tenantlist from "./routes/tenantlist";
import savetenant from "./routes/savetenant";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Promise from "bluebird"; 
const app = express();
app.use(bodyParser.json());

dotenv.config();
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL,{useMongoClient:true});
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin',"*");
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
	next();
})


app.use('/api/auth',auth);
app.use('/initRent',initrent);
app.use('/saveRecords',saverecords);
app.use('/initTenant',tenantlist);
app.use('/saveTenant',savetenant);


app.get('/*',(req,res)=>{
	res.sendFile(path.join(__dirname,"index.html"));
})

app.listen(8000,() =>console.log('Running on localhost:8000'));