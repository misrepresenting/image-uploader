import express from "express";
import multer from "multer";
import * as Path from "path";
import {imagePath} from "../constants.js";
import * as fs from 'fs'
import * as crypto from 'crypto'

const router = express.Router();
const upload = multer();

router.get('/images', (req, res) => {
	const images = fs.readdirSync('./images');

	res.json(images);
});

/* return a url link to the image */
router.post('/post-image', upload.single('sharex'), (req, res) => {
	console.log('posted');
	if (req.headers['api-key'] !== 'spooky') {
		res.send('lmao no');
		return;
	}

	const fileName = crypto.randomBytes(20).toString('hex') + '.png';

	const protocol = req.protocol;
	const host = req.hostname;

	const fullUrl = `${protocol}://${host}/images`;

	fs.writeFileSync(Path.join(imagePath,fileName), req.file.buffer);
	res.send(fullUrl + '/' + fileName);
});

export {router as ApiRouter};
