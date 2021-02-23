// Получить 2-а числа и проверить на корректность
let firstNumber; 

do {
    firstNumber = +prompt("Enter the first number");
} while (!Number.isInteger(firstNumber));

let secondNumber;

do {
    secondNumber = +prompt(`Your first number ${firstNumber}, enter the second number greater than the first`);
} while (!Number.isInteger(secondNumber));

// получить ответ у пользователя пропускать парные числа или нет
const evenPass = confirm(`Skip the couple numbers?`);

// расчет суммы чисел в зависимости от ответа evenPass
let sumEven = 0;

    for(var i = firstNumber; i <= secondNumber; i++){
        if (evenPass === true) {
            if(i % 2 === 0) {
                continue;			
            } 
            sumEven += i;
        }   else {
            sumEven += i;
        }
    }


document.write(`Перше число: ${firstNumber} <br/> Друге число: ${secondNumber} <br/> Пропускати парні числа?: ${evenPass} <br/> Сума: ${sumEven}`);

console.log(`Перше число: ${firstNumber} 
Друге число: ${secondNumber}
Пропускати парні числа?: ${evenPass}
Cума: ${sumEven}`
);