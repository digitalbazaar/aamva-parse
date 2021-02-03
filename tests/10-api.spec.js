// eslint-disable-next-line max-len
// FIXME: https://stackoverflow.com/questions/64261239/mocha-tests-with-esm-support-for-native-es6-modules

import {parse} from '..';

// VA issued 2021
// eslint-disable-next-line max-len
const sample1 = `@\n\u001e\rANSI 636000030001DL00310447DLDCADM2 \nDCBNONE      \nDCDNONE \nDBA12302028\nDCSBROWN                                 \nDCTMATTHEW,ALAN                                                                    \nDBD01052021\nDBB12301970\nDBC1\nDAYGRN\nDAU072 in\nDAG10 ELM LN                        \nDAILEXINGTON           \nDAJVA\nDAK244507000  \nDAQT65903333                \nDCF087482850                \nDCGUSA\nDCHD   \nDDC00000000\nDDB12102008\nDDDN\nDDAN\nDCK0060101594126677         \nDCADM2 \r`;

// VA issued 2014
// eslint-disable-next-line max-len
const sample2 = `@\n\u001e\rANSI 636000030001DL00310440DLDCAM2  \nDCBNONE      \nDCDNONE \nDBA12302020\nDCSBROWN                                 \nDCTMATTHEW,ALAN                                                                    \nDBD08272014\nDBB12301970\nDBC1\nDAYGRN\nDAU072 in\nDAG110 OAK ST                     \nDAISTAUNTON            \nDAJVA\nDAK244014120  \nDAQT65903333                \nDCF072655761                \nDCGUSA\nDCHNONE\nDDC00000000\nDDB12102008\nDDDN\nDDAN\nDCK0060100726807477         \n\r`;

// Florida issued 2018
// eslint-disable-next-line max-len
const sample3 = `@\n\u001e\rANSI 636010090002DL00410257ZF02980067DLDAQX485012001000  \nDCSJOHN  \nDDEN  \nDACDOE  \nDDFN  \nDADORI  \nDDGN  \nDCAE  \nDCBA  \nDCDNONE  \nDBD08262018  \nDBB08301980 \nDBA01102027 \nDBC2  \nDAU065 IN\nDAG1208 C HILL AVE 822  \nDAITAMPA  \nDAJFL  \nDAK345026628  \nDCFK711568218311  \nDCGUSA  \nDCK0109328184918218\nDDAF\nDDB03162017\nDDK1\rZFZFA\nZFB\nZFCSAFE DRIVER\nZFD\nZFE\nZFF\nZFG\nZFH\nZFI\nZFJ0218157266\nZFK\r`;

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
  it('parses sample3', async () => {
    const t = parse({text: sample3});
    t.should.eql({
      dob: '08301980',
      docId: 'X485012001000',
      expiration: '01102027'
    });
  });
});
