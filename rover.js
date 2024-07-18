class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      let commandOutput = [];
      for (const element of message.commands) {
       if (element.commandType === 'STATUS_CHECK') {
         let roverStatusInput = {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position
         }
         commandOutput.push({completed: true, roverStatus: roverStatusInput});

      } else if (element.commandType === 'MODE_CHANGE') {
         if (element.value === 'LOW_POWER') {
            this.mode = 'LOW_POWER';
            commandOutput.push({completed: true});
         } else if (element.value === 'NORMAL') {
            this.mode = 'NORMAL';
            commandOutput.push({completed: true});
         } else {
            commandOutput.push({completed: false});
         }


      } else if (element.commandType === 'MOVE') {
         if (this.mode === 'LOW_POWER') {
            commandOutput.push({completed: false});
         } else if (this.mode === 'NORMAL') {
            this.position = element.value;
            commandOutput.push({completed: true});
         }
         


      } else {
         commandOutput.push({completed: false});
      }
      }
      return {
         message: message.name,
         results: commandOutput
      }
   }
}

module.exports = Rover;