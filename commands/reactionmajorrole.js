module.exports = {
    name: 'reactionpronounrole',
    description: "Sets up reaction pronoun message",
    async execute(message, args, Discord, client) {
        const channel = '813281366828384278'
        const freshmenRole = message.guild.roles.cache.find(role => role.name === "freshmen");
        const sophomoreRole = message.guild.roles.cache.find(role => role.name === "sophomore");
        const juniorRole = message.guild.roles.cache.find(role => role.name === "junior");
        const seniorRole = message.guild.roles.cache.find(role => role.name === "senior");
        
        const freshmenEmoji = '🐣';
        const sophomoreEmoji = '🐤';
        const juniorEmoji = '🐔';
        const seniorEmoji = '🍗';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Role Assign: Grade')
            .setDescription('select a class which will give you access to private class channels\n\n'
                + `${freshmenEmoji} for freshmen\n\n`
                + `${sophomoreEmoji} for sophomore\n\n`
                + `${juniorEmoji} for junior\n\n`
                + `${seniorEmoji} for senior`);
            
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(freshmenEmoji);
        messageEmbed.react(sophomoreEmoji);
        messageEmbed.react(juniorEmoji);
        messageEmbed.react(seniorEmoji);
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === freshmenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(freshmenRole);
                }
                if (reaction.emoji.name === sophomoreEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sophomoreRole);
                }
                if (reaction.emoji.name === juniorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(juniorRole);
                }
                if (reaction.emoji.name === seniorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(seniorRole);
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
                if (reaction.emoji.name === freshmenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(freshmenRole);
                }
                if (reaction.emoji.name === sophomoreEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sophomoreRole);
                }
                if (reaction.emoji.name === juniorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(juniorRole);
                }
                if (reaction.emoji.name === seniorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(seniorRole);
                }
            } else {
                return;
            }
        });
    }
}