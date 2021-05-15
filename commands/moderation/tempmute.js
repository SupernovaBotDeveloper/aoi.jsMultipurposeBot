module.exports = ({
  name: "tempmute",
  code: `
$channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] was unmuted}
{field:Reason:Tempmute finished}{color:GREEN}]
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$wait[$message[2]]
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
 $channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] has been muted for \`$message[2]\`}
{field:Reason:$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;$customEmoji[fail] No reason given];false;$messageSlice[2]]}{color:GREEN}]
 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];This user has a role equal to or higher than me]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:This user has a role equal to or higher than you}{color:RED}]
 
$onlyIf[$checkContains[$message[2];h;m;s]==true;{description:Put a valid time (h,m,s)}{color:RED}]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$message[2]!=;{title:Error}{field:**Usage**:\`tempmute <member | userID> <time>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role role has not been configured, type \`$getServerVar[prefix]setmute\` to set it}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
$suppressErrors`
})