module.exports = ({
name: "sell-pizza",
aliases: "sell-pizzas",
code: `$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];70];$authorID]
$setGlobalUserVar[Pizza;$sub[$getGlobalUserVar[Pizza;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Sell]
$description[<@$authorID>,You sold a 🍕Pizza and got ⏣70]
$onlyIf[$getGlobalUserVar[Pizza;$authorID]>=1;You need at least 1 \`Pizza\` in your inventory to sell]`
})