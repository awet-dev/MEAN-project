const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model('user', blogSchema);
module.exports = Blog;
