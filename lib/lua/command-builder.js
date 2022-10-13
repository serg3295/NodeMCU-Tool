const _esp32Commands = require('./esp32-commands');
const _esp8266Commands = require('./esp8266-commands');

let ioEnable = null;

// select a set of commands, depending on --io-module
function EspCommands(opt){

    if (opt === false || opt === true) {
        ioEnable = opt;
    }

    return ioEnable === true ? _esp32Commands : _esp8266Commands;
}

// prepare command be escaping args
function luaPrepare(commandName, args){

    const esp_commands = EspCommands();

    // get command by name
    let command = esp_commands[commandName] || null;

    // valid command name provided ?
    if (command == null){
        return null;
    }

    // replace all placeholders with given args
    args.forEach(function(arg){
        // simple escaping quotes
        arg = arg.replace(/[^\\]"/g, '"');

        // apply arg
        command = command.replace(/\?/, arg);
    });

    return command;
}

module.exports = {
    EspCommands: EspCommands,
    prepare: luaPrepare
};
