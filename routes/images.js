import express from "express";
import * as path from "path";
import {imagePath} from "../constants.js";

const router = express.Router();


router.get("/:image",(req,res)=>{
	res.sendFile(path.join(imagePath,req.params.image.replaceAll(/(\/\\\.)+/gm,"")));
})

export {router as ImageRouter};
