module.exports = {
    name: 'reactionrulepost',
    description: "Sets up welcome and rules",
    async execute(message, args, Discord, client) {
        const channel = '813150608893804564'
        const memberRole = message.guild.roles.cache.find(role => role.name === "Member");
        
        const memberEmoji = '✅';

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === memberEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(memberRole);
                }
            } else {
                return;
            }
        });
    }
}


