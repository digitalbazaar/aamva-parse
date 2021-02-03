// eslint-disable-next-line max-len
// FIXME: https://stackoverflow.com/questions/64261239/mocha-tests-with-esm-support-for-native-es6-modules

import {parse} from '..';

// VA issued 2021
// eslint-disable-next-line max-len
const sample1 = `@\n\u001e\rANSI 636000030001DL00310447DLDCADM2 \nDCBNONE      \nDCDNONE \nDBA12302028\nDCSBROWN                                 \nDCTMATTHEW,ALAN                                                                    \nDBD01052021\nDBB12301970\nDBC1\nDAYGRN\nDAU072 in\nDAG10 ELM LN                        \nDAILEXINGTON           \nDAJVA\nDAK244507000  \nDAQT65903333                \nDCF087482850                \nDCGUSA\nDCHD   \nDDC00000000\nDDB12102008\nDDDN\nDDAN\nDCK0060101594126677         \nDCADM2 \r`;

// VA issued 2014
// eslint-disable-next-line max-len
const sample2 = `@\n\u001e\rANSI 636000030001DL00310440DLDCAM2  \nDCBNONE      \nDCDNONE \nDBA12302020\nDCSBROWN                                 \nDCTMATTHEW,ALAN                                                                    \nDBD08272014\nDBB12301970\nDBC1\nDAYGRN\nDAU072 in\nDAG110 OAK ST                     \nDAISTAUNTON            \nDAJVA\nDAK244014120  \nDAQT65903333                \nDCF072655761                \nDCGUSA\nDCHNONE\nDDC00000000\nDDB12102008\nDDDN\nDDAN\nDCK0060100726807477         \n\r`;

describe('parse test', () => {
  it('parses sample1', async () => {
    const t = parse({text: sample1});
    t.should.eql({
      dob: '12301970',
      docId: 'T65903333',
      expiration: '12302028'
    });
  });
  it('parses sample2', async () => {
    const t = parse({text: sample2});
    t.should.eql({
      dob: '12301970',
      docId: 'T65903333',
      expiration: '12302020'
    });
  });
});
