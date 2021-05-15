module.exports = ({
 name: "giveaway",
 code: `
$editMessage[$getServerVar[giveaway];{title:Giveaway Finished 🎉}{description:Prize: \`$replaceText[$message;$message[1] ;;-1]\`
Hosted By: **$userTag[$authorID]**
Winner: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;None, there were not enough participants.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer:Giveaway Finished.:$authorAvatar}]
$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;There were not enough participants.];false;The winner of the prize: **$replaceText[$message;$message[1];;-1]** is: <@$randomText[$joinSplitText[;]]>, Congratulations!]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[giveaway];🎉;id];$clientID,;];,]
$wait[$message[1]]
$setServerVar[giveaway;$sendMessage[{title:React with 🎉 to participate!.}{description:Prize: \`$replaceText[$message;$message[1] ;;-1]\`
Hosted By: **$userTag[$authorID]**
Time: **$message[1]**}{timestamp}{color:RED}{reactions:🎉};yes]]
$onlyIf[$message[2]!=;{title:Looking For Arguments}{description:You have not put any prize to draw.Follow This Format: 
\`\`\`
- $getServerVar[prefix]giveaway <time> <prize>.\`\`\`
\`Arguments with<> are required \`
}{color:ORANGE}]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title:Invalid Format}{description:The time format you just entered is invalid Follow this example:
\`\`\`
1s Is 1 second 
1m Is 1 minute
1h Is 1 hour
1d Is 1 day
\`\`\`}{color:RED}]

$onlyPerms[admin;{title:No Permission}{description:You Dont Have \`ADMINISTRATOR\` Permission To Use This Command.}{color:RED}]
`
}) 