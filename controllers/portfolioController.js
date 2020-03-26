const PortfolioEntry = require("../models/portfolio");

exports.getPortfolioEntries = async (req, res, next) => {
  try {
    const portfolioEntries = await PortfolioEntry.find();
    res
      .status(200)
      .json({ message: "Here you are", portfolioEntries: portfolioEntries });
  } catch (error) {
    console.log(error);
    error.message = "An error occured while fetching portfolios.";
    next(error);
  }
};
exports.getPortfolioEntryById = async (req, res, next) => {
  try {
    const portfolioEntry = await PortfolioEntry.findById(req.params.id);
    if (portfolioEntry) {
      res.status(200).json({ message: "Here you are", portfolioEntry: portfolioEntry });
    } else {
      res.status(404).json({ message: "Not found a portfolio like that" });
    }
  } catch (error) {
    if (error.name == 'CastError') {
      error.statusCode = 404;
      error.message = "Wrong id";
    } else {
      error.message = "Could not fetch portfolio";
    }
    next(error);
  }
};
exports.addPortfolioEntry = async (req, res, next) => {
  try {
    const portfolioEntry = new PortfolioEntry({
      title: req.body.title,
      content: req.body.content,
      coverImageUrl: req.body.coverImageUrl,
      keywords: req.body.keywords
    });
    await portfolioEntry.save();
    res.status(201).json({
      message: "Created",
      _id: portfolioEntry._id
    });
  } catch (error) {
    console.log(error);
    error.message = "Could not created";
    next(error);
  }
};
exports.removePortfolioEntry = async (req, res, next) => {
  try {
    const portfolioEntry = await PortfolioEntry.findById(req.params.id);
    if (portfolioEntry) {
      await portfolioEntry.remove();
      res.status(200).json({
        message: "Deleted."
      });
    } else {
      res.status(404).json({
        message: "Not found a portfolio like that"
      });
    }
  } catch (error) {
    console.log(error);
    error.message = "Could not delete portfolio";
    next(error);
  }
};
exports.editPortfolioEntry = async (req, res, next) => {
  try {
    const portfolioEntry = await PortfolioEntry.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content,
      coverImageUrl: req.body.coverImageUrl,
      keywords: req.body.keywords
    });
    if (portfolioEntry) {
      res.status(200).json({
        message: "Editing successful"
      });
    } else {
      res.status(404).json({
        message: "Not found a portfolio like that"
      });
    }
  } catch (error) {
    console.log(error);
    error.message = "Could not edit";
    next(error);
  }
};