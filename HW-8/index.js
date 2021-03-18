
    // У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
    // Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", 
    //метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.  
    // Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    // Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    // Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
    // Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
    // Створіть метод this.recover, який дозволить поновити студента


class Student {
    constructor(university, course, fullName) {
        this.university = university; 
        this.course = course; 
        this.fullName = fullName;
        this.marksArr = [];
        this.isDismissed = false;
    }

    getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        if (this.isDismissed === false) {
            return this.marksArr;
        } else {
            return null;
        }    
    }

    set marks(mark) {
        if (this.isDismissed === false) {
            this.marksArr.push(mark);
        }    
    }

    getAverageMark() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const sum = this.marksArr.reduce(reducer, 0);

        return sum / this.marksArr.length;    
    }

    dismiss() {
        this.isDismissed = true;
    }

    recover() {
        this.isDismissed = false;
    }
}

// створення нового студента

const ostap = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Родоманський Бендер');

console.log(`Інформація про студента`, ostap);

console.log(ostap.getInfo());

ostap.marks = 5;
ostap.marks = 5;
ostap.marks = 5;
ostap.marks = 4;
ostap.marks = 4;
console.log(`Оцінки студента`, ostap.marks);

console.log(`Середній бал студента`, ostap.getAverageMark());

ostap.dismiss();
ostap.marks = 2;
console.log(`Виключення студента `,ostap.marks);

ostap.recover();
ostap.marks = 3;
console.log(`Поновлення студента`, ostap.marks);

// Advanced
//     Створіть новий клас BudgetStudent, який повністю наслідує клас Student
//     Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
//     Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
//     Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
//     Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )
