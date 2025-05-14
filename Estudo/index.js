const aniversario = new Date("2025-03-20T20:05:05");

// Formatando o dia com um zero na frente
const day = aniversario.getDate().toString().padStart(2, "0")

// Formatando o mês com um zero na frente
const month = (aniversario.getMonth() + 1).toString().padStart(2, "0");

// Pega o horario, ano e minuto, para aparecer em diferentes posições
const year = aniversario.getFullYear()
const hours = aniversario.getHours().toString().padStart(2, "0")
const minutes = aniversario.getMinutes().toString().padStart(2, "0")

// Exibindo o momento do dia
let controler = ""
if(hours < 12) {
    controler = "da manhã";
} else if(hours < 18) {
    controler = "da tarde";
} else {
    controler = "da noite"
}

// Exibe as variáveis de formas diferentes
console.log(`${day}/${month}/${year} ás ${hours}h${minutes} ${controler}`)