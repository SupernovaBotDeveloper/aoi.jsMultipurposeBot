module.exports = ({
name: "rip",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/rip/?image=$userAvatar[$mentioned[1;yes]]]
$title[R.I.P]
$color[RANDOM]`
});
