const router = require('express').Router();
const userRoutes = require('./userRoutes');
const groupRoutes = require('./groupRoutes');
const postRoutes = require('./postRoutes');
const gameRoutes = require('./gameRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/groups', groupRoutes);
router.use('/posts', postRoutes);
router.use('/games', gameRoutes);
router.use('/comments', commentRoutes);

module.exports = router;