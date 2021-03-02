

  const arr = [1,2,3,4,5,6,7,8,9,10];
  const max = arr.length - 1;
  //

  function getRandomInteger(min, max) {

  let rand = min - 0.5 + Math.random() * (max - min + 1);
  const result = Math.round(rand);
  return result;
}


// from 2 to 5


 //

 //
 let randGirl = 2 - 0.5 + Math.random() * (max - 2 + 1);
 const fuckResult = Math.round(randGirl);

 console.log(fuckResult);


const getRandomHumanFromFn = getRandomInteger (0,max);
const getRandomGirlFromFn = getRandomInteger (5,max);
const getRandomBoyFromFn = getRandomInteger (0,5);
