const express = require("express");
const router = express.Router();
const {singleFileUpload,multipleFileUpload,getallSingleFiles, getallMultipleFiles} = require("../controllers/fileuploaderController");

const {upload} = require("../helpers/filehelper");


router.post("/singleFile", upload.single('file'), singleFileUpload);
router.post("/multipleFile",upload.array('files'), multipleFileUpload);
router.get("/getSingleFiles",getallSingleFiles );
router.get('/getMultipleFiles', getallMultipleFiles);
module.exports={
    routes: router
}