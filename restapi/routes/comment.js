const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.comment.get);

router.post('/', auth(), controllers.comment.post);

module.exports = router;