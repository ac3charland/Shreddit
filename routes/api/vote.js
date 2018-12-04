const router = require("express").Router();
const voteController = require("../../controllers/voteController");

router.route("/:voteId")
    .put(voteController.update)

module.exports = router;