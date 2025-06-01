// Usando o método find
const estoque = [
    {name: 'iPhone 16 Pro Max', price: 8000, quantity: 2},
    {name: 'MacBook Pro', price: 20000, quantity: 1},
    {name: 'iPhne 11', price: 3000, quantity: 1},
    {name: 'Xaiomi', price: 1500, quantity: 5},
    {name: 'Máquina de lavar', price: 3000, quantity: 0},
    {name: 'Pai rico Pai pobre', price: 50, quantity: 10},
    {name: 'Caderno', price: 15, quantity: 2},
]

// const find = estoque.find((item) => item.price > 1500)
// console.log(find)

// Usando o findIndex
// const findIndex = estoque.findIndex((item) => {
//     return item.quantity === 0
// })
// console.log(findIndex)

// Usando o some
const some = estoque.some((item) => item.name === 'Papel')
console.log(some)