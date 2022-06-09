const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thought-controller');

// /api/courses
router.route('/').get(getAllThoughts).post(addThought);
// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
