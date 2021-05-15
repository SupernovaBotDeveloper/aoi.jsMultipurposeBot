module.exports = {
  name: "use-phone",
  code: `
  $description[Alright $username,we heard you're robbed,here Cosmos blesses you with ⏣1,000]
  $onlyIf[$getUserVar[Rob]==true;Listen buddy you're not robbed]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];1000]]
  $onlyIf[$getGlobalUserVar[Phone]>=1;:thinking:**You don't own this item**]`
}