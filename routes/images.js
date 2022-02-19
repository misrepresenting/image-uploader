const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const images = fs.readdirSync('././images');
const parentPath = path.resolve(__dirname, '..');
const imagePath = path.join(parentPath, '/images');

images.forEach((image) => {
	router.get('/' + image, (req, res) => {
		res.sendFile(path.join(imagePath + '/' + image));
	});
	//fs.readFileSync(path.join(imagePath + '/' + image)));
});

module.exports = router;
