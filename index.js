import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import {dirname} from 'path';
import initModels from "./db-schemas/init-models.js"
import { Sequelize, Op, Model, DataTypes } from 'sequelize';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let API = []

let files = await fs.readdir(__dirname+'/api-schemas/');

for(const f in files) {
	API[files[f]] = JSON.parse(await fs.readFile(`${__dirname}/api-schemas/${files[f]}`));
}

//console.log(API)

export const tausCommon = {
	apiSchemas: API,
	dbSchemas: initModels
}
