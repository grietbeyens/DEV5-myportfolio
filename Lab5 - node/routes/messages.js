var express = require("express");
var router = express.Router();

const messages = [
  "Hello, world!",
  "I am a message!",
  "I am a message too!",
  "I am a message three!",
  "I am a message four!",
  "I am a message five!",
  "I am a message six!",
  "I am a message seven!",
  "I am a message eight!",
  "I am a message nine!",
  "I am a message ten!",
];

const getResponse = {
  status: "success",
  message: "getting messages",
  data: { messages },
};

/* GET api/v1/messages */
router.get("/", function (req, res, next) {
  res.json(getResponse);
});

module.exports = router;
