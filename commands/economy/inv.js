module.exports = {
  name: "inventory",
  aliases: "inv",
  code: `
  $title[$username's Inventory]
  $description[$addField[**Utility Items**;
**Phone: $getGlobalUserVar[Phone]
  Cookie: $getGlobalUserVar[Cookie]
  Pizza: $getGlobalUserVar[Pizza]**]
  
  $addField[**Lootboxes**; **Bronze Box: $getGlobalUserVar[Bronze]
  Silver Box: $getGlobalUserVar[Silver]
  Gold Box: $getGlobalUserVar[Gold]
  Platinum Box: $getGlobalUserVar[Platinum]
  Ultimate Box: $getGlobalUserVar[Utm]**]
  
  $addField[**Rare Items**; **Space Coin: $getGlobalUserVar[SpaceCoin]
  Space Trophy: $getGlobalUserVar[SpaceTro]**]
  $color[RANDOM]`
}