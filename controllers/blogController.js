const BlogEntry = require("../models/blog");

exports.getBlogEntries = async (req, res, next) => {
  try {
    const blogEntries = await BlogEntry.find();
    res
      .status(200)
      .json({ message: "Here you are", blogEntries: blogEntries });
  } catch (error) {
    console.log(error);
    error.message = "An error occured while fetching blogs.";
    next(error);
  }
};
exports.getBlogEntryById = async (req, res, next) => {
  try {
    const blogEntry = await BlogEntry.findById(req.params.id);
    if (blogEntry) {
      res.status(200).json({ message: "Here you are", blogEntry: blogEntry });
    } else {
      res.status(404).json({ message: "Not found a blog like that" });
    }
  } catch (error) {
    if (error.name == 'CastError') {
      error.statusCode = 404;
      error.message = "Wrong id";
    } else {
      error.message = "Could not fetch blog";
    }
    next(error);
  }
};
exports.addBlogEntry = async (req, res, next) => {
  try {
    const blogEntry = new BlogEntry({
      title: req.body.title,
      content: req.body.content,
      coverImageUrl: req.body.coverImageUrl,
      keywords: req.body.keywords
    });
    await blogEntry.save();
    res.status(201).json({
      message: "Created",
      _id: blogEntry._id
    });
  } catch (error) {
    console.log(error);
    error.message = "Could not created";
    next(error);
  }
};
exports.removeBlogEntry = async (req, res, next) => {
  try {
    const blogEntry = await BlogEntry.findById(req.params.id);
    if (blogEntry) {
      await blogEntry.remove();
      res.status(200).json({
        message: "Deleted."
      });
    } else {
      res.status(404).json({
        message: "Not found a blog like that."
      });
    }
  } catch (error) {
    console.log(error);
    error.message = "Could not delete blog";
    next(error);
  }
};
exports.editBlogEntry = async (req, res, next) => {
  try {
    const blogEntry = await BlogEntry.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content,
      coverImageUrl: req.body.coverImageUrl,
      keywords: req.body.keywords
    });
    if (blogEntry) {
      res.status(200).json({
        message: "Editing successful"
      });
    } else {
      res.status(404).json({
        message: "Not found a blog like that"
      });
    }
  } catch (error) {
    console.log(error);
    error.message = "Could not edit";
    next(error);
  }
};