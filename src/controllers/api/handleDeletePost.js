const { Post } = require("../../models");

const handleDeletePost = async (req, res) => {
  // get id from req params
  // destroy post
  res.json("delete post here");
  const { id } = req.params;

  await Post.destroy({ where: { id } });

  res.status(200).json({ message: "success" });
};

module.exports = handleDeletePost;
