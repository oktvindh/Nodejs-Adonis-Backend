function balikKata(kata) {
    var kataBaru = "";
    for (var i = kata.length - 1; i >= 0; i--) {
        kataBaru += kata[i];
    }
    return kataBaru;
}
console.log(balikKata("SanberCode"));
console.log(balikKata("racecar"));
console.log(balikKata("Kasur rusak"));
console.log(balikKata("Haji ijah"));
console.log(balikKata("I am Sanbers"));


