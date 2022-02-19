const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const crypto = require('crypto');
const imageRouter = require('./images');

const parentPath = path.resolve(__dirname, '..');
const imagePath = path.join(parentPath, '/images');

const router = express.Router();
const upload = multer();

router.get('/images', (req, res) => {
	const images = fs.readdirSync('././images'); // string

	res.send(images);
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
	const url = req.originalUrl;

	const fullUrl = `${protocol}://${host}/images`;

	fs.writeFileSync('././images/' + fileName, req.file.buffer);
	imageRouter.get('/' + fileName, (req, res) => {
		res.sendFile(path.join(imagePath + '/' + fileName));
	});

	res.send(fullUrl + '/' + fileName);
});

module.exports = router;
