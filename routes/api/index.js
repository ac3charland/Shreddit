const router = require("express").Router();
// Need to update for project
const bookRoutes = require("./books");

// Need to update routes
router.use("/books", bookRoutes);

module.exports = router;
