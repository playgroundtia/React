const router = require("express").Router();
const controller = require("../controllers/teachers");

const auth = require("./auth");

const db = require("../db");
const jwt = require("jsonwebtoken");
const jwtSecret = "@WineRunsPalavraSuperSecretakkkk!";

router.use(auth.checkJWT({ jwt, jwtSecret }));
router.get("/", controller.get({ db }));

module.exports = router;
