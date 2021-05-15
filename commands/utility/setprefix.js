module.exports = ({
name: "setprefix",
description: "Sets the Server Prefix",
category: "Utility",
usage: "prefix <your prefix>",
aliases: ['changeprefix', 'prefix'],
code: `$description[$customEmoji[greencheck]**Done, my new prefix is** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;$customEmoji[redx] **You dont have** \`ADMIN\` **perms**]`
})