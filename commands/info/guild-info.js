module.exports = {
name: "serverinfo",
aliases: ['guildinfo'],
code: `
$title[Server Information]
 $addField[💻 Server ID;$guildID]
 $addfield[👑 Server Owner;\`$userTag[$ownerID]\` ($ownerID)]
 $addField[🌌 Server Boosts;$djsEval[message.guild.premiumSubscriptionCount;yes] Activated (Level $djsEval[message.guild.premiumTier;yes]);no]
 $addField[🥇 Roles - 😎 Emojis;$roleCount Role's - $emojiCount Emoji's;no]
 $addField[🔊 Voice Channels;$sum[$channelCount[voice];$channelCount[stage]] Channel's;yes]
 $addField[💬 Text Channels;$channelCount[text] Channel's;yes]
 $addField[🗓 Created At;$formatDate[$creationDate[$guildID;ms]] ($humanizeMS[$sub[$dateStamp;$creationDate[$guildID;ms]]] ago)]
 $addField[🔘 Online Members,👥 Total Members/🤖 Bots;$sum[$membersCount[$guildID;online;yes];$membersCount[$guildID;dnd;yes];$membersCount[$guildID;idle;yes]] Online, $membersCount[$guildID;all;no] Member's/$botCount Bot's;no]
 $addField[🏆 Server Name;$serverName;no;$guildID]
 $color[#f2f2f2]
 $thumbnail[$djsEval[message.guild.iconURL({size:4096, dynamic:true}) ? message.guild.iconURL({size:4096, dynamic:true}) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBN38L_Rz05ufRYqCFHFOA7zZFJCEIG0LGg&usqp=CAU";yes]]
 $footer[Requested by $userTag[$authorID];$authorAvatar]
 $addTimestamp`
}