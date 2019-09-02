// /*
// =================
// AGE VERIFICATION
// =================

// [INSTRUCTION]
// Terdapat function ageVerification , function akan mengembalikan list orang yang memiliki umur diatas 19 tahun. Setiap nama juga akan diberikan imbuhan :
// - jika gender male diberikan imbuhan Mr.
// - jika gender female dan umur diatas 30 akan diberikan imbuhan Mrs.
// - jika gender female dan umur dibawah 30 akan diberikan imbuhan Ms.

// [EXAMPLE]
// input : ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']
// output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']

// [RULES]
// - dilarang menggunakan REGEX
// - dilarang menggunakan substring, substr, slice, splice
// */

// function ageVerification(list) {
//   // your code here
//   var hasil = [];
//   for (var i = 0; i < list.length; i++) {
//     var pisah = [];
//     var kalimat = "";
//     for (var j = 0; j < list[i].length; j++) {
//       if (list[i][j] == ",") {
//         pisah.push(kalimat);
//         kalimat = "";
//       } else if (j === list[i].length - 1) {
//         kalimat += list[i][j];
//         pisah.push(kalimat);
//       } else {
//         kalimat += list[i][j];
//       }
//     }
//     hasil.push(pisah);
//   }
//   var output = [];
//   for (var i = 0; i < hasil.length; i++) {
//     if (hasil[i][2] > 19) {
//       var akhir = "";
//       if (hasil[i][1] == "male") {
//         akhir += "Mr";
//       } else if (hasil[i][1] == "female" && hasil[i][2] > 30) {
//         akhir += "Mrs";
//       } else if (hasil[i][1] == "female" && hasil[i][2] < 30) {
//         akhir += "Ms";
//       }
//       var akhir = akhir + ". " + hasil[i][0];
//       output.push(akhir);
//     }
//   }
//   alert(`hasilnya adalah ${output}`);
// }

// var people = [
//   "Miftah,male,21",
//   "Dhimas,male,25",
//   "Budi,male,13",
//   "Toni,male,22",
//   "Nita,female,77",
//   "Nana,female,21",
//   "Nani,female,19"
// ];

// console.log(ageVerification(people));
// // ['Mr. Miftah', 'Mr. Dhimas', 'Mr.Toni', 'Mrs. Nita', 'Ms.Nana']

// var people2 = [
//   "Arya,female,22",
//   "Greyjoy,male,100",
//   "littlefinger,male,45",
//   "Bran,male,15"
// ];
// console.log(ageVerification(people2));
// // ['Ms. Arya', 'Mr. Greyjoy', 'Mr. littlefinger']
// console.log("Hello World");
// console.warn("Hello Warning");
// console.error("Hello Error");
// console.info("Hello Info");

// alert("Hello Alert");
// // STRING
// console.log("Hello World");

// const name = "Guntur Budi";

// console.log(`Hello ${name}`);

// alert(`Hello ${name}`);
// // NUMBER
// console.log(0);
// console.log(100);
// console.log(3.14);

// const age = 17;

// console.log(`His age is ${age}`);

// alert(`His age is ${age}`);
// // OBJECT
// console.log({ name: "Alpha", age: 100, superPower: true });
// console.log({
//   name: "Alpha",
//   age: 100,
//   superPower: true
// });

// const hero = { name: "Alpha", age: 100, superPower: true };

// console.log(hero);
// console.log(hero["name"]);
// console.log(hero.age);
// console.log(hero.superPower);

// alert(hero);
// alert(hero["name"]);
// alert(hero.age);
// alert(hero.superPower);
// // ARRAY
// console.log([1, 2, 3]);
// console.log([0, 1, 2, 3]);
// console.log(["Alpha", 100, true]);

// const person = ["Alpha", 100, true];
// const umur = [23, 24, 25];
// alert(`${umur[1]}`);

// console.log(person);
// console.log(person[0]);
// console.log(person[1]);
// console.log(person[2]);

// alert(person);
// alert(person[0]);
// alert(person[1]);
// alert(person[2]);
// // BOOLEAN
// console.log(true);
// console.log(false);
// console.log(true, false);

// const toggle = false;

// console.log(`The lamp's toggle is ${toggle}`);

// alert(`The lamp's toggle is ${toggle}`);
// const s = "Hello Guntur";
// console.log(s.toUpperCase());
// console.log(typeof s);
// const s2 = new String("hello boys");
// console.log(typeof s2);

// const book1 = {
//   buku: ["Halo", "Hello", "hi"]
// };
// console.log(longestStringForLoop(["boop", "bloomburg", "hello"]));
// console.log(longestStringReduce(["Guntur", "Budi", "Kurniawan"]));

// function longestStringForLoop(arr) {
//   let word = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (word.length < arr[i].length) {
//       word = arr[i];
//     }
//   }
//   return word;
// }
// function longestStringReduce(arr) {
//   return arr.reduce((a, b) => (a.length < b.length ? b : a), "");
// }
var human = {
  name: "Sarah",
  class: ["Guntur", "Budi", "Kurniawan", "Donna"]
};

// function filterArray(number) {
//   human.class;
//   return number > 2;
// }

//var classMoreThan2 = human.class.filter(filterArray);

//console.log(classMoreThan2);
// var human = {
//   name: "Sarah",
//   class: ["Guntur", "Felicia", "Ndul"]
// };

// console.log(human.class.filter(nama => nama.length == 4));
// Cara kedua
function filterArray(array) {
  var has4Char = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4) {
      has4Char.push(array[i]);
    }
  }
  return has4Char;
}

console.log(filterArray(human.class));
