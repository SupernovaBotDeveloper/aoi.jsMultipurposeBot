module.exports = ({
    name: "daily",
    description: "Claim your daily money!",
    usage: "",
    category: "economy",
    code: `
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[100;5000]]]
$color[RANDOM]
$description[You claimed your daily and got ⏣$random[100;1000]!]
$cooldown[1d;{description: You can claim your next daily money in **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})