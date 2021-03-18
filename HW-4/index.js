

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


//Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
function getPairs(allStudents) {
    const studentsBoys = [allStudents[0],allStudents[1],allStudents[4]];
    const studentsGirls = [allStudents[2],allStudents[3],allStudents[5]];
    let studentsPairs = [];
    for (let i = 0; i < studentsBoys.length; i++) {
        studentsPairs[i] = [studentsBoys[i],studentsGirls[i]];
    }
    return studentsPairs;
}


//Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
function getThemes(pairs, themes) {
    const studentsPairsThemes = [];
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        // studentsPairsThemes[i] = pair[0] + " та " + pair[1];
        studentsPairsThemes[i] = pair.join(" і ");
    }
    for (let i = 0; i < studentsPairsThemes.length; i++) {
        studentsPairsThemes[i] = [studentsPairsThemes[i],themes[i]];
    }
    return studentsPairsThemes;
}


// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function getMarks(students, marks) {
    let studentsMarks =[];
    for (let i = 0; i < students.length; i++) {
        studentsMarks[i] = [students[i],marks[i]];
    }
    return studentsMarks;
}


// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
function getMarksPairs(pairs,  minMark, maxMark) {
    let pairsMarks = [];
    for (let i = 0; i < pairs.length; i++) {
        let mark = Math.floor(Math.random() * maxMark) + minMark;
        pairsMarks[i] = [...pairs[i], mark];
    }
    return pairsMarks;
}


const pairs = getPairs(students);
const themesForPairs = getThemes(pairs, themes);
const marksForStudents = getMarks(students, marks);
const marksForPairs = getMarksPairs(themesForPairs, 1, 5);


console.log(`Студенти розділені на пари: ${pairs}
Пари студентів та їх проекти: ${themesForPairs}
Оцінки студентів: ${marksForStudents}
Випадкові оцінки від 1 до 5: ${marksForPairs}
`);

