// Obtém dados da localidade
console.log(new Intl.DateTimeFormat().resolvedOptions())

// Exibindo dats com intl
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date))
console.log(new Intl.DateTimeFormat("en-US").format(new Date))