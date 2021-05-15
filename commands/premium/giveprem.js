module.exports = ({
  name: "give-premium",
  code: `
   $title[Premium]
   $description[$customEmoji[greentick]Successfully gave premium to <@$mentioned[1]>]
   $color[RANDOM]
   $setGlobalUserVar[premium;true;$mentioned[1]]
   $onlyForIDs[$botOwnerID;Say Goodbye]`
})