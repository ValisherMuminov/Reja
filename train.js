

// Task - C
//Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin///Masalan: checkLetters("carselon", "arlocesn") return qilish kerak true, checkLetters("dog", "game") return false
function checkLetters(word_x, word_y) {
  const x = word_x.split("");
  const y = word_y.split("");
  x.sort();
  y.sort();
  //return x.join('') === y.join('');
  if (x.length !== y.length) {
    return false;
  }
}
//let test = checkLetters("carselon", "lnocrsae");
let test = checkLetters("dog", "game");
console.log(test);

// Task - B
// Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive positive qiymatlarni olib return qilsin
// function getPositive(numbers) {
//   const positive_Number = numbers.filter((num) => num > 0);
//   return positive_Number;
// }
// numbers = [2, -3, -10, 9, 12, 32, 0, 1];
// positive_Numbers = getPositive(numbers);
// console.log("Positive Numbers", positive_Numbers);

// Task - A
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak.
// function countLetter(a, b) {
//   const x = b.split("");
//   const y = x.filter((ele) => {
//     return ele === a;
//   });
//   const result = y.length;
//   return result;
// }
// const result2 = countLetter("e", "engineering");
// console.log(result2);

// //---------------------------------------------------

// function countLetter_2(a, b) {
//   const x = b.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === a.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }

// const result3 = countLetter_2("e", "engineeering");
// console.log(result3);
