function naikAngkot(listPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
    var output = [];
    for (var i = 0; i < listPenumpang.length; i++) {
      var current = listPenumpang[i];
      var obj = {
        penumpang: current[0],
        naikDari: current[1],
        tujuan: current[2]
      };
      var bayar = (rute.indexOf(current[2]) - rute.indexOf(current[1])) * 2000;
      obj.bayar = bayar;
      output.push(obj);
    }
    return output;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); 