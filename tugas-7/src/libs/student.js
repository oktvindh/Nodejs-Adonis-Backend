export default class Student {
    constructor(nama) {
      this._name = nama;
    }
    get finalscore() {
      return this._finalScore;
    }
    set finalscore(x) {
      this._finalScore = x;
    }
}