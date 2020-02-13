const express = require("express");
const router = express.Router();

// Controller
const {
  renderImageForm,
  createNewImage,
  renderImages,
  profileImages,
  deleteImages
} = require("../controllers/images.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Image
router.get("/images/add", isAuthenticated, renderImageForm);

router.post("/images/new-note", isAuthenticated, createNewImage);

// Get All images
router.get("/images", isAuthenticated, renderImages);

//Get profile images

router.get("/images/profile/:id", isAuthenticated, profileImages);

// Delete images
router.delete("/images/delete/:id", isAuthenticated, deleteImages);

module.exports = router;