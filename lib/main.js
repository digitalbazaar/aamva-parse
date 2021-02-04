/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const docIdRegex = /DAQ([^\n|]*)[\n|]/;
const dobRegex = /DBB([^\n|]*)[\n|]/;
const expirationRegex = /DBA([^\n|]*)[\n|]/;

export function parse({text}) {
  const docIdCaptures = text.match(docIdRegex);
  const dobCaptures = text.match(dobRegex);
  const expirationCaptures = text.match(expirationRegex);

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
