const nameIput = document.getElementById("name");
const ageInput = document.getElementById("age");
const professioninput = document.getElementById("profession");
const btnJSON = document.getElementById("btnJSON");

btnJSON.addEventListener("click", (e) => {
    e.preventDefault();

    if(nameIput.value === "") {
        alert("Coloque seu nome!");
        nameIput.focus();

    } else if(ageInput.value === "") {
        alert("Coloque sua idade!");
        ageInput.focus();
        
    } else if (professioninput.value === "") {
        alert("Coloque sua profissão!");
        professioninput.focus()
    }
})

