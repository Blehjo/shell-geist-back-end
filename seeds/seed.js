const sequelize = require('../config/connection');
const seedProfiles = require('./userProfileSeed');
const seedPosts = require('./userPostSeed');
const seedGroups = require('./groupSeed');
const seedGames = require('./gameSeed');
const seedComments = require('./commentSeed');
const seedLikes = require('./likeSeed');
const seedFriendships = require('./friendshipSeed');
const seedChannels = require('./channelSeed');
const seedChannelComments = require('./channelCommentSeed');
const seedConversations = require('./conversationSeed');
const seedChatMembers = require('./chatMemberSeed');
const seedGroupMembers = require('./groupMemberSeed');
const seedMessages = require('./messageSeed');
const seedEvents = require('./eventSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProfiles();
  
  await seedPosts();
  
  await seedGroups();

  await seedChannels();

  await seedChannelComments();

  await seedGames();
  
  await seedComments();
  
  await seedLikes();
  
  await seedFriendships();
  
  await seedConversations();

  await seedChatMembers();
  
  await seedGroupMembers();

  await seedMessages();

  await seedEvents();

  process.exit(0);
};

seedAll();
