module.exports = ({
    name: "membercount",
    aliases: ['memberscount','memcount'],
    usage: "",
    category: "Utility",
    code: `$color[RANDOM]
    $author[$serverName;$serverIcon]
    $description[**$membersCount** members]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})