//Joke Message Generator

function random(numLength) {
let randNum = Math.floor((Math.random()*numLength));
return randNum; 
}

// let testNum = random(10);

function messageGenerator() {
    const messages = [
        {Figs: 'Figs the doorbell, it’s not working!'},
        {Luke: 'Luke through the peep hole and find out.'},
        {Cow: 'No, a cow says mooooo!'},
        {Annie: 'Annie thing you can do, I can do too!'}
    ]

    let randomIndex = random(messages.length);

    // console.log(randomIndex);
    // console.log(messages[randomIndex]);

    let messageObject = messages[randomIndex];
    
    for (const [key, value] of Object.entries(messageObject)) {
        let output = `Me: Knock Knock,\nYou: Whose there?,\nMe: ${key},\nYou: ${key} who?\nMe: ${value}`;
        return output;
    }

}

console.log(messageGenerator());

