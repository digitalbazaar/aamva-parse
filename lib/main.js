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

  if(!(dobCaptures && docIdCaptures && expirationCaptures)) {
    throw new Error(
      'Failed to parse the mandatory fields: "dob", "docId", "expires"');
  }
  const dob = dobCaptures[1].trimEnd();
  const docId = docIdCaptures[1].trimEnd();
  const expiration = expirationCaptures[1].trimEnd();

  return {
    dob,
    docId,
    expiration,
  };
}
