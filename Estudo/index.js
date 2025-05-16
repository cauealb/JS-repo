const date =  document.querySelector("p");
console.log(date)

date.textContent = new Date().toLocaleDateString("pt-BR")