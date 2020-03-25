const BlogEntry = require("../models/blog");

exports.getBlogEntries = async (req, res, next) => {
  try {
    const blogEntries = await BlogEntry.find();
    res
      .status(200)
      .json({ message: "Buyrun!", blogEntries: blogEntries });
  } catch (error) {
    console.log(error);
    error.message = "Blog girdilerini alarken hata oluştu";
    next(error);
  }
};
exports.getBlogEntryById = async (req, res, next) => {
  try {
    const blogEntry = await BlogEntry.findById(req.params.id);
    if (blogEntry) {
      res.status(200).json({ message: "Buyrun", blogEntry: blogEntry });
    } else {
      res.status(404).json({ message: "Öyle bir blog bulunamadı." });
    }
  } catch (error) {
    if (error.name == 'CastError') {
      error.statusCode = 404;
      error.message = "Yanlış id";
    } else {
      error.message = "Blog bilinmeyen sebeple alınamadı";
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
      message: "Oluşturuldu",
      _id: blogEntry._id
    });
  } catch (error) {
    console.log(error);
    error.message = "Bilinmeyen sebeple oluşturulamadı";
    next(error);
  }
};
exports.removeBlogEntry = async (req, res, next) => {
  try {
    const blogEntry = await BlogEntry.findById(req.params.id);
    if (blogEntry) {
      await blogEntry.remove();
      res.status(200).json({
        message: "Silindi."
      });
    } else {
      res.status(404).json({
        message: "Öyle bir blog bulunamadı."
      });
    }
  } catch (error) {
    console.log(error);
    error.message = "Blog silinemedi";
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
        message: "Düzenleme başarılı"
      });
    } else {
      res.status(404).json({
        message: "Öyle bir blog bulunamadı"
      });
    }
  } catch (error) {
    console.log(error);
    error.message = "Düzenlerken bilinmeyen hata";
    next(error);
  }
};