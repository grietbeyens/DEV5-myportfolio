var express = require("express");
var router = express.Router();

const messages = [
  { message: "Hello, world!", user: "Bob" },
  { message: "I am a message!", user: "Alice" },
  { message: "I am a message too!", user: "Fred" },
  { message: "I am a message three!", user: "Bob" },
  { message: "I am a message four!", user: "Alice" },
  { message: "I am a message five!", user: "Fred" },
  { message: "I am a message six!", user: "Layla" },
  { message: "I am a message seven!", user: "Alice" },
  { message: "I am a message eight!", user: "Layla" },
  { message: "I am a message nine!", user: "Bert" },
  { message: "I am a message ten!", user: "Charles" },
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

router.get("/:id", function (req, res, next) {
  const { id } = req.params; // const id = req.params.id;
  console.log("id", id);
  const message = messages[id];
  const getResponse = {
    status: "success",
    message: `getting message with id ${id}`,
    data: { message },
  };
  res.json(getResponse);
});

module.exports = router;
