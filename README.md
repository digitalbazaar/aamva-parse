# aamva-parse _(@digitalbazaar/aamva-parse)_

> JavaScript library for parsing data scanned from aamva-compliant driver's license

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Commercial Support](#commercial-support)
- [License](#license)


## Install

To install from `npm`:

```
npm install @digitalbazaar/aamva-parse
```

To install locally (for development):

```
git clone https://github.com/digitalbazaar/aamva-parse.git
cd aamva-parse
npm install
```

## Usage

```js
import {parse} from '@digitalbazaar/aamva-parse';

const t = parse({text: scannedText});

// Example output
// t -> { dob: '10311958', docId: '123456-789', expiration:'10312021', issuerState: 'WY' }
```

## Contribute

Please follow the existing code style.

PRs accepted.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

[BSD-3-Clause](LICENSE.md) © 2021 Digital Bazaar
