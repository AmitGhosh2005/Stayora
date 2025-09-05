/** @format */

const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");

const reviewCOntroller = require("../controllers/reviews.js");

const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

//Review route --Post
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewCOntroller.cretaeReview)
);

//Delete Review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewCOntroller.deleteReview)
);

module.exports = router;
