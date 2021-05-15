module.exports = ({
  name: "mute",
  code: `
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[Done]
$description[$username[$findMember[$message[1]]] has been muted]
$addField[Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;$customEmoji[fail] No reason given];false;$messageSlice[1]]]
$color[GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];This user has a role equal to or higher than me]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:This user has a role equal to or higher than you}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:You can't mute yourself}{color:RED}]
$onlyIf[$message[1]!=;{title:Error}{field:**Usage**:\`mute <member | userID>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role role has not been configured, type \`$getServerVar[prefix]setmute\` to set it}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
$suppressErrors`
})