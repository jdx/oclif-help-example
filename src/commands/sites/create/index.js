const {Command} = require('@oclif/command')

class HelloCommand extends Command {
  async run() {
  }
}

HelloCommand.description = 'sites/create/index'

module.exports = HelloCommand
