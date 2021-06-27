const Post = require("../../models/post");

const handleCreatePost = async (req, res) => {
  const { title, body } = req.body;
  try {
    const newPost = await Post.create({
      title,
      body,
      user_id: req.session.userId,
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
  // get title and body from req body
  // insert new post with userId
};

module.exports = handleCreatePost;
