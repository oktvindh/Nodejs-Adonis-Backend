function makeLadder(sisi) {
    // your code 
    for(i = 1; i <= sisi; i++){ 
        var pagar = "";   
        for(j = 1; j <= i; j++){
            pagar += "#"
        }
        console.log(pagar);
    }
}
  
  // TEST CASE
makeLadder(7);