// const router = require("express").Router();
// // Need to update for project
const postRoutes = require("./post");
const voteRoutes = require("./vote");
const commentRoutes = require("./comment");


// // Need to update routes



// module.exports = router;

const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use("/posts", require('./post'));
router.use("/votes", require('./vote'));
router.use("/comments", require('./comment'));

module.exports = router;
