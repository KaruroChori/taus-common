import { promises as fs } from 'fs';
import initModels from "./db-schemas/init-models.js"
import { Sequelize, Op, Model, DataTypes } from 'sequelize';


let API = []

let files = await fs.readdir('./api-schemas/');

for(const f in files) {
	API[files[f]] = JSON.parse(await fs.readFile(`./api-schemas/${files[f]}`));
}

console.log(API)

export const tausCommon = {
	apiSchemas: API,
	dbSchemas: initModels
}