const greeter = (myArray, counter) => {
    let greetText = 'Hello';

    for (const index of myArray){
        console.log(`${greetText} ${index}`);
    }
}

let wrestlers = ['Randy Savage', 'Ric Flair', 'Hulk Hogan']
greeter(wrestlers, 3)