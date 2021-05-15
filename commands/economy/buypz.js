module.exports = ({
name: "buy-pizza", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];200];$authorID]
$setGlobalUserVar[Pizza;$sum[$getGlobalUserVar[Pizza;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=200;You Need ⏣200 in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought 🍕Pizza for ⏣200!]`
})