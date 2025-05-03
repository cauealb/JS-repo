const listTask = document.querySelector("ul");

const newTask = document.createElement("li");
newTask.classList.add("guest")
const newTaksName = document.createElement("span");

newTaksName.textContent = "Cauê";
newTask.append(newTaksName);

listTask.append(newTask);