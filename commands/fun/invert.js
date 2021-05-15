module.exports = ({
name: "invert",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/invert/?image=$userAvatar[$mentioned[1;yes]]]
$title[Invert]
$color[RANDOM]`
});