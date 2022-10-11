const router = require('express').Router();

const {getThoughts, getSingleThought, createThought, deleteThought, updateThought} = require('../../controllers/thought-controller')

const {createReaction, deleteReaction} = require('../../controllers/thought-controller')

//thought routes
router.route('/').get(getThoughts).post(createThought)
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);

//reaction routes
router.route("/api/thoughts/:thoughtId/reactions").post(createReaction).delete(deleteReaction);

module.exports = router;