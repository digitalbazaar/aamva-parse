/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const docIdRegex = /DAQ(.*)\n/;
const docIdRegex2 = /DAQ(.*)\|/;
const dobRegex = /DBB(.*)\n/;
const dobRegex2 = /DBB(.*)\|/;
const expirationRegex = /DBA(.*)\n/;
const expirationRegex2 = /DBA(.*)\|/;

export function parse({text}) {
  let docIdCaptures;
  let dobCaptures;
  let expirationCaptures;
  // in case of piped data
  if(text.startsWith('@||ANSI')) {
    docIdCaptures = text.match(docIdRegex2);
    dobCaptures = text.match(dobRegex2);
    expirationCaptures = text.match(expirationRegex2);
  } else {
    docIdCaptures = text.match(docIdRegex);
    dobCaptures = text.match(dobRegex);
    expirationCaptures = text.match(expirationRegex);
  }
  let dob;
  let docId;
  let expiration;

  if(dobCaptures) {
    dob = dobCaptures[1].trimEnd();
  }
  if(docIdCaptures) {
    docId = docIdCaptures[1].trimEnd();
  }
  if(expirationCaptures) {
    expiration = expirationCaptures[1].trimEnd();
  }

  return {
    dob,
    docId,
    expiration,
  };
}
