const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


const girl = students.filter((el) => el.slice(-1) == "а");
const boy = students.filter((el) => el.slice(-1) !== "а");

console.log(girl);
console.log(boy);

// #1

function getPairs(students) {
    const pairs = [];
    
    for (let i = 0; i < boy.length; i++) {
        pairs.push([boy[i], girl[i]]);
    }
    return pairs;
}
const arrayGetPairs = getPairs(students);

console.log(arrayGetPairs);

// #2

function getPairsWithThemes (arrayGetPairs, themes) {

    const pairsWithThemes = [];
  
    for (let i = 0; i < arrayGetPairs.length; i++) {
      let stringPairs = arrayGetPairs[i].join(" та ");
      pairsWithThemes.push([stringPairs, themes[i]]);
    }
    return pairsWithThemes;
}

const arrayPairsWithThemes = getPairsWithThemes(arrayGetPairs, themes);
  
console.log(arrayPairsWithThemes);

// #3
  
const mark = (students, marks) => {
  let studentsSuccess = [];
  for (let i = 0; i < students.length; i++) {
    studentsSuccess = [...studentsSuccess, [students[i], + marks[i]]];
  }
  return studentsSuccess;
};
const students_marks = mark(students, marks);

console.log(students_marks);

// #4

function getMarksForGroup(arrayPairsWithThemes){
    const coppyArray = JSON.parse(JSON.stringify(arrayPairsWithThemes));
    
    for (let i = 0; i < arrayPairsWithThemes.length; i++) {
         function getRandomInt(min, max) {
         return Math.floor(Math.random() * (max - min)) + min;}
         coppyArray[i].push(getRandomInt(1 , 5) );
    }

return coppyArray;
    };
const arrayGroupMark = getMarksForGroup(arrayPairsWithThemes);
  
console.log(arrayGroupMark);


document.write(arrayGetPairs); 
document.writeln("<br>");
document.write(arrayPairsWithThemes);
document.writeln("<br>");
document.write(students_marks);
document.writeln("<br>");
document.write(arrayGroupMark);