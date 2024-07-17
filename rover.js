class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      if(message.commands === 'STATUS_CHECK') {
         roverStatusInput = {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position
         }
         let output = {completed: true, roverStatus: roverStatusInput}
         }
      return {
         message: message.name,
         results: message.commands
      }
      // this.message = {
      //    message: message.name,
      //    results: message.commands
      // };
   }
}

module.exports = Rover;