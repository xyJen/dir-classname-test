import { writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));

for (let index = 0; index < 300; index++) {
  writeFile(`./src/large-file-test/${uuidv4()}.png`, data);
}