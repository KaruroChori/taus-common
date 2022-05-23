import { promises as fs } from 'fs';

let API = []

let files = await fs.readdir('./api-schemas/');

for(const f in files) {
	API[files[f]] = JSON.parse(await fs.readFile(`./api-schemas/${files[f]}`));
}

console.log(API)
