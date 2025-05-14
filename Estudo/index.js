const aniversario = new Date("2025-03-01T05:05:05");

// Formatando o dia com um zero na frente
const day = aniversario.getDate().toString().padStart(2, "0")

// Formatando o mês com um zero na frente
const month = (aniversario.getMonth() + 1).toString().padStart(2, "0");

console.log(month)