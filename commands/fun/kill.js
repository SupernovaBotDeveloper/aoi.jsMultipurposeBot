module.exports = ({
name: "kill",
code: `
$title[🔪 Killing 🔪]
$argsCheck[>1;You must mention someone to kill, suicide ain’t good..]
$thumbnail[$authorAvatar]
$description[You stabbed <@$mentioned[1]>]
$footer[Stabbed him]
$addTimestamp
$color[86cf7c]`
}) 