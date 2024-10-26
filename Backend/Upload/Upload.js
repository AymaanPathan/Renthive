const cloudinary = require("../Utils/cloudinary");

exports.uploadImage = (req, res, next) => {
  try {
    // Check if req.file is available
    if (!req.file) {
      return res.status(400).json({
        Status: "Failed",
        Message: "No file uploaded. Please check the form field name.",
      });
    }

    // Proceed with the upload
    cloudinary.uploader.upload(req.file.path, (result, error) => {
      if (error) {
        console.log("Cloudinary upload error:", error);
        return res.status(500).json({
          Status: "Failed",
          Message: "Error uploading image to Cloudinary.",
        });
      }

      // Attach the image URL to the request object for the next middleware
      req.imageUrl = result.secure_url; // Ensure secure URL is used
      next(); // Move to the next middleware
    });
  } catch (error) {
    console.error("Unexpected error in uploadImage:", error);
    res.status(500).json({
      Status: "Failed",
      Message: "Unexpected error during image upload.",
    });
  }
};
