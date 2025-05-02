// const arrow = (exe, callback) => {
//     console.log(exe);

//     callback();
// }

function arrow(exe, callback) {
    console.log(exe);

    callback();
}

function execute() {
    console.log("Operação feita.");
}

arrow("Salvando arquivo...", execute);