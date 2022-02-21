import express from "express";
import {ApiRouter} from "./routes/api.js";
import {ImageRouter} from "./routes/images.js";
import {rootPath} from "./constants.js";

const app = express();
const port = 80;

app.use('/api', ApiRouter);
app.use('/images', ImageRouter);
app.use(express.static(rootPath + '/public'));

app.listen(port,"0.0.0.0", (error) => console.log(error ? 'error' : 'server started'));
