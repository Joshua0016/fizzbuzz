

module.exports = function game(){
    
let prompt = require("prompt-sync")();
let input = prompt();
let arrayNumbers = new Array(input);
let increase = 1;

for(let i = 0; i < input; i++){
    arrayNumbers[i] = increase;
    increase += 1;
}

    let results = [];
    let counterTwo = 0;
    console.log("----GAME START----\n");
    outerLoop: //etiqueta para poder salir de varios niveles de bucles
    for (let i of arrayNumbers){
        let input = prompt();
        results.push(input.toLocaleLowerCase());
    
        
        switch(true){
              //El usuario pierde si no reemplaza las palabras por los númneros correspondientes
              case (parseInt(input) % 3 === 0 && parseInt(input) % 5 === 0):
                console.log("Game over");
                break outerLoop;
            case (parseInt(input) % 3 === 0):
                console.log("Game over");
                break outerLoop;
            case (parseInt(input) % 5 === 0):
                console.log("Game over");
                break outerLoop;
            //Asegurando cada caso "fizzbuzz, fizz y buzz"
            case (i % 3 === 0 && i % 5 === 0 && results[counterTwo] === "fizzbuzz"):
                counterTwo += 1;
                break;
            case (i % 5 === 0 && results[counterTwo]==="buzz"):
                counterTwo += 1;
                break;
            case (i % 3 === 0 && results[counterTwo] === "fizz"):
                counterTwo += 1;
                break;
                   //Asegurando que el usuario siga la sencuencia de números correctamente
            case (parseInt(input) != i):
                console.log("Game over")
                break outerLoop;
              
            default:
                counterTwo += 1;
                break;
                    
        }
    
    }
    
    console.log("\nResultados\n");
    for (let i of results){
        process.stdout.write(" "+i +"");
    }
        
    }