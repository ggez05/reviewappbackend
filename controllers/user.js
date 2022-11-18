const Review = require("../modals/user");

exports.givereview = async (req, res) => {
  try {
    const { review, comment } = req.body;
    const rev = await new Review({
      review,
      comment,
    }).save();
    res.send({
      review: rev.review,
      comment: rev.comment,
      savedAt: rev.savedAt,
      id: rev._id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
