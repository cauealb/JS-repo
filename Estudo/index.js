const aniversario = new Date("2025-03-01T05:05:05");

// Formatando o dia com um zero na frente
const day = aniversario.getDate().toString().padStart(2, "0")

// Formatando o mês com um zero na frente
const month = (aniversario.getMonth() + 1).toString().padStart(2, "0");

// Pega o horario, ano e minuto, para aparecer em diferentes posições
const year = aniversario.getFullYear()
const hours = aniversario.getHours()
const minutes = aniversario.getMinutes()

console.log(month)