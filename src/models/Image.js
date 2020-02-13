const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    title: {type: String},
    description: {type: String},
    user: { type: String },
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    created_at: {type: Date, default: new Date()},
    like: {type: Number, default: 0}
});

module.exports = model('Image', imageSchema);