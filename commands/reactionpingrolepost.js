module.exports = {
    name: 'reactionpingrolepost',
    description: "Sets up reaction role message",
    async execute(message, args, Discord, client) {
        const channel = '813281366828384278'
        const amongusrole = message.guild.roles.cache.find(role => role.name === "Among Us");
        const valorantrole = message.guild.roles.cache.find(role => role.name === "Valorant");
        const studyrole = message.guild.roles.cache.find(role => role.name === "Study");
        const watchrole = message.guild.roles.cache.find(role => role.name === "Watch Parties");
        const leaguerole = message.guild.roles.cache.find(role => role.name === "League");

        const amongusEmoji = '🤫';
        const valorantEmoji = '🔫';
        const studyEmoji = '📚';
        const watchEmoji = '📺';
        const leagueEmoji = '😈';

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === amongusEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(amongusrole);
                }
                if (reaction.emoji.name === valorantEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(valorantrole);
                }
                if (reaction.emoji.name === studyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(studyrole);
                }
                if (reaction.emoji.name === watchEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(watchrole);
                }
                if (reaction.emoji.name === leagueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(leaguerole);
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
                if (reaction.emoji.name === amongusEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(amongusrole);
                }
                if (reaction.emoji.name === valorantEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(valorantrole);
                }
                if (reaction.emoji.name === studyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(studyrole);
                }
                if (reaction.emoji.name === watchEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(watchrole);
                }
                if (reaction.emoji.name === leagueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(leaguerole);
                }
            } else {
                return;
            }
        });
    }
}