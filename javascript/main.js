function checkOddOrEven(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Example usage:
  const num = 227;
  const result = checkOddOrEven(num);
  console.log(`${num} is ${result}.`);
  
