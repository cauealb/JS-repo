const date = new Date(2025, 2, 20, 12, 12, 12);

// Exibindo data como  short no toLocaleString
console.log(date.toLocaleString("pt-BR", {
    dateStyle: "short"
}))

// Exibindo data como long no toLocaleString
console.log(date.toLocaleString("pt-BR", {
    dateStyle: 'full'
}))