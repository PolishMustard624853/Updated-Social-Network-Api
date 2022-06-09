const router = require('express').Router();
const thoughtRoutes = require('./thought-Routes');
const userRoutes = require('./userRoutes');

router.use('/Thought', thoughtRoutes);
router.use('/students', userRoutes);

module.exports = router;
