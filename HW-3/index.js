//Функція №1
// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8 

function getMaxDigit(num) {
    let result = 0;
    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        let digit = i % 10;
        if (result < digit) {
            result = digit;
        }
    }
    return result;
}
const num = 987256437498;
//const num = +prompt(`Function 1. Please enter a positive integer:`);
const maxNumbre = getMaxDigit(num);

// Функція №2
// //Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

//способ 1
function exponentiation(n,m) {
    var result = n;
    for (var i = 1; i < m; i++) {
        result *= n;
    }
    return result;
}

const degreeOf1 = exponentiation(2,5);

// //способ 2
function exponentiation2(n,m) {
    return n**m
} 
const degreeOf2 = exponentiation2(2,5);

//Функція №3
// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі); 

function capitalLetter(str) {
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.substring(1);
}
const firstName = "IRYNA";
const newFirstName = capitalLetter(firstName);

// Функція №4
// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
// (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805 

const salary = 1000;

function netSalary(sum) {
    let pod1 = sum * 0.195;
    return result = sum - pod1;
}

const salaryClean = netSalary(salary);

// Функція №5
//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(num1,num2){
    return Math.floor(Math.random() *(num2 - num1));
}
const randomNumber = getRandomNumber(10,87);

// Функція №6
//Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

let strfun5 = "fdsfsgsdggfhfhtrhrgsdfregsrgrsg";
let letter = "f";

function countLetter(st,letter) {
  let count = 0;
  letter = letter.toLowerCase();
  st = st.toLowerCase();
  for(let i = 0; i < st.length; i++){
    if(st[i].toLowerCase() === letter.toLowerCase()) count++;
  }
  return count;
}

const countLet = countLetter(strfun5, letter);

// Функція №7
//Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
//Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
//Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function currencyConverter(sum) {
    let convertIndex = 27.72
    let convertedNumber = parseInt(sum)
    if (sum.includes('$')) convertedNumber *= convertIndex
        else if (sum.toLowerCase().includes('uah')) convertedNumber /= convertIndex
            else convertedNumber = 'ERROR';
    
    return convertedNumber
}

// Функція №8
//Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
//Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(num) {
    if(num) length = num
        else length = 8;
        charset = "0123456789";
        password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

// Функція №9
//Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letter,str){
    let newLetter = letter.toLowerCase();
    let newStr = str.toLowerCase();
    let newWord = '';
    for (let i = 0; i < newStr.length; i++){
        if (newStr[i] !== newLetter){
            newWord += newStr[i];
        }
    }
    return newWord;
}


// Функція №10
//Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(str){
    str = str.replace(/\s/g, '').toLowerCase();
    for (let i = 0; i < str.length/2; i++){
        if (str[i] !== str[str.length-1-i]){
            return false;
        }
    }
    return true;
}
const strPalindrom = "Я несу гусеня";
const strPalindromNew = isPalyndrom(strPalindrom);

// Функція №11
//Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. 
//Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(str){
    str = str.toLowerCase();
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        let countLetters = str.split(str[i]).length-1;
        if (countLetters > 1){
            continue;
        }
        newStr += str[i];
    }
    return newStr;
}
const Duplicate = "Бісквіт був дуже ніжним";

console.log(`Функція №1: самая большая цифра ${maxNumbre} в числе ${num}
Функція №2 варіант 1 получили значение 2 в 5 степени ${degreeOf1}
Функція №2 варіант 2 получили значение 2 в 5 степени ${degreeOf2}
Функція №3 Передаю ${firstName} получаю ${newFirstName}
Функція №4 Передаю ${salary} получаю сумму с вычитом налога ${salaryClean}
Функція №5 Передали числа 10 и 87 получили рандомное число ${randomNumber}
Функция №6 Передали слово ${strfun5} спросили букву ${letter} получили ${countLet} в слове
Функція №7 Конвертор 100$ ${currencyConverter("100$")}, 100UAH ${currencyConverter("100UAH")}, ответ валюта не соответствет ни $ ни UAH ${currencyConverter("100EUR")}
Функція №8 Password ${getRandomPassword(12)} длина 12, ${getRandomPassword()} длина не задана
Функція №9 Передали в функцию букву "f" слово "wpoiwnpjfeifrijvneceokpfrvfh", результат ${deleteLetters("f", "wpoiwnpjfeifrijvneceokpfrvfh")}
Функція №10 Проверка строки ${strPalindrom}, результат функции ${strPalindromNew}
Функція №11  Удаляем повторяющие буквы , передаем "${Duplicate}" получаем : ${deleteDuplicateLetter(Duplicate)}
`)


// document.writeln(`Функція №1: ${maxNumbre}
// <br/>Функція №2 варіант 1 ${degreeOf1}
// <br/>Функція №2 варіант 2 ${degreeOf2}
// <br/>
// <br/>
// <br/>
// <br/>
// `)