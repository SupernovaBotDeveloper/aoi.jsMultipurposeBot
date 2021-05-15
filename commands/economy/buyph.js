module.exports = ({
name: "buy-phone", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];2500];$authorID]
$setGlobalUserVar[Phone;$sum[$getGlobalUserVar[Phone;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=2500;You Need 2500 in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought $message[1] $customEmoji[Phone]Phones for ⏣2,500!]`
})