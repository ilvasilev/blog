const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.origami.get.getAll);

router.get('/:id', controllers.origami.get.getSingle);

router.get('/:id/comments', controllers.origami.get.getComments);

router.post('/', auth(), controllers.origami.post);

router.put('/:id', auth(), controllers.origami.put.updateArticle);

router.put('/rating/:id', auth(), controllers.origami.put.updateRating);

router.delete('/:id', auth(), controllers.origami.delete);

module.exports = router;