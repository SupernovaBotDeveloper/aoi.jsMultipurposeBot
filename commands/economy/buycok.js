module.exports = ({
name: "buy-cookie", 
code: `$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];20];$authorID]
$setGlobalUserVar[Cookie;$sum[$getGlobalUserVar[Cookie;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Money;$authorID]>=20;You Need $2500 in your Wallet]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[Purchase Successful]
$description[You Bought a 🍪Cookie for ⏣20!]`
})