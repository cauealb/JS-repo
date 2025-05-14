const date = new Date(2025, 2, 20, 12, 12, 12);

// Exibindo data como  short no toLocaleString
console.log(date.toLocaleString("pt-BR", {
    dateStyle: "short"
}))

// Exibindo data como long no toLocaleString
console.log(date.toLocaleString("pt-BR", {
    dateStyle: 'full'
}))

// Exibindo dados que eu quero no toLocaleString
console.log(date.toLocaleString("pt-BR", {
    day: '2-digit',
    month: '2-digit',
    minute: '2-digit',
    year: "2-digit"
}))

// Usando o toLocaleString com variáveis qualquer
const moeda = 126.34
console.log(moeda.toLocaleString("pt-BR", {
    style: "currency",
    // Colocando como moeda brasileira
    currency: "BRL",
}))