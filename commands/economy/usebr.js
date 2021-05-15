module.exports = {
  name: "use-bronze",
  code: `
  $setGlobalUserVar[Bronze;$sub[$getGlobalUserVar[Bronze;$authorID];1];$authorID]
  $description[You opened a **$customEmoji[gem]Bronze Box** and got **⏣$random[1000;2000]**]
  $onlyIf[$getGlobalUserVar[Bronze]>=1;:thinking:**You don't own this item?**]
  $color[RANDOM]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[1000;2000]]]`
}