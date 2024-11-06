const cloudinary = require("../Utils/cloudinary");

exports.uploadImages = (req, res, next) => {
  try {
    // Check if files are provided
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        Status: "Failed",
        Message: "No files uploaded. Please check the form field names.",
      });
    }

    // Array to store the URLs of the uploaded images
    const uploadedUrls = [];

    // Loop through each file and upload it
    const uploadPromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.path, (result, error) => {
          if (error) {
            reject(error);
          } else {
            uploadedUrls.push(result.secure_url); // Store the URL of each image
            resolve();
          }
        });
      });
    });

    // Wait for all uploads to complete
    Promise.all(uploadPromises)
      .then(() => {
        res.status(200).json({
          Status: "Success",
          Message: "Images Uploaded Successfully!",
          imageUrls: uploadedUrls,
        });
      })
      .catch((error) => {
        console.log("Cloudinary upload error:", error);
        res.status(500).json({
          Status: "Failed",
          Message: "Error uploading images to Cloudinary.",
        });
      });
  } catch (error) {
    console.error("Unexpected error in uploadImages:", error);
    res.status(500).json({
      Status: "Failed",
      Message: "Unexpected error during image upload.",
    });
  }
};
