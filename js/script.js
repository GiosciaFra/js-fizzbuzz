// manipoliamo il DOM
const container = document.querySelector('.output-container');



// inizio ciclo

for (let i = 0; i <= 100; i++) {


    // creazione nuovo elemento 'div'
    const newElement = document.createElement('div');
    
    let output = '' ;

    
    // numeri divisibili per 3
    
    if (i % 3 == 0) {
        output += 'Fizz'
    } 
    
    // numeri divisibili per 5
    
    if (i % 5 == 0) {
        output += 'Buzz'
    }
    
    // numeri non divisibili nè per 3 nè per 5
    
    if (output === '') {
        output = i;
    }
    
    newElement.innerHTML = output;
    
    // stampa in console
    console.log(output);

    // aggiunta elemento nel DOM tramite l'utilizzo di 'append'
    container.append(newElement);

}