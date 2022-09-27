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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {  

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
  
}


function decode() {
  // seu código aqui
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
