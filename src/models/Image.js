const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
    like: { type : Number, default: 0},
    created_at: {type: Date, default: new Date()}
});

module.exports = model('Image', imageSchema);