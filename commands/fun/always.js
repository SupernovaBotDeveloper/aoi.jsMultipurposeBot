
module.exports = ({
name: "$alwaysExecute",
code: `$title[Congrats!]
$description[Congrats, you guessed the right number! The number was $message[1]! You have won **⏣500** Guess the number has now ended!]
$color[RANDOM]
$footer[Guess the number in $servername;$servericon]
$setservervar[winning_number;Doesn't exist.]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];500]]
$onlyif[$message[1]==$getservervar[winning_number];{title:Nope}{description:Too bad, that is not the winning number, try again!}{color:RED}{footer:Guess the number in $servername:$servericon}]
$onlyif[$channelid==$getservervar[guess_the_number_channel];]
$onlyif[$checkcontains[$message;1;2;3;4;5;6;7;8;9;0]==true;]
$onlyif[$checkcontains[$message;gtn;guessthenumber]==false;]
`
})