const router = require("express").Router();
const isAuth = require("../middleware/isAuth");
const blogController = require("../controllers/blogController");

router.get("/blogEntries", blogController.getBlogEntries);
router.get("/blogEntries/:id", blogController.getBlogEntryById);

router.post(
  "/addBlogEntry",
  isAuth,
  blogController.addBlogEntry
);

router.put(
  "/editBlogEntry/:id",
  isAuth,
  blogController.editBlogEntry
);

router.delete("/deleteBlogEntry/:id",
   isAuth,
  blogController.removeBlogEntry);
module.exports = router;