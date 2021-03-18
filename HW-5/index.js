//1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
//У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.

function getRandomArray(length, min, max) {
    let randomArray = [];
    
    for (let i = 0; i < length; i++) {
      randomArray.push( Math.round(Math.random() * (max - min) + min) );
    }
    
    return randomArray;
};

console.log('Масив випадкових цілих чисел: ', getRandomArray(15, 1, 100))


// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getMode(...numbers) {
    const numArray = numbers.filter(number => Number.isInteger(number));
    const sortedArray = numArray.sort( (a, b) => a - b );
    let nums = {};
  
    sortedArray.forEach( elem => {
      if(nums[elem] === undefined) {
        nums[elem] = 0;
      }
      nums[elem] += 1;
    });
  
    const tempArr = Object.entries(nums);
    let maxValue = tempArr[0][1];
    let arrayMode = tempArr[0][0];
    tempArr.forEach(elem=> {
      if (elem[1] > maxValue) {
        maxValue = elem[1];
        arrayMode = elem[0];
      }
    });

    return arrayMode;
}

console.log('Масив випадкових цілих чисел: ', getMode(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))


//3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.

function getAverage(...numbers) {
    
    arrayOfIntegers = numbers.filter(num => Number.isInteger(num))

    const mean = arrayOfIntegers.reduce((sum, current) => sum + current, 0) / arrayOfIntegers.length
    
    return mean
}

console.log('Середнє арифметичне:', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))


//4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.

function getMedian(...numbers) {
    
    arrayOfIntegers = numbers.filter(num => Number.isInteger(num))

    const medianOfArray = arrayOfIntegers.sort((a, b) => (a - b)).reduce(function(previosValue, num, ind, arr) {
        if(arr.length % 2 == 0) {
            ind1 = arr.length / 2
            ind2 = arr.length / 2 + 1 
            return num = (arr[ind1] + arr[2]) / 2
        } else {
            ind = Math.floor(arr.length / 2) 
            return num = arr[ind]
        }
    })

    return medianOfArray
}

console.log('Медіанa:', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))


//5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

function filterEvenNumbers(...numbers) {
    return numbers.filter(num => num % 2 !== 0);
};

console.log('Фільтруємо парні числа:', filterEvenNumbers(1, 2, 3, 4, 5, 6))


//6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

function countPositiveNumbers(...numbers) {
    const aboveZero = numbers.filter(num => num > 0)

    return aboveZero.length
}


console.log('Кількість чисел більших 0: ', countPositiveNumbers(1, -2, 3, -4, -5, 6))

//7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

function getDividedByFive(...numbers) {
    const withoutRemainder = numbers.filter(num => num % 5 == 0)

    return withoutRemainder
}

console.log('Числа якы дыляться на 5 без залишку', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 100, 45))

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") 
// Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому. 

function replaceBadWords(string) {
    const wordsArr = string.split(' ');
    const badWords = ['fuck', 'shit'];
   
    const editArr = wordsArr.map(word => {
      for (const badWord of badWords) {
        if (word.includes(badWord)) {
          return word.replace(badWord, '*'.repeat(badWord.length));
        }  
      }
      return word;
    });
  
    const editString = editArr.join(' ');
  
    return editString;
};

console.log('Заміна поганих слів на * ', replaceBadWords("Are you fucking kidding? Holy shit! It's bullshit!"));

// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. 
// Якщо букв менше трьох – не розбиває. 
// Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 

function divideByThree(word) {
    let result = [];
  
    if (word.length <= 3) {
      result.push(word);
      return result;
    };
  
    let tempValue = '';
    for (let i = 0; i < word.length; i++) {
      tempValue += word[i];
      if (tempValue.length === 3) {
        result.push(tempValue);
        tempValue = '';
      }
    };
  
    if (tempValue !== '') {
      result.push(tempValue);
    };
  
    return result;
};
  
  console.log('Слово зозбито на умовні склади по 3 букви "wakeboarding"', divideByThree("wakeboarding"));
  console.log('Слово зозбито на умовні склади по 3 букви "product"', divideByThree("product"));
  console.log('Слово зозбито на умовні склади по 3 букви "big"', divideByThree("big"));