module.exports = {
 name: "leave",
 aliases: ['disconnect', 'dc'],
 code: `
Successfully disconnected from <#$voiceid[$clientid]>
$leavevc
$onlyif[$voiceid[$clientid]!=;:x: I am not connected to any Voice Channel.]
$onlyIf[$voiceid[$authorid]!=;:x: Please join a Voice Channel and use this command.]`
}