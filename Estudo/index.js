const aniversario = new Date("2025-03-01T05:05:05");

// Formatando o dia com um zero na frente
const day = aniversario.getDate().toString().padStart(2, "0")

console.log(day)