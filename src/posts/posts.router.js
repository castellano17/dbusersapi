const router = require("express").Router();
const postServices = require("./posts.services");

router.route("/posts").get(postServices.getAllPosts);

router.route("/posts/:id");

module.exports = router;
