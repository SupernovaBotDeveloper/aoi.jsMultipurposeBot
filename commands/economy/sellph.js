module.exports = ({
name: "sell-phone",
code: `$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];1000];$authorID]
$setGlobalUserVar[Phone;$sub[$getGlobalUserVar[Phone;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Sell]
$description[<@$authorID>,You sold your $customEmoji[Phone]Phone and got ⏣1000
$onlyIf[$getGlobalUserVar[Phone;$authorID]>=1;You need at least 1 \`Phone\` in your inventory to sell]`
})