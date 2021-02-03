import {parse} from '..';
import fs from 'fs';
import path from 'path';

const {readdir, readFile} = fs.promises;

async function _processFolder({folder}) {
  const files = await readdir(folder);
  let successes = 0;
  for(const file of files) {
    const textPath = path.join(folder, file);
    const content = await readFile(textPath, 'utf-8');
    const t = parse({text: content});
    if(t) {
      t.dob.should.be.a('string');
      t.docId.should.be.a('string');
      t.expiration.should.be.a('string');
      successes++;
    }
  }
  console.log(`SUCCESSES: ${successes} / ${files.length}`);
}

describe('parse test', () => {
  it('parses samples', async function() {
    const folder = path.join(__dirname, 'licenses');
    await _processFolder({folder});
  });
});
