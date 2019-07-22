const router = require("express").Router();

const users = require("./users");
const runs = require("./runs");
const teachers = require("./teachers");

router.get("/", (req, res) => res.send("WineRuns API."));
router.use("/users", users);
router.use("/runs", runs);
router.use("/teachers", teachers);

module.exports = router;
