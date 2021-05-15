module.exports = {
  name: "steal",
  aliases: "rob",
  code: `
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];$random[200;2500]];$authorID]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$mentioned[1]];$random[250;2500]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[Stole!]
$description[You got ⏣$random[200;2500]! while stealing from $username[$mentioned[1]]]
$globalCooldown[3m;You can steal from someone's wallet again in **%time%**]
$onlyIf[$getGlobalUserVar[Money;$mentioned[1]]>=700;Their Wallet needs to contain at least $700 to be stolen from.]
$onlyIf[$isBot[$mentioned[1]]!=true;You can't steal from discord bots]
$onlyIf[$mentioned[1]!=$authorID;You can't rob yourself lol]
$onlyIf[$mentioned[1]!=;Mention someone to steal from their Wallet. Try this: \`$getServerVar[prefix]steal @user\`]
$setUserVar[Rob;true;$mentioned[1]]`
};