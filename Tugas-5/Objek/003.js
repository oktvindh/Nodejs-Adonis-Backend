function nilaiTertinggi(siswa) {
  var output = {}
  for (var i = 0; i < siswa.length; i++) {
    var current = siswa[i]
    if (!output[current.class]) {
      output[current.class] = {
        name: current.name,
        score: current.score
      }
    } else {
      if (current.score > output[current.class].score) {
        output[current.class] = {
          name: current.name,
          score: current.score
        }
      }
    }
  }
  return output
}

// TEST CASE
console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
]));