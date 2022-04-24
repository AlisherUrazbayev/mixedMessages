//An object stores diffrent message's parts.
const data = {
    places: ['Toronto','London','Dresden','your dreams','the afternoon','the morning'],
    actions: ['find true love','meet your best friend','create something special','achive your goal'],
    items: ['money','a car','a watch','a new phone','a bag full of diamons'],
    circumstances: ['the time comes','certain event will happen','it is time','the sun goes down'],
    animal: ['a dog','a cat','a wolf','a fish','a lion','a deer']
}

const randomNumberGenerator = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber);
}

const messageGenerator = () => {
    let message = '';
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: 
            message = `Today you will ${data.actions[randomNumberGenerator(data.actions.length)]} in ${data.places[randomNumberGenerator(data.places.length)]}`;
            break;
        case 1:
            message = `Soon you should get ${data.items[randomNumberGenerator(data.items.length)]} when ${data.circumstances[randomNumberGenerator(data.circumstances.length)]}`;
            break;
        case 2: 
            message = `Your sacret animal this year is ${data.animal[randomNumberGenerator(data.animal.length)]}`;
            break;
    }

    return message;
}

console.log(`Your prediction: ${messageGenerator()}`);