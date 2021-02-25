


// 1. Создать функцию, которая возвращает true/false, на вход принимает обьект,
//в котором есть поле age, и если age > 18 ? true : false

// const user = { age: 21, name: 'Petya' }

      const user = {age:19, name:'Marove'}

      function goInsideToTheClub(user) {
      return user.age > 18;
      };

      const result = goInsideToTheClub(user);
      console.log(result);
