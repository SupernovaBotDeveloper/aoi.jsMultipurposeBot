module.exports = {
 name: "join",
 aliases: ['connect'],
 code: `
Successfully joined <#$voiceid[$authorid]>
$joinvc[$voiceid[$authorid]]
$onlyif[$voiceid[$clientid]==;:x: Someone is listening to songs in another Voice Channel\nEither join their Voice Channel or use this command later.]
$onlyIf[$voiceid[$authorid]!=;:x: Please join a Voice Channel and use this command.]`
}