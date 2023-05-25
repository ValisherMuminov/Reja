

//==================================< Task - E >=============================================
/* Task-E: shunday function tuzing unga faqat bitta musbat integer argument
 qilib berilsin, va u ushbu argumentni tub son bolsa true aksincha false return qilsin.
 Masalan: tubSonmi(5) return true, tubSonmi(10) return false. Tub sonlar faqat ozi va 1soniga toliq bolinadigan sonlar.*/

// let number_x = 30;
// number_x % 2 == 0 ? console.log("Juft son") : console.log("Toq son");
//===========================================================================
function tubSon(number) {
  
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const result = tubSon(10);
console.log(result);
//==================================< Task - D >=============================================

/*  D-Task: Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
 hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
  Har bir method ishga tushgan vaqt ham log qilinsin.
 Masalan: const shop = new Shop(4, 5, 2); shop.qoldiq() 
 return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
 shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 10, "minutes" time
  return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!*/

// const moment = require("moment");
// let time = moment();
// // const minut_oldin = time.add(10, "minutes").format("HH:mm");
// // const time = moment().format("HH:mm"); 
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }
 

//   sotish(maxsulot, son) {
//     if (maxsulot == "non") {
//       return (this.non -= son);
//     } else if (maxsulot == "lagmon") {
//       return (this.lagmon -= son);
//     } else {
//       return this.cola -= son;
//     }
//   }

//   qabul(maxsulot, son) {
//     if (maxsulot == "non") {
//       return (this.non += son);
//     } else if (maxsulot == "lagmon") {
//       return (this.lagmon += son);
//     } else {
//       return (this.cola += son);
//     }
//   }
//   qoldiq() {
//     console.log(
//       `Hozir ${time.add(10, "minutes").format("HH:mm")} da 
//       ${this.non} ta non, ${this.lagmon} ta lagmon, ${this.cola} ta cola mavjud!`
//     );
//   }
// }


// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("lagmon", 0);
// shop.qabul("cola", 4);
// shop.qoldiq();
//==================================<  ASYNC  function >=============================================

// ASYNC  function

// console.log("Jack Ma maslahatlari");
// const list_1 = [
//   "yahshi talaba bo'ling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "uzingiz ishlashni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo'q", // 60
// ];

// // Defination
// async function maslahatlarBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list_1[0];
//   else if (a > 20 && a <= 30) return list_1[1];
//   else if (a > 30 && a <= 40) return list_1[2];
//   else if (a > 40 && a <= 50) return list_1[3];
//   else if (a > 50 && a <= 60) return list_1[4];
//   else {
//     return list_1[5];

      // Promise function ichida core module ishlidi setTimeout, setInterval(asyncda ishlamidi)
        // return new Promise((resolve, reject) => {     // Keyinchalik shunde qilsayam boladi
        // //setInterval(() => {
        //     resolve(list_1[5]);
        //   }, 1000);
        // });
    
    // return new Promise((resolve, reject) => {
    //   setTimeout(function () {
    //     resolve(list_1[5]);
    //     }, 5000);
    //   });
//   }
// }
    

// Call via then/catch

// maslahatlarBering(20)
// .then((data) => {
//   maslahatlarBering(30)
//     .then((data) => {
//       maslahatlarBering(40)
//         .then((data) => {
//           console.log("javob:", data);  // 1 usul bunde qib yozsayam boladi lekin codimiz juda noqulay bop ketadi
//         })
//         .catch((err) => {
//           console.log("ERROR:", err);
//         });
//       console.log("javob:", data);
//     })
//     .catch((err) => {
//       console.log("ERROR:", err);
//     });
//   console.log('javob:', data);
// })
// .catch((err) => {
//   console.log("ERROR:", err);
// });

// Call via asyn/await   bu callback promise dan qutulishga yordam beradi

// async function run() {                         // 2 usul bunde qib yozsa qulay boladi
//   let javob = await maslahatlarBering(20); // ASYNC fda await  javob olmaguncha keyingisiga otmidi
//   console.log(javob);
//   javob = await maslahatlarBering(31);
//   console.log(javob);
//   javob = await maslahatlarBering(41);   // bunde holat/ pr-ng da juda kop va bunde joylada async va promise f/ yordamga keladi
//   console.log(javob);
// }
// run();

//==================================< CALBACK function >=============================================

// CALBACK function

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yahshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "uzingiz ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq", // 60
// ];

// function maslahatlarBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// maslahatlarBering("salom", (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");
//const server = http.createServer(app);  //single thread shu app hamma request/ shunga keladi shuni band qilmaslik un 1 usul: callback dan faydalanish

//==================================< Task - C >=============================================

//Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin///Masalan: checkLetters("carselon", "arlocesn") return qilish kerak true, checkLetters("dog", "game") return false

// function checkLetters(word_x, word_y) {
//   const x = word_x.split("");
//   const y = word_y.split("");
//   x.sort();
//   y.sort();
//   //return x.join('') === y.join('');
//   if (x.length !== y.length) {
//     return false;
//   }
// }
// //let test = checkLetters("carselon", "lnocrsae");
// let test = checkLetters("dog", "game");
// console.log(test);
//==================================< Task - B >=============================================

// Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive positive qiymatlarni olib return qilsin
// function getPositive(numbers) {
//   const positive_Number = numbers.filter((num) => num > 0);
//   return positive_Number;
// }
// numbers = [2, -3, -10, 9, 12, 32, 0, 1];
// positive_Numbers = getPositive(numbers);
// console.log("Positive Numbers", positive_Numbers);

//==================================< Task - A >=============================================

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
