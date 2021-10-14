//Libraries
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

// Database modal
import { ImageModel } from "../../database/allModels";

//Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params._id);

        return res.json({ image });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route            /
Des              Uploading given image to S3 bucket , and then saving the file to mongodb
Params           None
Access           Public
Method           POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        //S3 bucket options
        const bucketOptions = {
            Bucket: "zomatoclone123456",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        };


        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadImage });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;