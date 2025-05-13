// Achando um index de um Array
const arrFruits = ["Banana", "Lemon", "Orange"]

if(arrFruits.includes("Lemon")) {
    console.log(arrFruits.indexOf("Lemon"))
} else {
    console.log("Não exitem dados!")
}

// Utilizando a função splice
arrFruits.splice(1, 2)
console.log(arrFruits)