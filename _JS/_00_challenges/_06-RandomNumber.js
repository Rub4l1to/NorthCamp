// Random ========================================
// Crea una función que imprima un número aleatorio del 0-10 cada vez que se llama.
// La función no debe repetir ningún número y si no quedan números, debe informar al usuario de que no queda ningún número

let digits = [];

const generateNumber = () => (Math.random() * (10 - 0)).toFixed(0);

const checkIfExist = (number) => digits.includes(number);

function randomNumber(number) {
    if (digits.length !== 10) {
        if (checkIfExist(number)) 
            randomNumber(generateNumber());
        else{
            digits.push(...number);
            console.log(`El número aleatorio generado es: ${number}`);
        }
    }else
        console.log(`No queda ningun numero`);
   
}

randomNumber(generateNumber());
randomNumber(generateNumber());
randomNumber(generateNumber());
randomNumber(generateNumber());
randomNumber(generateNumber());
randomNumber(generateNumber());
randomNumber(generateNumber());
randomNumber(generateNumber());
randomNumber(generateNumber());
randomNumber(generateNumber());
randomNumber(generateNumber());