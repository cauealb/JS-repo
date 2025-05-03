const listTask = document.querySelector("ul");

const newTask = document.createElement("li");
const newTaksName = document.createElement("span");

newTaksName.textContent = "Cauê";
newTask.append(newTaksName);

listTask.append(newTask);