module.exports = ({
 name: "nuke",
 code: `
 $djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send(d.message.author.tag + ' nuked this channel! https://tenor.com/bko4E.gif')

 })
 .catch(() => d.message.channel.send('I dont have enough perms'))
]
$onlyPerms[managechannels;{title:Missing permissions!} {description:You are missing the \`MANAGE_CHANNELS\` permission which is needed to run this command} {color:RANDOM}]
$deleteIn[3s]`
});