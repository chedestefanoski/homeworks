function calculateSumMinMax(arr) {
    if (arr.length === 0) {
      return null; // Return null if the array is empty
    };


const max = Math.max (...arr); 
  const min = Math.min (...arr); 
  const sum = max + min; 

  return { max, min, sum }; 
};

const arr = [3, 5, 6, 8, 11];
const result = calculateSumMinMax(arr);
console.log(`Max: ${result.max}, Min: ${result.min}, Sum: ${result.sum}`);

function celosno(ime, prezime) {
    const imePrezime = [];
  
    for (let i = 0; i < ime.length; i++) {
      const polnoIme = `${i + 1}. ${ime[i]} ${prezime[i]}`; 
      imePrezime.push(polnoIme); 
    }
  
    return imePrezime; 
  };

  ["1. Bob Gregory", "2. Jill Wurtz"];

  const Ime = ["Bob", "Jill"];
  const Prezime = ["Gregory", "Wurtz"];
  const reseno = celosno(Ime, Prezime);
  console.log(reseno);

  
  let number = prompt("Enter a number:");

  if (!isNaN(number) && number !== "") {
    let product = 1;

    for (let i = 0; i < number.length; i++) {
      product *= parseInt(number[i]);
    }
  
    
    console.log("The product of the digits of " + number + " is: " + product);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  };



let firstArray = [1, 2, 3, 4, 5];
let secondArray = [];
let i = firstArray.length - 1;

while (i >= 0) {
  secondArray.push(firstArray[i]);
  i--;
}

console.log(secondArray);





