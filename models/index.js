const UserProfile = require('./UserProfile');
const UserPost = require('./UserPost');
const Friendship = require('./Friendship');
const PostComment = require('./PostComment');
const PostLike = require('./PostLike');
const Group = require('./Group');
const Game = require('./Game');

UserProfile.hasMany(UserPost, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

UserPost.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

UserProfile.hasMany(PostLike, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

PostLike.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

UserProfile.hasMany(Friendship, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

Friendship.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

UserProfile.hasMany(PostComment, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

PostComment.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

UserProfile.hasMany(Group, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
})

Group.belongsTo(UserProfile, {
    foreignKey: 'profile_id',
})

UserProfile.hasMany(Game, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

Game.belongsTo(UserProfile, {
    foreignKey: 'profile_id'
})

Group.hasMany(UserProfile, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

UserProfile.belongsTo(Group, {
    foreignKey: 'group_id',
})

UserPost.hasMany(PostLike, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

PostLike.belongsTo(UserPost, {
    foreignKey: 'post_id'
})

UserPost.hasMany(PostComment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

PostComment.belongsTo(UserPost, {
    foreignKey: 'post_id'
})

module.exports = { UserProfile, UserPost, Friendship, PostComment, PostLike, Group, Game };