module.exports = ({
 name: "https://",
 code: `$description[**$username has sent a link
 Link- $message**]
 $color[RANDOM]
$deleteCommand
$onlyIf[$getServerVar[antilink]==true]`,
nonPrefixed: true
})