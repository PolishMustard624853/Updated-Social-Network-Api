const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/user-controller');

// /api/students
router.route('/').get(getAllUsers).post(createUser);
// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
