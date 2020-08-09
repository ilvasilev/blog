const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const origamiSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },

    author: {
        type: ObjectId,
        ref: "User"
    },

    comments: [{
        type: ObjectId,
        ref: "Comment"
    }]
    

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Origami', origamiSchema);