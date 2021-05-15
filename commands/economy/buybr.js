module.exports = ({
name: "buy-bronze", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];3000];$authorID]
$setGlobalUserVar[Bronze;$sum[$getGlobalUserVar[Bronze;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=3000;You Need ⏣3,000 in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought a **$customEmoji[gem]Bronze Lootbox** for **⏣3,000**!]`
})