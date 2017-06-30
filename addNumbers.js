const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {


    reader.question('Enter a number to sum:', (numStr) => {
    const num = parseInt(numStr);

    sum += num;
    numsLeft--;
    if (numsLeft === 0) {
      completionCallback(sum);
      reader.close();
    } else {
      addNumbers(sum, numsLeft, completionCallback);
    }

  });

}

function finalMessage(sum) {
  console.log(`This is your total sum: ${sum}!`);
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
