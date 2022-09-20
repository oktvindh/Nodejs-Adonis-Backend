function tandaiA(str) {

    // code di sini
    var string = " ";
    for(var i = 0; i <= str.length; i++){
        if(str[i] == "a"){
            string += "x";
        } else {
            string == str[i];
        }
    }
    return string;
    
}
    
    // Tes Cases
    console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
    console.log(tandaiA("garuda")) // gxrudx
    console.log(tandaiA("kucing")) // kucing