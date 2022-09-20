var vokal = ["a","i","u","e","o"];
function hitungVokal(str){
    //code disini
    var flag = 0;

    for (var kata of str.toLowerCase()) {
        if (vokal.includes(kata)) {
            flag++;
        }
    }

    return flag;
    
}
    
    // Test Cases
    
    console.log(hitungVokal("Adonis"))// Output:3
    
    console.log(hitungVokal("Error"))//Output:2
    
    console.log(hitungVokal("Eureka"))//Output:4
    
    console.log(hitungVokal("Rsch")) // Output: 0
    
    