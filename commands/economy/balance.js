module.exports = ({
name: "balance", 
aliases: "bal",
description: "Check your or someone's balance",
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RANDOM]
$title[$username[$mentioned[1;yes]]'s Balance]
$description[
$addField[💰 Wallet;
**⏣$numberSeparator[$getGlobalUserVar[Money;$mentioned[1;yes]]]**
]
$addField[🏦 Bank;
**⏣$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]**
]
$addField[📊 Net Worth;
**⏣$numberSeparator[$sum[$getGlobalUserVar[Money;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]**
]]`
})