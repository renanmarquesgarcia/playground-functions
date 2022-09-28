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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
