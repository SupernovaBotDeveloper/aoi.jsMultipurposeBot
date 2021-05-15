module.exports = ({
    name: "leaderboard",
    aliases: ['lb'],
    description: "Check the money leaderboard",
    usage: "",
    category: "economy",
    code: `$title[Money Leaderboard]
    $color[RANDOM]
    $description[$globalUserLeaderBoard[Money;asc; {top}. **{username}**- ⏣{value}]]
    $cooldown[5s;{description:A bit too fast there. Wait for **time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})