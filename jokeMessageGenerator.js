//Joke Message Generator

// below random function to generate index number to messages variable
function random(numLength) {
let randNum = Math.floor((Math.random()*numLength));
return randNum; 
}

//messageGenerator to start of the program
function messageGenerator() {
    
    //Array of objects containing key/values
    const messages = [
        {Figs: 'Figs the doorbell, it’s not working!'},
        {Luke: 'Luke through the peep hole and find out.'},
        {Cow: 'No, a cow says mooooo!'},
        {Annie: 'Annie thing you can do, I can do too!'}
    ]

    //call for random function for index number
    let randomIndex = random(messages.length);

    let messageObject = messages[randomIndex];
    
    //once array selected from object, then output key/value contents in string literal format
    for (const [key, value] of Object.entries(messageObject)) {
        let output = `Me: Knock Knock,\nYou: Whose there?,\nMe: ${key},\nYou: ${key} who?\nMe: ${value}`;
        return output;
    }

}

//calls messageGenerator function and outputs results via console log
console.log(messageGenerator());

