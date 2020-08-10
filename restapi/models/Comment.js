const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const commentSchema = new Schema({

    comment: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
        default: 0
    },

    author: {
        type: ObjectId,
        ref: "User"
    },

    createdBy: {
        type: String
    },

    article: {
        type: ObjectId,
        ref: "Origami"
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Comment', commentSchema);