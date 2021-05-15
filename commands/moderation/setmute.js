module.exports = ({
  name: "setmute",
  aliases: ["setmuterole"],
  code: `
  $color[GREEN]
 $title[Done]
$description[Set <@&$findRole[$message[1]]> as a mute role]
$setServerVar[muted;$findRole[$message[1]]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;{description:This role doesn't exist}{color:RED}]
$onlyIf[$message[1]!=;{title:Error:Too few arguments given}
{field:**Usage**:\`setmute <role | roleID>\`}{color:RED}]
$onlyPerms[admin;Missing permission:\`admin\`]
$onlyBotPerms[admin;Missing permission:\`admin\`]
$suppressErrors` 
})