// Adicionando classes já existentes em um elemento
const input1 = document.querySelector("#task")

input1.classList.add("input-error")

// Removendo classes já existentes em um elemento
// input1.classList.remove("input-error")

// Usando a função toggle para verificar se tem a classe, se tiver ele remove, se não ele adiciona
input1.classList.toggle("input-error")