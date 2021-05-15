module.exports = ({
name:"purge",
aliases: 'clear',
category: "Moderation",
usage: "purge <number>",
code:`$author[Purged messages!]
$title[$usertag]
$description[<@$authorid>, I successfully purged $replacetext[$replacetext[$checkcondition[$splittext[1]==$message];true;all($message/$message)];false;$splittext[1]/$message] messages!]
$footer[Thanks for using me!;$authoravatar]
$thumbnail[$useravatar[$clientid]]
$color[RANDOM]
$textsplit[$clear[$message;everyone;$channelid;yes]; ]
$onlybotperms[managemessages;I dont have manage messages permissions!]
$onlyperms[managemessages;You dont have manage messages permissions!]
$onlyif[$isnumber[$message]==true;Enter a valid no.of messages to purge!]
$deleteIn[3s]
$deletecommand`
})