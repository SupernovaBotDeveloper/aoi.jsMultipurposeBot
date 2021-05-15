module.exports = {
  name: "rickroll",
  code: `
  $description[Send Rickroll DM to <@$mentioned[1]>]
  $sendDM[$mentioned[1];{title:lol}{description: Never Gonna Give You up,Never Gonna let you down,say goodbye}{color:RANDOM}]
  $color[RANDOM]
  $onlyIf[$getGlobalUserVar[premium]==true;:thinking:**You don't have premium**]
  $suppressErrors[$customEmoji[tf]**Mention someone**]`
}