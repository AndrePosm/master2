


// 1. Создать функцию, которая возвращает true/false, на вход принимает обьект,
//в котором есть поле age, и если age > 18 ? true : false

// const user = { age: 21, name: 'Petya' }

    const user = {age: 22, name: 'Petya'};

    function canGoIn (user){
    return user.age > 18;
  }


console.log(canGoIn);
