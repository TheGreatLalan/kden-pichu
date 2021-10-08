const { Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "removerole",
    aliases: ['rrole','RemoveRole', 'Removerole', 'REMOVEROLE'],
    description: "Remove a role from a member\n\nUsage: **+premoverole `<user>` `<role>`**",

    run: async(client, message, args) => {
        /**
         * @param {Message} message
         * @param {MessageEmbed} MessageEmbed
         */

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You dont have enough Permissions")

    const victim = message.mentions.members.first();
    if(!victim) return message.channel.send('Please specify a user')

    const role = message.mentions.roles.first();
    if(!role) return message.channel.send('Please specify a role to remove from the user')

    await victim.roles.remove(role)
    let em = new MessageEmbed()
    .setDescription(`Sucessfully removed the role from _**${victim.user.tag}**_ `)
    .setColor('GREEN')
    message.channel.send(em)
    }
}