module.exports=({
 name: "$alwaysExecute",
 code: `$channelSendMessage[$channelID;{title:Dude Wtf?}{description:$customEmoji[tf]This command does not exists! Don't Try to break me!}{color:RANDOM}]
$onlyIf[$commandinfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
$onlyIf[$stringStartsWith[$message;$getServerVar[prefix]]!=false;]`
})