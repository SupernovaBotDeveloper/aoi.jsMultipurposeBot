module.exports = ({
name: "buy-spacetrophy",
aliases: ['buy-trophy','buy-spacetro'],
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];100000000];$authorID]
$setGlobalUserVar[SpaceTro;$sum[$getGlobalUserVar[SpaceTro;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=100000000;You Need ⏣100,000,000 in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought a **$customEmoji[emoji_69]Space Trophy** for **⏣100,000,000**!]`
})