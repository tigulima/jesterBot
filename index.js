const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.once('ready', () => {
    console.log('On!');
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'dm') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
            const role = message.mentions.roles.first();
            message.guild.roles.cache.get(role.id).members.forEach(member => member.send(`${args}`))

            if (!message.mentions.roles.size) {
                return message.reply('you need to tag a role in order to dm them!');
            }
        }
        message.channel.send(`${args}`);
});

client.login(config.token);