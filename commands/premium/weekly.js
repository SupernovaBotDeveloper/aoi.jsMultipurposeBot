module.exports = {
  name: "weekly",
  code: `
$title[Weekly Coins]
$description[Here's your Weekly Coins- **⏣10,000**]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];10000]]
$color[RANDOM]
$cooldown[7d;{title: Woah Dude Slow Down}{description: You would be able to use this command again in **%time%**.The Default Cooldown is **1 week**}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**:thinking:You don't have premium**]`
};
