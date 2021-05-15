module.exports = ({
name: "guessthenumber",
aliases: "gtn",
code: `$author[Guess the number in $servername;$servericon]
$title[Alrighty!]
$description[I have bound guess the number to this channel, I have chosen a random number between $message[1] and $message[2]]
$color[RANDOM]
$footer[Requested by $usertag;$authoravatar]

$setservervar[winning_number;$random[$message[1];$message[2]]]
$setservervar[guess_the_number_channel;$channelid]
$onlyif[$message[1]<$message[2];You have provided the wrong input, please make sure the first number is the min number and the second the max number.]
$onlyif[$message[2]>=150;The max number has to be at least be 150 or above to prevent exploits!]
$onlyif[$checkcontains[$message;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;lz;x;c;v;b;n;m]==false;You only need to use numbers as input.]
$argscheck[2;Please provide a min number and a max number.]
`
})