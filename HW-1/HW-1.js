
const  priceProduct1 = 15.678;
const  priceProduct2 = 123.965;
const  priceProduct3 = 90.2345;

// Math.max() Використовуючи вбудований об'єкт Math – виведіть максимальне число
const priceMax = Math.max(priceProduct1,priceProduct2,priceProduct3);
console.log(priceMax);

// Math.min() Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const priceMin = Math.min(priceProduct1,priceProduct2,priceProduct3);
console.log(priceMin);

// sum() Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму 
const priceSum = priceProduct1+priceProduct2+priceProduct3;
console.log( priceSum);

//  Math.floor() Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const priceProduct1Floor = Math.floor(priceProduct1);
const priceProduct2Floor = Math.floor(priceProduct2);
const priceProduct3Floor = Math.floor(priceProduct3);
console.log(priceProduct1Floor+", "+priceProduct2Floor+", "+priceProduct3Floor);

const priceSumFloor = priceProduct1Floor+priceProduct2Floor+priceProduct3Floor;
console.log( priceSumFloor);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const priceProduct1RoundingPlus  = Math.ceil(priceProduct1 /100)*100;
const priceProduct2RoundingPlus  = Math.ceil(priceProduct2 /100)*100;
const priceProduct3RoundingPlus  = Math.ceil(priceProduct3 /100)*100;
console.log(priceProduct1RoundingPlus+", "+priceProduct2RoundingPlus+", "+priceProduct3RoundingPlus);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
function isEven(number) { 
    return number % 2 === 0; 
}
const priceSumInt = isEven(priceSumFloor);
console.log( priceSumInt)

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const remainderSum = 500-priceSum;
console.log(remainderSum)

//Виведіть середнє значення цін, округлене до другого знаку після коми
const averageValue = (priceSum/3).toFixed(2);
console.log(averageValue)

//Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random). 
const discount = Math.floor(Math.random() * 100) + 1;
const invoice = (priceProduct2-discount).toFixed(2);
const netProfit = (priceProduct2/2-(priceProduct2-invoice)).toFixed(2);
console.log("discount: "+ discount +"\r\n"+ "invoice: "+invoice+"\r\n"+ "Profit: "+netProfit)

console.log("Максимальна ціна: " + priceMax +"\r\n"+ 
"Мінімальна ціна: " + priceMin +"\r\n"+ 
"Вартість всіх товарів: " + priceSum +"\r\n"+
"Сума товарів без копійок округлена в меньшу сторону: " + priceSumFloor +"\r\n"+
"Ціна товару округленна до сотень: "  + priceProduct1RoundingPlus+", "+priceProduct2RoundingPlus+", "+priceProduct3RoundingPlus +"\r\n"+
"Сумма всіх товарів парне чи непарне: " + priceSumInt +"\r\n"+
"Решта при оплаті 500 грн.: " + remainderSum +"\r\n"+
"Середня ціна округлена до сотих: " + averageValue  +"\r\n"+
"Випадкова знижка: " + discount  +"\r\n"+
"Ціна продукту: " + priceProduct2  +"\r\n"+
"Рахунок зі знижкою: " + invoice  +"\r\n"+
"Чистий прибуток: " + netProfit  +"\r\n"
)