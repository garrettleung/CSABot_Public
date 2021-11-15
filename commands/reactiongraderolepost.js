module.exports = {
    name: 'reactiongraderolepost',
    description: "Sets up reaction role message",
    async execute(message, args, Discord, client) {
        const channel = '813281366828384278'
        const freshmenRole = message.guild.roles.cache.find(role => role.name === "Freshman");
        const sophomoreRole = message.guild.roles.cache.find(role => role.name === "Sophomore");
        const juniorRole = message.guild.roles.cache.find(role => role.name === "Junior");
        const seniorRole = message.guild.roles.cache.find(role => role.name === "Senior");
        const gradRole = message.guild.roles.cache.find(role => role.name === "Grad/Alumni");

        const freshmenEmoji = '🥚';
        const sophomoreEmoji = '🐣';
        const juniorEmoji = '🐤';
        const seniorEmoji = '🐔';
        const gradEmoji = '🍗';

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
                if (reaction.emoji.name === gradEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gradRole);
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
                if (reaction.emoji.name === gradEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gradRole);
                }
            } else {
                return;
            }
        });
    }
}