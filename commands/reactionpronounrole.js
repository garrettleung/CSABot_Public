module.exports = {
    name: 'reactionpronounrole',
    description: "Sets up reaction role message",
    async execute(message, args, Discord, client) {

        const channel = '813281366828384278'
        const hehimrole = message.guild.roles.cache.find(role => role.name === "He/Him");
        const sheherrole = message.guild.roles.cache.find(role => role.name === "She/Her");
        const theythemrole = message.guild.roles.cache.find(role => role.name === "They/Them");
        const hetheyrole = message.guild.roles.cache.find(role => role.name === "He/They");
        const shetheyrole = message.guild.roles.cache.find(role => role.name === "She/They");
        message.channel.fetchMessages();
        const hehimEmoji = '💙';
        const sheherEmoji = '❤';
        const theythemEmoji = '💜';
        const hetheyEmoji = '💛';
        const shetheyEmoji = '💚';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Role Assign: Pronoun')
            .setDescription('Please select a pronoun\n\n'
                + `${hehimEmoji} : He/Him\n\n`
                + `${sheherEmoji} : She/Her\n\n`
                + `${theythemEmoji} : They/Them\n\n`
                + `${hetheyEmoji} : He/They\n\n`
                + `${shetheyEmoji} : She/They\n\n`);
            
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(hehimEmoji);
        messageEmbed.react(sheherEmoji);
        messageEmbed.react(theythemEmoji);
        messageEmbed.react(hetheyEmoji);
        messageEmbed.react(shetheyEmoji);
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === hehimEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(hehimrole);
                }
                if (reaction.emoji.name === sheherEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sheherrole);
                }
                if (reaction.emoji.name === theythemEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(theythemrole);
                }
                if (reaction.emoji.name === hetheyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(hetheyrole);
                }
                if (reaction.emoji.name === shetheyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(shetheyrole);
                }
            } else {
                return;
            }
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === hehimEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(hehimrole);
                }
                if (reaction.emoji.name === sheherEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sheherrole);
                }
                if (reaction.emoji.name === theythemEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(theythemrole);
                }
                if (reaction.emoji.name === hetheyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(hetheyrole);
                }
                if (reaction.emoji.name === shetheyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(shetheyrole);
                }
            } else {
                return;
            }
        });
    }
}