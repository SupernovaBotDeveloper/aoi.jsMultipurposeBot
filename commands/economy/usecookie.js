module.exports = {
  name: "use-cookie",
  code: `
  $setGlobalUserVar[Cookie;$sub[$getGlobalUserVar[Cookie;$authorID];1];$authorID]
  $description[You ate a 🍪**Cookie**! Now your Multiplier is increased by **10%**]
  $onlyIf[$getGlobalUserVar[Cookie]>=1;:thinking:**You don't own this item?**]
  $color[RANDOM]`
}