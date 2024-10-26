const cloudinary = require("../Utils/cloudinary");

exports.uploadImage = (req, res) => {
  try {
    cloudinary.uploader.upload(req.file.path, function (result, err) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          Status: "Failed",
          Message: err,
        });
      }
      res.status(200).json({
        Status: "Success",
        Message: "Image Uploaded!!",
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
