module.exports = ({
  name: "remove-premium",
  code: `
   $title[Premium]
   $description[$customEmoji[greentick]Successfully removed premium from <@$mentioned[1]>]
   $color[RANDOM]
   $setGlobalUserVar[premium;false;$mentioned[1]]
   $onlyForIDs[$botOwnerID;Say Goodbye]`
})