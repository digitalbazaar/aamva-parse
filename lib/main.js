/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const docIdRegex = /DAQ([^\n|]*)[\n|]/;
const dobRegex = /DBB([^\n|]*)[\n|]/;
const expirationRegex = /DBA([^\n|]*)[\n|]/;
const issuerStateRegex = /DAJ([^\n|]*)[\n|]/;

export function parse({text}) {
  const docIdCaptures = text.match(docIdRegex);
  const dobCaptures = text.match(dobRegex);
  const expirationCaptures = text.match(expirationRegex);
  const issuerStateCaptures = text.match(issuerStateRegex);

  if(
    !(dobCaptures && docIdCaptures && expirationCaptures && issuerStateCaptures)
  ) {
    throw new Error(
      'Failed to parse the mandatory fields: "dob", "docId", "expires", ' +
        '"issuerState".');
  }
  const dob = dobCaptures[1].trimEnd();
  const docId = docIdCaptures[1].trimEnd();
  const expiration = expirationCaptures[1].trimEnd();
  const issuerState = issuerStateCaptures[1].trimEnd();

  return {
    dob,
    docId,
    expiration,
    issuerState
  };
}
