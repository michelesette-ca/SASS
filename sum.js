function calculateSum(numbers) {
    console.log("Input array: ", numbers); // Step 1: Logging input
  
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
        // Debugging the loop logic
        console.log(`Current number: ${numbers[i]}, Current sum: ${sum}`);
  
        // Adding the current number to the sum
        sum += numbers[i];
    }
  
    console.log("Final sum: ", sum); 
    return sum;
  }
    
  const numbersArray = [10, 20, 30, 40, 50];
  const totalSum = calculateSum(numbersArray);
  