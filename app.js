const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.config = config;

client.on("ready", () => {
 console.log(`Loading......`)
 console.log(`Loading.......`)
 console.log(`Loading........`)
 console.log(`Sucessfully loaded.`);
 client.user.setActivity(`over the developers`, { type: 'WATCHING' })
});

client.on("message", async (message) => {
 let prefix = client.config.prefix;
 
 if(message.content === prefix + 'website') {
   let embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setDescription(`[Rubie Productions](https://www.rubieproductions.com)`)
    .setFooter(client.user.username, client.user.displayAvatarURL);
   message.channel.send(embed);
 }
});

client.login(process.env.TOKEN);
