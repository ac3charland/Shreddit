const router = require("express").Router();
const commentController = require("../../controllers/commentController");

router.route("/:id")
    .delete(commentController.remove);

router.route("/:postId")
    .get(commentController.findByPostId);

module.exports = router;