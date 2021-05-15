module.exports = ({
name: "buy-gold", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];10000];$authorID]
$setGlobalUserVar[Gold;$sum[$getGlobalUserVar[Gold;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=10000;You Need ⏣10,000 in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought a **$customEmoji[gem]Gold Lootbox** for **⏣10,000**!]`
})