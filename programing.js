const prompt = require('prompt-sync')();
let counterOne = 0;
let increase = 1;

console.log("Ingresa hasta qué cantidad desea contar");
let input = prompt();
let arrayNumbers = new Array(input);

while(arrayNumbers.length < input){
    arrayNumbers[counterOne] = increase * 1;
    counterOne +=1;
    increase += 1;
}

let results = [];
let counterTwo = 0;

for (let i of arrayNumbers){
    let input = prompt();
    results.push(input.toLocaleLowerCase());

    if (i % 3 === 0 && i % 5 === 0 && results[counterTwo] === "fizzbuzz"){
        counterTwo += 1;
    }
    else  if (i % 5 === 0 && results[counterTwo] === "buzz"){
        counterTwo += 1;
    }
    else  if (i % 3 === 0 && results[counterTwo] === "fizz"){
        counterTwo += 1;
    }
    else  if (parseInt(input) % 3 === 0 && parseInt(input) % 5 === 0 && results[counterTwo] != "fizzbuzz"){
        console.log("Game over 0");
        break;
    }
    else  if (parseInt(input) % 3 === 0 && results[counterTwo] != "fizz"){
        console.log("Game over 1");
        break;
    }
    else  if (parseInt(input) % 5 === 0 && results[counterTwo] != "buzz"){
        console.log("Game over 2");
        break;
    }
    else if(isNaN(input)){
        console.log("Game over 3")
        break;
    }
    else if (parseInt(input) != i){
        console.log("Número incorrecto... Game over");
        break;
    }
    else counterTwo += 1;

}


console.log("\nResultados\n");
for (let i of results){
    process.stdout.write(" "+i);
}