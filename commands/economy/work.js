module.exports = ({
 name: "work",
 description: "You can earn money by working",
 category: "Economy",
 code: `
$title[Work]
$description[You $randomText[helped your Grandmother in making sweets;launched a rocket to mars;sold your pet dog;cooked food for your family;help crewmates to eject the imposter;mined at Lunar Surface;literally did nothing] and got ⏣$random[500;1000]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[500;1000]]]
$color[RANDOM]
$cooldown[20s;{description: Woah Dude Slow down! You can use this command again in **%time%**} {color: FF0000}]`
})
