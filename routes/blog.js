const express = require("express");
const router = express.Router();

//GET ALL
router.get("/", (req, res) => {
  const blogs = Blog.find();
  return res.json(blogs);
});

//GET Single Blog
router.get("/blog/:id", (req, res) => {
  const { id } = req.params;
  const singleBlog = Blog.findById(id).populate("title");
  try {
    return res.status(200).json(singleBlog);
  } catch (error) {
    return res.status(500).json({ message: "could'nt get single blog" });
  }
});

//POST Single Blog
router.post("/blog", (req, res) => {
  const createBlog = Blog.create(req.body);
  try {
    return res.status(200).json(createBlog);
  } catch (error) {
    return res.status(500).json({ message: "could'nt post blog" });
  }
});

//DELETE Singe Blog
router.delete("/blog/:id", (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id);
  try {
    return res.json({ message: "Blog deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Could not delete project" });
  }
});

module.exports = router;
