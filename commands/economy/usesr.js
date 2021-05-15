module.exports = {
  name: "use-silver",
  code: `
  $setGlobalUserVar[Silver;$sub[$getGlobalUserVar[Silver;$authorID];1];$authorID]
  $description[You opened a **$customEmoji[gem]Silver Box** and got **⏣$random[5000;7000]**]
  $onlyIf[$getGlobalUserVar[Silver]>=1;:thinking:**You don't own this item?**]
  $color[RANDOM]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[5000;7000]]]`
}