// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  let stringsSeparation = string.split(' ');
  return stringsSeparation;
}

// Desafio 4
function concatName(names) {
  return  names[names.length - 1] + ', ' + names[0];
}


// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints;

  return totalPoints;  
}

// Desafio 6
function highestCount(numbers) {
  let biggestNumber;
  let biggestNumberApearrance = 0;

  for (let index = 0; index < numbers.length; index += 1){
    for(let index2 = 1; index2 < numbers.length; index2 += 1){
    if(numbers[index] > numbers[index2]){
      biggestNumber = numbers[index];
    }
  }
}
  for(index = 0; index < numbers.length; index += 1){
    if (biggestNumber === numbers[index]){
      biggestNumberApearrance +=1
    }
  }
  return biggestNumberApearrance;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {  
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  

  if((Math.abs(distanceCat1)) < (Math.abs(distanceCat2))){
    return 'cat1';   
  } else if((Math.abs(distanceCat1)) === (Math.abs(distanceCat2))){
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
    let resultado = ''
    let strings = [];

  for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      resultado = 'fizzBuzz'
    } else if (numbers[index] % 3 === 0){
      resultado = 'fizz'
    } else if (numbers[index] % 5 === 0){
      resultado = 'buzz'
    } else {
      resultado = 'bug!'
    }
    strings.push(resultado);
  }
  return strings;
}

// Desafio 9
function encode(string) {
  let newString = '';
    for (let index = 0; index < string.length; index = index + 1) {
      if (string[index] === 'a') {
        newString += '1';
      } else if (string[index] === 'e') {
        newString += '2'
      } else if (string[index] === 'i') {
        newString += '3'
      } else if (string[index] === 'o') {
        newString += '4'
      } else if (string[index] === 'u') {
        newString += '5'
      } else {
        newString += string[index];
      }
    }
    return newString;
}

function decode(string) {
  let newStringDecode = '';

    for (let index = 0; index < string.length; index = index + 1) {
      if (string[index] === '1') {
        newStringDecode += 'a';
      } else if (string[index] === '2') {
        newStringDecode += 'e'
      } else if (string[index] === '3') {
        newStringDecode += 'i'
      } else if (string[index] === '4') {
        newStringDecode += 'o'
      } else if (string[index] === '5') {
        newStringDecode += 'u'
      } else {
        newStringDecode += string[index];
      }
    }
return newStringDecode;
}

// Desafio 10
function techList(tech, name) {
  
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
