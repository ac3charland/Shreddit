const router = require("express").Router();
const postController = require("../../controllers/postController");
const voteController = require("../../controllers/voteController");
const commentController = require("../../controllers/commentController");

router.route("/")
    .get(postController.findAll)
    .post(postController.create);

router.route("/user/:username")
    .get(postController.findByUsername);

router.route("/:postId")
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.remove);

router.route("/:postId/votes")
    .post(voteController.create);

router.route("/:postId/comments")
    .post(commentController.create);

module.exports = router;