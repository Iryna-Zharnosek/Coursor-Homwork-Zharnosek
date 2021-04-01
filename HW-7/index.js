
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
//Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary){
    return this.tax * salary;
}
 
console.log(`Функція яка виводить, скільки податків ви заплатите як IT-спеціаліст в Україні`, getMyTaxes.call(ukraine, 500));
 
//2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). 
//Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes(){
    return Number((this.tax * this.middleSalary).toFixed(2));
}
 
console.log(`Функція яка виводить, скільки у середньому податків платятт IT-спеціалісти у Латвії`, getMiddleTaxes.call(latvia));
 
//3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). 
//Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes(){
    return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2));
}
 
console.log(`Функція яка виводить, скільки всього податків платять IT-спеціалісти у Литві`, getTotalTaxes.call(litva));
 

//4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

const getMySalary = function(country) {
    setInterval(() => {
        const newObject = {};
        newObject.salary = Math.trunc(Math.random() * (2000 - 1500) + 1500);
        newObject.taxes = +(newObject.salary * country.tax).toFixed();
        newObject.profit = +(newObject.salary - newObject.taxes).toFixed();
        console.log('After 10 seconds', newObject);
    }, 10000);
}
    getMySalary(ukraine);
    setTimeout(() => { 
        clearInterval(getMySalary); 
        alert('stop'); 
    }, 50000);