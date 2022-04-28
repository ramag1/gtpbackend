const mongoose = require('../connection')
const Schema = mongoose.Schema


const InquirySchema = new Schema(
    {
        name: String,
        email: String,
        comments: String
    }
)

const Inquiry = mongoose.model("Inquiry", InquirySchema)

module.exports = Inquiry