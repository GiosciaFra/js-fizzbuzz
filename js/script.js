const container = document.querySelector('.output-container');

// inizio ciclo
for (let i = 1; i <= 100; i++) {

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
    
    // creazione nuovo elemento 'div' in HTML
    const newElement = document.createElement("div");
    newElement.innerHTML = output;

    // successivamente lo vado a modificare
    newElement.style.display = 'flex';
    newElement.style.justifyContent = 'center';
    newElement.style.alignItems = 'center';
    newElement.style.width = '70px';
    newElement.style.height = '70px';
    newElement.style.fontWeight = 'bold';

    if (output != 'Fizz' && output != 'Buzz' && output != 'FizzBuzz') {

        newElement.classList.add("number");
        newElement.style.backgroundColor = '#1389b2'

      } else if (output === 'Fizz') {

        newElement.classList.add('fizz');
        newElement.style.backgroundColor = '#0cd6a1'

      } else if (output === 'Buzz') {

        newElement.classList.add('buzz');
        newElement.style.backgroundColor = '#ffd166'

      } else if (output === 'FizzBuzz') {

        newElement.classList.add('fizzbuzz');
        newElement.style.backgroundColor = '#f0466f'
      }
    
    // stampa in console
    // console.log(output);

    // aggiunta elemento nel DOM tramite l'utilizzo di 'append'
    container.append(newElement);

}