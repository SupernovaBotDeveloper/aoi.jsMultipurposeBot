module.exports = ({
name: "buy-silver", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];5000];$authorID]
$setGlobalUserVar[Silver;$sum[$getGlobalUserVar[Silver;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=5000;You Need ⏣5,000 in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought a **$customEmoji[gem]Silver Lootbox** for **⏣5,000**!]`
})