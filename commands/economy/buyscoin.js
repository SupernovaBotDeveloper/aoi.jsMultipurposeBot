module.exports = ({
name: "buy-spacecoin",
aliases: ['buy-coin','buy-space'],
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];10000000];$authorID]
$setGlobalUserVar[SpaceCoin;$sum[$getGlobalUserVar[SpaceCoin;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=10000000;You Need ⏣10,000,000 in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought a **$customEmoji[emoji_70]Space Coin** for **⏣10,000,000**!]`
})