module.exports = {
  name: "use-gold",
  code: `
  $setGlobalUserVar[Gold;$sub[$getGlobalUserVar[Gold;$authorID];1];$authorID]
  $description[You opened a **$customEmoji[gem]Gold Box** and got **⏣$random[10000;12000]**]
  $onlyIf[$getGlobalUserVar[Gold]>=1;:thinking:**You don't own this item?**]
  $color[RANDOM]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[10000;12000]]]`
}