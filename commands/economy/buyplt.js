module.exports = ({
name: "buy-platinum", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];20000];$authorID]
$setGlobalUserVar[Platinum;$sum[$getGlobalUserVar[Platinum;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=20000;You Need ⏣20,000 in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought a **$customEmoji[gem]Platinum Lootbox** for **⏣20,000**!]`
})