  <br />
    <p>
    <a href="https://dbd.leref.ga"><img src="https://cdn.discordapp.com/attachments/773364744240496640/797696404146880512/logo-svg.png" alt="dbd.js" /></a>
  </p>

# DBD.JS

# This Package, allows you to make Discord Bot with ease!

## Are you Familiar with BDFD aka Bot Designer for Discord?

### Then you can easily transfer your code into this Package with no issues!

<a href="https://discord.gg/HMUfMXDQsV"><img src="https://discordapp.com/api/guilds/773352845738115102/embed.png" alt="Discord server" /></a>

### Example Usage

```js
const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "TOKEN",
  prefix: "!"
});
bot.onMessage();

bot.command({
  name: "ping",
  code: `$ping Pong!`
});
```

## Slash Commands Support

With easy and simple functions, you can make Slash Commands with your Bots quick!

```js
bot.command({
  name: "slash",
  code: `$createSlashCommand[$guildID;version;Returns DBD.js Version]`
});
bot.interactionCommand({
  name: "version",
  code: `$interactionReply[$packageVersion]`
});
bot.onInteractionCreate();
```

More Information in our [Documentation](https://dbd.leref.ga/guide/slash-commands)

## Music Support

With our powerful Package, we incorporated Music with several functions.
We allowed customization and control, over what you want.

## Music Function Examples

```js
$playSong - $playSong[song;leave vc time;defean (yes or no);error message]
$skipSong - Skip the current song in queue.
$stopSong - Stop all songs in queue.
$loopQueue - Loop all songs in queue.
$skipTo - Skip to a song in the current queue.
```

More Information in our [Documentation](https://dbd.leref.ga/guide/music)

### Using Variables

What are variables? They can be used for many things, especially allowing to save data.

Such as allowing level system, currency system and much more!

```js
bot.variables({
  Name: "Value",
  Name2: "Value2"
});
```

### Callbacks

What are callbacks?

It's simple and easy process, it essentially allows you to run events, such as user joining a Guild.
This will trigger a event, causing a code to be executed such as.

```js
bot.joinCommand({
  channel: "Channel ID",
  code: `<@$authorID> just joined, welcome!`
});
bot.onJoined();
```

### Setting Bot Status

Add a custom message to your Bot Activity!

```js
bot.status({
  text: "TEXT",
  type: "PLAYING",
  time: 12
});
```

## Support

If you don't understand something, confused, bug reports, errors, or need assistance. Join our [Official DBD.JS Official Support Server](https://discord.gg/HMUfMXDQsV)

[Documentation](https://dbd.leref.ga)
