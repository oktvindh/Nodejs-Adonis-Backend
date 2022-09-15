function makeRectangle(panjang,lebar) {
    // your code 
    for(var i = 0; i < lebar; i++){
      var baris = "";
      for(var j = 0; j < panjang; j++){
          baris += "#";
      }
      console.log(baris);
    }
}
  
  // TEST CASE 
makeRectangle(8,4);