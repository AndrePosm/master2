//
//
//
// // 1. Создать функцию, которая возвращает true/false, на вход принимает обьект,
// //в котором есть поле age, и если age > 18 ? true : false
//
const user = { age: 21, name: 'Petya' }

      const user = {age:12, name:'Marove'}

      function goInsideToTheClub(user) {
      return user.age > 18;
      };

      const result = goInsideToTheClub(user);
      console.log(result);
//
//
// 2. Создать функция, которая на вход принимает любой тип данных и если это
//   строка нужно вернуть этуже строку, в обратном порядке.
//   Если это число, нужно возвести его в 5 степень.
//   Если это bool, то вернуть строку "Да"/"Нет"
//   В противном случае просто вернуть аргумент который пришел
 //
 function get(value) {
   if (typeof value === 'string') {
     return value.split("").reverse().join("");
      } else if (typeof value === 'number') {
     return Math.pow(value, 5);
     } else if (typeof value === 'boolean') {
     return value ? 'Yes': 'No';
    } return value;
 }

console.log(get('Andre One'));
console.log(get('25'));
console.log(get(true));
console.log(get(null));


 // 3. Создать функцию, которая на вход принимает произвольную строку,
 // и выводит (console.log) каждую вторую букву большим регистром (0, 2, 4, 5)
 // i % 2 === 0;
 //


 function changeStringToCamelLook(myWord) {

       let result = ''

      for (let i = 0; i < myWord.length; i++) {
      result += [i] % 2 === 0 ? myWord[i].toUpperCase() : myWord[i].toLowerCase();

    }
      return result;
}


     console.log(changeStringToCamelLook('Mercedes'));
     console.log(changeStringToCamelLook('Sical Holding AB'));
     console.log(changeStringToCamelLook('датимпула драч приети'));

    //  4. Создать функцию, которая на вход принимает произвольный массив имен и
    // выводит каждое имя, где первая буква большая, остальные маленькие
    //
    // // slice, toLowerCase, toUpperCase
    // const name = ['dima', 'Max', 'Petya', 'FEDER']
    // Dima, Max, Petya, Feder


const mass = ['SerGey', 'PetyA', 'ANdRé', 'sandRa']

 function transwormNames() {
   const result = [];

    for (let i = 0; i < mass.length; i++) {

      result.push(mass[i].slice(0,1).toUpperCase() + mass[i].slice(1).toLowerCase());

      // const firstLiter = mass[i].slice(0,1).toUpperCase();
      // firstLiter += mass[i].slice(1).toLowerCase();
      // result.push(firstLiter);

    }
    return result;
 }

 console.log(transwormNames(mass));
