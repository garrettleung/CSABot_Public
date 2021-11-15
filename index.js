const Discord = require('discord.js');

const client = new Discord.Client({autofetch: [
    'MESSAGE_CREATE',
    'MESSAGE_UPDATE',
    'MESSAGE_REACTION_ADD',
    'MESSAGE_REACTION_REMOVE',
], partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.setMaxListeners(20);
for(let i = 0; i < 20; i++) {
    myEmitter.on('event', _ => console.log(i));
  }
  myEmitter.emit('event');
const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('CSABOT is online!');
    client.channels.fetch('813150608893804564').then(channel => {
        channel.messages.fetch('882822278130335815').then(message => {
            client.commands.get('reactionrulepost').execute(message, [], Discord, client);
        });
    });
    client.channels.fetch('813281366828384278').then(channel => {
        channel.messages.fetch('813572798835982356').then(message => {
            client.commands.get('reactiongraderolepost').execute(message, [], Discord, client);
        });
        channel.messages.fetch('813572817093525506').then(message => {
            client.commands.get('reactionpingrolepost').execute(message, [], Discord, client);
        });
    });
});

client.on("ready", () => {
    (async () => {/* ... */})()
      .catch(console.log);
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'reactiongraderole') {
        client.commands.get('reactiongraderole').execute(message, args, Discord, client);
    } else if(command === 'reactionrule') {
        client.commands.get('reactionrule').execute(message, args, Discord, client);
    } else if(command === 'reactionpronounrole') {
        client.commands.get('reactionpronounrole').execute(message, args, Discord, client);
    } else if(command === 'reactionpingrole') {
        client.commands.get('reactionpingrole').execute(message, args, Discord, client);
    }
});

client.on('close', () => {
    client.removeAllListeners();
})

client.login('placeholder');