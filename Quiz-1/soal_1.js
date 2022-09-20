function kelompokAngka(arr){
    //Code disini
    var hasil = [[],[],[]];
    arr.forEach(angka => {
        if(angka % 3 == 0){
            hasil[2].push(angka); // kelipatan tiga, kelompok 3
        } else if(angka % 2 == 0){
            hasil[1].push(angka); // angka genap kelompok 2
        } else {
            hasil[0].push(angka); // angka ganjil kelompok 1
        }
    })
    return hasil;
    
}
    
    //Test Case
    
console.log(kelompokAngka([1,2,3,4,5,6,7]))
    
    //Output:[[1,5,7],[2,4],[3,6]]
    
console.log(kelompokAngka([13,27,11,15]))
    
    //Output:[[13,11],[],[27,15]]
    
console.log(kelompokAngka([]))
    
    //output:[[],[],[]]