module.exports = ({
name: "shopreward", 
code: `
$setGlobalUserVar[Utm;$sum[$getGlobalUserVar[Utm;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[premium]==true;:thinking:**You don't have premium**]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Redeemed Ultimate Lootbox]
$description[You have redeemed a **$customEmoji[chestlol]Ultimate Lootbox**!]
$cooldown[7d;You can redeem Ultimate Lootbox again in **%time%**]`
})