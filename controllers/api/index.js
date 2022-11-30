const router = require('express').Router();
const userRoutes = require('./userRoutes');
const groupRoutes = require('./groupRoutes');
const postRoutes = require('./postRoutes');
const gameRoutes = require('./gameRoutes');
const commentRoutes = require('./commentRoutes');
const messageRoutes = require('./messageRoutes');
const channelCommentRoutes = require('./channelCommentRoutes');
const channelRoutes = require('./channelRoutes');
const groupMemberRoutes = require('./groupMemberRoutes');
const chatMemberRoutes = require('./chatMemberRoutes');

router.use('/users', userRoutes);
router.use('/groups', groupRoutes);
router.use('/posts', postRoutes);
router.use('/games', gameRoutes);
router.use('/comments', commentRoutes);
router.use('/messages', messageRoutes);
router.use('/channelcomments', channelCommentRoutes);
router.use('/channels', channelRoutes);
router.use('/groupmembers', groupMemberRoutes);
router.use('/chatmembers', chatMemberRoutes);

module.exports = router;