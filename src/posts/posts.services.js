const postControllers = require("./posts.controllers");

const getAllPosts = (req, res) => {
  postControllers
    .findAllPosts()
    .then()
    .catch()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

module.exports = {
  getAllPosts,
};
