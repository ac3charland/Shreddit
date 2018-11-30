const router = require("express").Router();
// Need to update for project
const postRoutes = require("./post");
const voteRoutes = require("./vote");

// Need to update routes
router.use("/posts", postRoutes);
router.use("/votes", voteRoutes);


module.exports = router;
