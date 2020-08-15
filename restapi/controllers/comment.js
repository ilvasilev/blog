const models = require('../models');
const { model } = require('mongoose');

module.exports = {
    get: (req, res, next) => {        
        models.Comment.find().sort('-created_at').populate('article')
            .then((comments) => res.send(comments))
            .catch(next);
    },

    post: (req, res, next) => {
        const { comment, articleId } = req.body;
        const { _id, username } = req.user;               

        models.Comment.create({ comment, createdBy: username, author: _id })
            .then((createdComment) => {
                return Promise.all([
                    models.Origami.updateOne({ _id: articleId }, { $push: { comments: createdComment } }),
                    models.User.updateOne({ _id }, { $push: { comments: createdComment } })
                
                ]);
            })
            .then(([modifiedObj, commentObj]) => {
                res.send(commentObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.body.commentId;

        models.Comment.findByIdAndUpdate( id , { $inc: {like : 1}}, {new: true})
            .then((updatedOrigami) => res.send(updatedOrigami))
            .catch(next)
    },
};