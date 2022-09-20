"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sapa = exports.filterData = exports.checkScore = exports.biodata = void 0;

//soal 1
var sapa = function sapa(name) {
  return "Halo selamat pagi, ".concat(name, "!");
}; //soal 2


exports.sapa = sapa;

var biodata = function biodata(nama, domisili, umur) {
  return {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
}; //soal 3


exports.biodata = biodata;

var checkScore = function checkScore(str) {
  var nama1 = str.split(',')[0].split(':')[1];
  var kelas = str.split(',')[1].split(':')[1];
  var score = str.split(',')[2].split(':')[1];
  return {
    nama1: nama1,
    kelas: kelas,
    score: score
  };
}; //soal 4


exports.checkScore = checkScore;

var filterData = function filterData(arr) {
  var data = [{
    name: "Ahmad",
    kelas: "adonis"
  }, {
    name: "Regi",
    kelas: "laravel"
  }, {
    name: "Bondra",
    kelas: "adonis"
  }, {
    name: "Iqbal",
    kelas: "vuejs"
  }, {
    name: "Putri",
    kelas: "Laravel"
  }];
  return data.filter(function (a) {
    return a.kelas.toLowerCase() === arr.toLowerCase();
  });
};

exports.filterData = filterData;