const Rover = require('./rover.js');
const Message = require('./message.js');
const Command = require('./command.js');

    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
  console.log(response.results);


// let commands = new Command('STATUS_CHECK');
// let message = new Message('Status Check', commands);
// let rover = new Rover(98382);
// let response = rover.receiveMessage(message);
// console.log(response.results)

// should match ({completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}})