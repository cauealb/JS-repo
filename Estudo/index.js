const pessoa = {
    name: "Cauê",
    age: 19,
}

localStorage.setItem("json", JSON.stringify(pessoa))

console.log(JSON.stringify(pessoa))