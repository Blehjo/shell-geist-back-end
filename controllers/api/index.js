const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const groupRoutes = require('./groupRoutes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/groups', groupRoutes);

module.exports = router;