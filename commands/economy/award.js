module.exports = ({
    name: "award",
    aliases: ['reward'],
    description: "Award a user some money[Developer Only]",
    usage: "award <user> <amount>",
    category: "economy",
    code: `$color[RANDOM]
    $author[$userTag[$findMember[$message[2]]];$userAvatar[$findMember[$message]]]
    $description[<@$findMember[$message[2]]> has been awarded **⏣$numberSeparator[$message[1]]**!]
    $setGlobalUserVar[Money;$sum[$getGLobalUserVar[Money;$findMember[$message[2]]];$message[1]];$findMember[$message[2]]]
    $onlyIf[$message[1]!=;{description: Specify the amount to award.}{color:RANDOM}]
    $onlyIf[$findMember[$message[2]]!=;{description: <@$botOwnerID>, maybe try mentioning a user?}{color:RANDOM}]
    $onlyIf[$isBot[$findMember[$message[2]]]==false;{description: Why not try mention a user that is not a bot?}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;{description: Please do this in a guild!}{color:RANDOM}]
    $onlyForIDs[$botOwnerID;{description:❌ You are not my Developer}{color:RANDOM}]
    $suppressErrors[{description: Correct Usage: $getServerVar[prefix]award <amount> <user>}{color:RANDOM}]
    `
})