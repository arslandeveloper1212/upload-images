const mongoose = require("mongoose");

const mulitipleFileSchema =new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    files:[Object]
}, {timestamps: true});

module.exports = mongoose.model("MultipleFile", mulitipleFileSchema);