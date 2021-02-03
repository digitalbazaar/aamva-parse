const docIdRegex = /DAQ(.*)\n/;
const dobRegex = /DBB(.*)\n/;
const expirationRegex = /DBA(.*)\n/;

export function parse({text}) {
  const docIdCaptures = text.match(docIdRegex);
  const dobCaptures = text.match(dobRegex);
  const expirationCaptures = text.match(expirationRegex);
  const dob = dobCaptures[1].trimEnd();
  const docId = docIdCaptures[1].trimEnd();
  const expiration = expirationCaptures[1].trimEnd();
  return {
    dob,
    docId,
    expiration,
  };
}
