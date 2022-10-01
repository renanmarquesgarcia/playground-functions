// Desafio 11
function generatePhoneNumber(numbers) {
  
  if (numbers.length !== 11){
    return 'Array com tamanho incorreto.'    
  }
  
  let incompatibleNumber = 0;
  

  for(let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9){
      incompatibleNumber += 1
    }
  }

  let counts = {};
    numbers.forEach((count)=> {
       counts[count] = (counts[count] || 0) + 1
    });

    const maxVal = Math.max(...Object.values(counts));
    

  if(maxVal >= 3 || incompatibleNumber >= 1){
    return 'não é possível gerar um número de telefone com esses valores'
  }

  let ddd = '(' + numbers.splice(0, 2).join('') + ') '
  let firstFiveNumbers = numbers.splice(0, 5).join('') + '-'
  let lastFourNumbers = numbers.splice(0, 4).join(''); 
  return ddd + firstFiveNumbers + lastFourNumbers;
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
  let numbersArrayString = (string.match(reg)); //
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

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
