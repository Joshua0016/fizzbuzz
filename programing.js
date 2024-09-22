console.log("\nReglas del juego:\n");
console.log("1. El jugador debe de ingresar hasta qué cantidad de números desea contar");
console.log("2. Mientras el jugador esté contando debe de sustituir el número divisible entre 3 por la palabra 'fizz'");
console.log("3. Si el número es divisible entre 5 debe de sustituirlo por la palabra 'buzz'");
console.log("4. Si el número es divisible entre 3 y 5 el jugador debe de escribir 'fizzbuzz'")



process.stdout.write("\nIngresa hasta qué cantidad desea contar :\n");




const game = require("./game");

game();



