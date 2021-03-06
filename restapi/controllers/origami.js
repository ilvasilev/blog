const models = require('../models');
const { model } = require('mongoose');

module.exports = {
    get: {
      getAll:  (req, res, next) => {        
        const length = req.query.length ? parseInt(req.query.length) : 20
        models.Origami.find().sort('-created_at').limit(length).populate('author')
            .then((origamies) => res.send(origamies))
            .catch(next);
    },
    getSingle: (req, res, next) => {
        const { id } = req.params
        
        models.Origami.findById(id).populate('author').lean()
        .then((single) => res.send(single))
        .catch(next)
    },
    getComments: (req, res, next) => {
        const { id } = req.params
        
        models.Origami.findById(id)            
            .populate({path: 'comments', options: { sort: { 'created_at': -1 } } })            
            .then((resp) => res.send(resp))
            .catch((err) => res.status(500).send("Error"))
    }
    },

    post: (req, res, next) => {        
        const { title, content, imageUrl } = req.body;
        const { _id, username } = req.user;

        models.Origami.create({ title, content, imageUrl, createdBy: username, author: _id })
            .then((createdOrigami) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdOrigami } }),
                    models.Origami.findOne({ _id: createdOrigami._id })
                ]);
            })
            .then(([modifiedObj, origamiObj]) => {                
                res.send(origamiObj);
            })
            .catch(next);
    },

    put: {
        updateArticle: (req, res, next) => {            
            const id = req.params.id;
            const { title, content, imageUrl } = req.body;
            models.Origami.updateOne({ _id: id }, { title, content, imageUrl })
                .then((updatedOrigami) => res.send(updatedOrigami))
                .catch(next)
    },
        updateRating: (req, res, next) => {
            const id = req.params.id;
            const {value} = req.body
            console.log(value)                     

            models.Origami.findByIdAndUpdate( id, {rating: value}, {new: true} )
                .then((updatedOrigami) => res.send(updatedOrigami))
                .catch(next)
    }        
    },

    delete: (req, res, next) => {
        const id = req.body.articleId;
        models.Origami.deleteOne({ _id: id })
            .then((removedOrigami) => res.send(removedOrigami))
            .catch(next)
    }
};