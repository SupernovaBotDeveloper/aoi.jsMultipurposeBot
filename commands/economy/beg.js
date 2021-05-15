module.exports = ({
    name: "beg",
    description: "Beg for money!",
    usage: "",
    category: "Economy",
    code: `$color[RANDOM]
    $description[You begged from $randomText[Elon Musk;your Neighbour;an Actor;a Beggar;the Imposter;man whom you gave a chocolate] and got **⏣$random[10;500]**!]
    $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[10;500]]]
    $cooldown[25s;{description: Don't beg so much... Do it again in **%time%!**}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`    
})