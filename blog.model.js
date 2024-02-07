const mongoose = require('mongoose')

module.exports = mongoose.model('Blog', {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
    timestamps: { type: Date, default: Date.now }
});