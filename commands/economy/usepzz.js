module.exports = {
  name: "use-pizza",
  code: `
  $setGlobalUserVar[Pizza;$sub[$getGlobalUserVar[Pizza;$authorID];1];$authorID]
  $description[You ate a **🍕Pizza**! You got **⏣$random[10;20;50]**]
  $onlyIf[$getGlobalUserVar[Pizza]>=1;:thinking:**You don't own this item?**]
  $color[RANDOM]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[10;20;50]]]`
}