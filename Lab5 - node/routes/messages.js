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

router.post("/", function (req, res, next) {
  const { message } = req.body; // const message = req.body.message;
  console.log("message", message);
  const newMessage = {
    message: message.text,
    user: message.user,
  };
  messages.push(newMessage);
  const postResponse = {
    message: `POSTING a new message for user ${message.user}`,
  };
  res.json(postResponse);
});

router.put("/:id", function (req, res, next) {
  const { id } = req.params;
  const body = req.body; // dit werkt enkel als er in de body de key 'user' en of 'message' zit
  messages[id] = { ...messages[id], ...body }; // nieuwe text en user (=body) overschijft oude

  const putResponse = {
    message: `UPDATING a new message with id ${id}`,
  };
  res.json(putResponse);
});

module.exports = router;
