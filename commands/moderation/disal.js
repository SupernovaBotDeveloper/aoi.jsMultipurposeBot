module.exports = ({
 name: "disable-anti-link",
 aliases: ['disableal'],
 code: `$description[**$customEmoji[success]Anti link has been disabled in the server**]
 $color[RANDOM]
$setServerVar[antilink;false]
$onlyIf[$getServerVar[antilink]!=false;{description: **Anti link is not enabled**}{color:RANDOM}]
$onlyPerms[manageserver;You need \`MANAGE_SERVER\` permission to use this command]`
})