const date = new Date(2025, 10, 12, 20, 45, 6);

// Exibindo a data em formate da minha região
console.log(date.toLocaleDateString())
// Exibindo a hora em formate da minha região
console.log(date.toLocaleTimeString())


// Exibindo a data em formato americano
console.log(date.toLocaleDateString("en"))