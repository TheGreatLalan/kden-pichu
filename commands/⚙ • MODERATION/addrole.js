const { Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "addrole",
    aliases: ['arole', 'ar', 'AddRole', 'Addrole', 'ADDROLE', 'addr', 'AR', 'ADDR', 'AROLE'],
    description: "Add a role to a member\n\nUsage: **+paddrole `<user>` `<role>`**",

    run: async(client, message, args) => {
        /**
         * @param {Message} message
         * @param {MessageEmbed} MessageEmbed
         */

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You dont have enough Permissions")

    const victim = message.mentions.members.first();
    if(!victim) return message.channel.send('Please specify a user')

    const role = message.mentions.roles.first();
    if(!role) return message.channel.send('Please specify a role to add to a user')

    await victim.roles.add(role)
    let em = new MessageEmbed()
    .setDescription(`Sucessfully added the role to _**${victim.user.tag}**_ `)
    .setColor('GREEN')
    message.channel.send(em)
    }
}