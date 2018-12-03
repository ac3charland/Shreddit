const router = require("express").Router();
const commentController = require("../../controllers/commentController");

router.route("/:id")
    .delete(commentController.remove);

module.exports = router;