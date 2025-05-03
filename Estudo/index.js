const listTask = document.getElementsByTagName("ul");

const newTask = document.createElement("li");
const newTaksName = document.createElement("span");

newTaksName.textContent = "Cauê";
newTask.append(newTaksName);

console.log(newTask);