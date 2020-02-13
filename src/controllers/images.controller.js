const imageCtrl = {};

// Models
const Image = require("../models/Image");

imageCtrl.renderImageForm = (req, res) => {
  res.render("images/upload");
};

imageCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "Please Write a Title." });
  }
  if (!description) {
    errors.push({ text: "Please Write a Description" });
  }
  if (errors.length > 0) {
    res.render("images/upload", {
      errors,
      title,
      description
    });
  } else {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save();
    req.flash("success_msg", "Image Added Successfully");
    res.redirect("/images");
  }
};

imageCtrl.renderImages = async (req, res) => {
  const images = await Image.find({ user: req.user.id }).sort({ date: "desc" });
  res.render("images/all-images", { images });
};


imageCtrl.deleteImages = async (req, res) => {
  await Image.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Image Deleted Successfully");
  res.redirect("/images");
};

imageCtrl.profileImages = async (req, res) => {
    const images = await Image.findById(req.params.id);
    res.render('/images/profile', { images });
    
}

module.exports = imageCtrl;


