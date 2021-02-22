// Получить 2-а числа и проверить на корректность
let firstNumber; 

do {
    firstNumber = parseInt(prompt("Enter the first number"));
} while (Number.isNaN(firstNumber));

let secondNumber;

do {
    secondNumber = parseInt(prompt(`Your first number ${firstNumber}, enter the second number greater than the first`));
} while (Number.isNaN(secondNumber));

// получить ответ у пользователя пропускать парные числа или нет
const evenPass = confirm(`Skip even numbers?`);

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


document.write(`Перше число ${firstNumber}, <br/> Друге число ${secondNumber}, <br/> Булеве значення ${evenPass}, <br/> Сума  ${sumEven}`);

console.log(`Перше число: ${firstNumber}, 
Друге число: ${secondNumber},
Булеве значення: ${evenPass}, 
Cума: ${sumEven}`
);