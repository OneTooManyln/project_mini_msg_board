const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages: messages });
});

/* GET form page */
router.get("/new", function (req, res, next) {
  res.render("form");
});

/* POST */
router.post("/new", function (req, res, next) {
  const { message, name } = req.body;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
});

module.exports = router;
