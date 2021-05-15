module.exports = ({
name: "sell-cookie",
aliases: "sell-cookies",
code: `$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];5];$authorID]
$setGlobalUserVar[Cookie;$sub[$getGlobalUserVar[Cookie;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Sell]
$description[<@$authorID>,You sold your 🍪Cookie and got ⏣5]
$onlyIf[$getGlobalUserVar[Cookie;$authorID]>=1;You need at least 1 \`Cookie\` in your inventory to sell]`
})