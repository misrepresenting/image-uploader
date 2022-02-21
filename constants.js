import * as Path from "path";
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const rootPath = __dirname

export const imagePath = Path.join(__dirname,"./images")
