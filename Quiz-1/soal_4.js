function graduate(arr) {

    // code di sini
    var myArr = {
        myArr_participated : [],
        myArr_completed : [],
        myArr_mastered : []
    };
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i].score < 60){
            myArr.myArr_participated.push(arr[i]);
        } else if (arr[i].score >= 60 && arr[i].score <= 85){
            myArr.myArr_mastered.push(arr[i]);
        } else if (arr[i].score > 85) {
            myArr.myArr_completed.push(arr[i]);
        }
    }
    return myArr;
}

// TEST CASE
// Contoh Input

var arr = [

    {name:"Ahmad",score:80, class: "Laravel"},
    
    {name:"Regi",score:86, class: "Vuejs"},
    
    {name:"Robert",score:59, class: "Laravel"},
    
    {name:"Bondra",score:81, class: "Reactjs" }
    
]
    
console.log(graduate(arr));
    
    
    
   
    
 