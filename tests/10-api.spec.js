/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
import {parse} from '..';
import fs from 'fs';
import path from 'path';

const {readdir, readFile} = fs.promises;

async function _processFolder(folder, validate) {
  const files = await readdir(folder);
  for(const file of files) {
    const textPath = path.join(folder, file);
    const content = await readFile(textPath, 'utf-8');
    const parsedContent = parse({text: content});
    validate(parsedContent);
  }
}

describe('parse test', () => {
  it('should parse good samples', async function() {
    let successes = 0;
    let files = 0;
    const folder = path.join(__dirname, 'good-licenses');
    await _processFolder(folder, file => {
      files++;
      if(file) {
        file.dob.should.be.a('string');
        file.docId.should.be.a('string');
        file.expiration.should.be.a('string');
        file.issuerState.should.be.a('string');
        successes++;
      }
    });
    console.log(`SUCCESSES: ${successes} / ${files}`);
  });
  it('should throw error if one of the required fields is missing',
    async function() {
      const folder = path.join(__dirname, 'bad-licenses');
      let err;
      try {
        await _processFolder(folder);
      } catch(e) {
        err = e;
      }
      should.exist(err);
      err.message.should.equal(
        'Failed to parse the mandatory fields: "dob", "docId", "expires", ' +
          '"issuerState".');
    });
});
