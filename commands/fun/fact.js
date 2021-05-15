module.exports = ({
name: "facts",
code: `$addTimestamp
$image[https://dinosaur.ml/overlay/facts/?text=$replaceText[$message; ;+]]
$title[Well that's true]
$color[RANDOM]`
});