// inizio ciclo

for (let i = 0; i <= 100; i++) {
    let output = '' ;
    
    // numeri divisibili per 3
 
    if (i % 3 == 0) {
        output += 'Fizz'
    } 

    // numeri divisibili per 5

    if (i % 5 == 0) {
        output += 'Buzz'
    }

    // numeri divisibili sia per 3 che per 5

    // if (i % 3 == 0 && i % 5 == 0) {
    //     output += 'FizzBuzz'
    // }

    // numeri non divisibili nè per 3 nè per 5

    if (output === '') {
        output = i;
    }

    console.log(output);
}