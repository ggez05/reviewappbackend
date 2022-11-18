const express = require("express");
const { givereview } = require("../controllers/user");

const router = express.Router();

router.post("/givereview", givereview);

module.exports = router;
