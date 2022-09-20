"use strict";

var _soal = require("./libs/soal");

var myArgs = process.argv;
var command = myArgs[2]; //sapa, biodata, checkScore

switch (command) {
  case 'sapa':
    //soal 1
    console.log((0, _soal.sapa)(myArgs[3]));
    break;

  case 'biodata':
    //soal 2
    console.log((0, _soal.biodata)(myArgs[3], myArgs[4], myArgs[5]));
    break;

  case 'checkScore':
    //soal 3
    console.log((0, _soal.checkScore)(myArgs[3]));
    break;

  case 'filterData':
    console.log((0, _soal.filterData)(myArgs[3]));
    break;

  default:
    break;
}