const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @route GET && POST - /posts/
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

router.route("/:id").get(postControllers.getPostById);
router.route("/:id").delete(postControllers.deletePost);
router.route("/:id").put(postControllers.updatePost);

module.exports = router;
