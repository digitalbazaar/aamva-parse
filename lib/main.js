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
  const dob = _parseDate({dateString: dobCaptures[1].trimEnd()});
  const docId = docIdCaptures[1].trimEnd();
  const expiration = _parseDate({dateString: expirationCaptures[1].trimEnd()});
  const issuerState = issuerStateCaptures[1].trimEnd();

  return {
    dob,
    docId,
    expiration,
    issuerState
  };
}

function _parseDate({dateString}) {
  const possibleMonth = parseInt(dateString.substr(0, 2));
  const isMonth = possibleMonth <= 12;
  if(isMonth) {
    return dateString;
  }
  const yearPart = dateString.substr(0, 4);
  const monthAndDay = dateString.substr(4);
  return `${monthAndDay}${yearPart}`;
}
