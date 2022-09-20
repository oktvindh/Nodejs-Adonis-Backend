//soal 1
export const sapa = (name) => {
    return `Halo selamat pagi, ${name}!`
}

//soal 2
export const biodata = (nama, domisili, umur) => {
    return {
        nama,
        domisili,
        umur
    }
}

//soal 3
export const checkScore = (str) => {
   const nama1 = str.split(',')[0].split(':')[1];
   const kelas = str.split(',')[1].split(':')[1];
   const score = str.split(',')[2].split(':')[1];

   return {
    nama1,
    kelas,
    score
   }
}

//soal 4
export const filterData = (arr) => {
    const data = [
        { name: "Ahmad", kelas: "adonis"},
        { name: "Regi", kelas: "laravel"},
        { name: "Bondra", kelas: "adonis"},
        { name: "Iqbal", kelas: "vuejs" },
        { name: "Putri", kelas: "Laravel" }
    ];

    return data.filter((a) => {
        return a.kelas.toLowerCase() === arr.toLowerCase();
    });
    
};