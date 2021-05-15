module.exports = ({
 name: "enable-anti-link",
 aliases: ['enableal'],
 code: `$description[**$customEmoji[success]Anti link has been enabled in the server**]
 $color[RANDOM]
$setServerVar[antilink;true]
$onlyIf[$getServerVar[antilink]!=true;{description: **Anti link is already enabled**}{color:RANDOM}]
$onlyPerms[manageserver;You need \`MANAGE_SERVER\` permission to use this command]`
})