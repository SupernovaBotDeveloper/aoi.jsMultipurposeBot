module.exports = {
  name: "use-platinum",
  code: `
  $setGlobalUserVar[Platinum;$sub[$getGlobalUserVar[Platinum;$authorID];1];$authorID]
  $description[You opened a **$customEmoji[gem]Platinum Box** and got **⏣$random[20000;25000]**]
  $onlyIf[$getGlobalUserVar[Platinum]>=1;:thinking:**You don't own this item?**]
  $color[RANDOM]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[20000;25000]]]`
}