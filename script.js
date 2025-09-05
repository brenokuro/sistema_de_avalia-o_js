const mensagens = [
  "Sentimos muito pela sua experiência negativa", // índice 0
  "Que pena que sua experiência não foi boa",      // índice 1
  "Obrigado pelo seu feedback",                   // índice 2
  "Ficamos felizes que sua experiência foi boa, vamos melhorar ainda mais", // índice 3
  "Que ótimo que sua experiência foi excelente",   // índice 4
  "Uau! Ficamos muito felizes com sua experiência excelente" // índice 5
]

let nota = 1

function avaliar() {
  console.log(mensagens[nota])
}

avaliar()
