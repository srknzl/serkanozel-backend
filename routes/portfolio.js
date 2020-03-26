const router = require("express").Router();
const isAuth = require("../middleware/isAuth");
const portfolioController = require("../controllers/portfolioController");

router.get("/portfolioEntries", portfolioController.getPortfolioEntries);
router.get("/portfolioEntries/:id", portfolioController.getPortfolioEntryById);

router.post(
  "/addPortfolioEntry",
  isAuth,
  portfolioController.addPortfolioEntry
);

router.put(
  "/editPortfolioEntry/:id",
  isAuth,
  portfolioController.editPortfolioEntry
);

router.delete("/deletePortfolioEntry/:id",
   isAuth,
  portfolioController.removePortfolioEntry);
module.exports = router;