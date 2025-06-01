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
// const some = estoque.some((item) => item.name === 'Papel')
// console.log(some)

// Usando o every
// const every = estoque.every((item) => {
//     return item.price > 5
// })

// console.log(every)

// Usando o map
// const map = estoque.map((item) => {
//     return {
//         ...item,
//         valorTotal: (item.quantity === 0 ? false : true)
//     }
// })
// console.log(map)

// Usando o filter
// const filter = estoque.filter((item) => {
//     return item.name.startsWith('i')
// })

// console.log(filter)

// Usando o reducer
const reduce = estoque.reduce((accummulator, item) => {
    return accummulator + item.quantity
}, 0)   

console.log(reduce)