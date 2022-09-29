// Desafio 11
function generatePhoneNumber(numbers) {
  return numbers.join();

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  if(lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > (Math.abs(lineB - lineC)) && lineB > (Math.abs(lineA - lineC)) && lineC > (Math.abs(lineA - lineB))){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  
  let reg = /\d+/g; // dentro das barras (/), eu defino minha expressão regular; d = digitos(números); + significa 1 ou mais; g é uma bandeira dizendo que eu quero todos os dígitos 
  let numbersArrayString = (string.match(reg));
  let numbersArray = []
  let sum = 0;

  for(let index = 0; index < numbersArrayString.length; index += 1){
    numbersArray.push(parseInt(numbersArrayString[index]));
  }
  for(let index = 0; index < numbersArray.length; index += 1){
    sum += numbersArray[index]  
  }
    if (sum === 1){
      return sum + ' copo de água';
    } else {
      return sum + ' copos de água';
    }
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
