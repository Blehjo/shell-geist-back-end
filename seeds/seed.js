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

  process.exit(0);
};

seedAll();
